"use client";

import type React from "react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Camera, CheckSquare, FileText, Stethoscope } from "lucide-react";
import { DiagnosisResult } from "./diagnosis-result";
import { categories, type DiagnosisData } from "@/lib/data";
import { ImageUploader } from "./image-uploader";

export function DiagnosisForm() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [textDescription, setTextDescription] = useState("");
  const [uploadedPhotos, setUploadedPhotos] = useState<File[]>([]);
  const [diagnosisResult, setDiagnosisResult] = useState<DiagnosisData[] | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);

  const uniqueSymptoms = useMemo(() => {
    const allSymptoms = categories.flatMap((category) => category.symptoms);
    const seenIds = new Set<string>();

    return allSymptoms.filter((symptom) => {
      if (seenIds.has(symptom.id)) {
        return false;
      }
      seenIds.add(symptom.id);
      return true;
    });
  }, []);

  const handleSymptomChange = (symptom: string, checked: boolean) => {
    if (checked) {
      setSelectedSymptoms((prev) => [...prev, symptom]);
    } else {
      setSelectedSymptoms((prev) => prev.filter((s) => s !== symptom));
    }
  };

  // ✅ REMOVED: The old `handlePhotoUpload` function is no longer needed
  // because the <ImageUploader /> component handles all file logic internally.

  const handleSubmit = async () => {
    setIsLoading(true);
    setDiagnosisResult(null);
    const formData = new FormData();

    selectedSymptoms.forEach((symptom) => {
      formData.append("selectedSymptoms", symptom);
    });

    if (textDescription) {
      formData.append("textDescription", textDescription);
    }

    // ✅ CORRECTED: Loop through the `uploadedPhotos` array and append each file.
    // The key "uploadedPhoto" should match what your backend API expects.
    if (uploadedPhotos.length > 0) {
      uploadedPhotos.forEach((file) => {
        formData.append("uploadedPhotos", file);
      });
    }

    try {
      const response = await fetch("/api/diagnose", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to get diagnosis from the server.");
      }
      const results: DiagnosisData[] = await response.json();
      setDiagnosisResult(results);
    } catch (error) {
      console.error("There was an error submitting the diagnosis:", error);
      setDiagnosisResult([]);
    } finally {
      setIsLoading(false);
    }
  };

  const canSubmit = () => {
    // ✅ CORRECTED: Check the length of the `uploadedPhotos` array.
    return (
      selectedSymptoms.length > 0 ||
      uploadedPhotos.length > 0 ||
      textDescription.trim().length > 0
    );
  };

  if (diagnosisResult) {
    return (
      <DiagnosisResult
        data={diagnosisResult}
        onReset={() => setDiagnosisResult(null)}
      />
    );
  }

  return (
    <div className="space-y-6">
      <Card className="border-2 border-blue-200">
        <CardHeader>
          <CardTitle className="text-center text-xl text-blue-900">
            Describe Your Fish Health Problem
          </CardTitle>
          <p className="text-center text-sm text-blue-600">
            Use any combination of methods below to help us diagnose the issue
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Symptoms Section */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-blue-900 mb-4">
              <CheckSquare className="h-5 w-5" />
              Select Symptoms
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {uniqueSymptoms.map((symptom) => (
                <div key={symptom.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={symptom.id}
                    checked={selectedSymptoms.includes(symptom.id)}
                    onCheckedChange={(checked) =>
                      handleSymptomChange(symptom.id, checked as boolean)
                    }
                  />
                  <label
                    htmlFor={symptom.id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {symptom.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Photo Upload Section */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-blue-900 mb-4">
              <Camera className="h-5 w-5" />
              Upload Photos
            </h3>
            <ImageUploader
              onFileChange={setUploadedPhotos}
              maxSizeMb={5}
              maxFiles={5}
            />
          </div>

          {/* Text Description Section */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-blue-900 mb-4">
              <FileText className="h-5 w-5" />
              Describe the Problem
            </h3>
            <Textarea
              placeholder="Please describe the symptoms you've observed in your fish or pond. Include details about behavior, appearance, water conditions, and any recent changes..."
              value={textDescription}
              onChange={(e) => setTextDescription(e.target.value)}
              className="min-h-32"
            />
          </div>
        </CardContent>
      </Card>

      {/* Submit Button */}
      <div className="flex justify-center">
        <Button
          onClick={handleSubmit}
          disabled={!canSubmit() || isLoading}
          className="bg-blue-600 hover:bg-blue-700 min-w-32"
          size="lg"
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              Analyzing...
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Stethoscope className="h-4 w-4" />
              Get Diagnosis & Recommendations
            </div>
          )}
        </Button>
      </div>
    </div>
  );
}