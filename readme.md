# 🐠 Fish Vet AI: Intelligent Fish Disease Diagnosis

Fish Vet AI is a modern, AI-powered web application designed to help aquarium and pond owners diagnose fish diseases quickly and accurately. By leveraging Google's Gemini AI, the application analyzes user-provided symptoms, text descriptions, and images to identify potential health issues and provide actionable recommendations.

**[➡️ View Live Demo on Vercel](https://your-vercel-deployment-url.vercel.app/)**

---

## ✨ Key Features

* **Multi-Modal Diagnosis**: Users can input information in three ways:
    * **Symptom Checklists**: A comprehensive list of common symptoms for easy selection.
    * **Photo Uploads**: Upload up to five images of the affected fish or pond for visual analysis.
    * **Text Descriptions**: Describe the problem in natural language.
* **AI-Powered Analysis**: Utilizes the **Google Gemini 1.5 Flash** model to analyze text and images, identifying symptoms that a user might have missed.
* **Symptom Aggregation**: Intelligently combines symptoms from all user inputs (checkboxes, text, and images) into a single, deduplicated list.
* **Detailed Recommendations**: Provides clear, actionable advice and treatment options based on the identified disease categories.
* **Modern & Responsive UI**: Built with Next.js and Tailwind CSS for a seamless experience on any device.

---

## 🛠️ Tech Stack

* **Framework**: [Next.js](https://nextjs.org/) (v14+)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
* **AI Model**: [Google Gemini API](https://ai.google.dev/)
* **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

Follow these instructions to get a local copy of the project up and running for development and testing.

### Prerequisites

* Node.js (v18.x or later)
* npm, yarn, or pnpm
* A Google Gemini API Key. You can obtain one from [Google AI Studio](https://aistudio.google.com/app/apikey).

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/fish-vet-ai.git](https://github.com/your-username/fish-vet-ai.git)
    cd fish-vet-ai
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Set up environment variables:**
    Create a file named `.env.local` in the root of your project and add your Google Gemini API key:
    ```env
    GEMINI_API_KEY=YOUR_GEMINI_API_KEY_HERE
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

---

##  Usage

1.  **Select Symptoms**: Go through the checklist and select any observable symptoms.
2.  **Upload Photos**: Click the upload area or drag and drop up to 5 clear images of your fish, tank, or pond.
3.  **Describe the Problem**: Write a detailed description of the fish's behavior, appearance, water conditions, and any recent changes.
4.  **Get Diagnosis**: Click the "Get Diagnosis & Recommendations" button.
5.  **Review Results**: The application will display the potential disease categories, along with detailed information and treatment suggestions.

---
