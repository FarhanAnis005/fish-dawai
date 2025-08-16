// src/app/api/diagnose/route.ts

import { NextResponse } from "next/server"
import { GoogleGenerativeAI, Part } from "@google/generative-ai"
import { categories } from "@/lib/data"

// Initialize Gemini
// Ensure your GEMINI_API_KEY is set in your .env file
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

// Generate a flat list of all possible symptoms from our data file
const allSymptoms = categories.flatMap((category) => category.symptoms)

/**
 * Analyzes user-provided text and/or images to identify fish disease symptoms.
 * @param textDescription The user's text description (optional).
 * @param imageParts An array of image Parts for Gemini to analyze (optional).
 * @returns A promise that resolves to an array of identified symptom IDs.
 */
async function analyzeWithGemini(
    textDescription: string | null,
    imageParts: Part[]
  ): Promise<string[]> {
    // Return early if there's nothing to analyze
    if (!textDescription && imageParts.length === 0) {
      return []
    }
  
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })
  
    // --- Start of Corrected Section ---
  
    // Build an array of Parts. Every element must be a valid Part object.
    // We wrap all text content in { text: "..." } objects.
    const textParts: Part[] = [
      {
        text: `You are an expert fish disease diagnostician. Your task is to identify symptoms from the user's text description and/or images.
        You must strictly match the symptoms against the following known list.
    
        Known Symptoms List:
        ${JSON.stringify(allSymptoms)}
    
        Analyze the user's submission below. Based on all the evidence (text and images), return a JSON object with a single key "identifiedSymptoms", which is an array of the symptom IDs you identified.
        For example: { "identifiedSymptoms": ["redness", "ulcers", "white_spots"] }
        
        If no symptoms are identified, return an empty array.`,
      },
    ]
  
    // Add the text description as a new Part if it exists
    if (textDescription) {
      textParts.push({ text: `\n\nUser's Description:\n"${textDescription}"` })
    }
  
    // Combine the text and image parts into a single, correctly typed array
    const allParts: Part[] = [...textParts, ...imageParts]
  
    try {
      // The model expects a GenerateContentRequest object
      const result = await model.generateContent({
        contents: [{ role: "user", parts: allParts }],
      })
      
      // --- End of Corrected Section ---
  
      const responseText = result.response.text()
  
      // Clean the response to ensure it's valid JSON before parsing
      const jsonString = responseText.replace(/```json|```/g, "").trim()
      const parsed = JSON.parse(jsonString)
  
      return parsed.identifiedSymptoms || []
    } catch (error) {
      console.error("Error analyzing content with Gemini:", error)
      return [] // Return an empty array on error
    }
  }

export async function POST(request: Request) {
  try {
    const formData = await request.formData()

    // --- Input Gathering ---
    const symptomsFromCheckboxes = formData.getAll("selectedSymptoms") as string[]
    const textDescription = (formData.get("textDescription") as string) || null
    const uploadedPhotos = formData.getAll("uploadedPhotos") as File[] // Handle multiple files

    // --- AI Analysis ---
    const imageParts: Part[] = []
    for (const photo of uploadedPhotos) {
      // Filter out any empty file inputs
      if (photo && photo.size > 0) {
        const buffer = Buffer.from(await photo.arrayBuffer())
        imageParts.push({
          inlineData: {
            data: buffer.toString("base64"),
            mimeType: photo.type,
          },
        })
      }
    }

    // Call our single, unified analysis function
    const symptomsFromAI = await analyzeWithGemini(textDescription, imageParts)
    console.log("Symptoms from Checkboxes:", symptomsFromCheckboxes)
    console.log("Symptoms from AI (Text & Images):", symptomsFromAI)

    // --- Symptom Aggregation & Logic ---
    // Combine all identified symptoms and remove duplicates
    const allIdentifiedSymptoms = [
      ...new Set([...symptomsFromCheckboxes, ...symptomsFromAI]),
    ]

    // Find all categories that contain at least one of the identified symptoms
    const matchingCategories = categories.filter((category) =>
      category.symptoms.some((symptom) => allIdentifiedSymptoms.includes(symptom.id))
    )

    if (matchingCategories.length === 0 && allIdentifiedSymptoms.length > 0) {
      // Optional: Handle cases where symptoms were found but no category matched
    }

    return NextResponse.json(matchingCategories)
  } catch (error) {
    console.error("Diagnosis API Error:", error)
    return NextResponse.json({ message: "An error occurred during diagnosis." }, { status: 500 })
  }
}