🐠 Fish Vet AI: Intelligent Fish Disease DiagnosisFish Vet AI is a modern, AI-powered web application designed to help aquarium and pond owners diagnose fish diseases quickly and accurately. By leveraging Google's Gemini AI, the application analyzes user-provided symptoms, text descriptions, and images to identify potential health issues and provide actionable recommendations.➡️ View Live Demo on Vercel✨ Key FeaturesMulti-Modal Diagnosis: Users can input information in three ways:Symptom Checklists: A comprehensive list of common symptoms for easy selection.Photo Uploads: Upload up to five images of the affected fish or pond for visual analysis.Text Descriptions: Describe the problem in natural language.AI-Powered Analysis: Utilizes the Google Gemini 1.5 Flash model to analyze text and images, identifying symptoms that a user might have missed.Symptom Aggregation: Intelligently combines symptoms from all user inputs (checkboxes, text, and images) into a single, deduplicated list.Detailed Recommendations: Provides clear, actionable advice and treatment options based on the identified disease categories.Modern & Responsive UI: Built with Next.js and Tailwind CSS for a seamless experience on any device.🛠️ Tech StackFramework: Next.js (v14+)Language: TypeScriptStyling: Tailwind CSSUI Components: shadcn/uiAI Model: Google Gemini APIIcons: Lucide React🚀 Getting StartedFollow these instructions to get a local copy of the project up and running for development and testing.PrerequisitesNode.js (v18.x or later)npm, yarn, or pnpmA Google Gemini API Key. You can obtain one from Google AI Studio.Installation & SetupClone the repository:git clone https://github.com/your-username/fish-vet-ai.git
cd fish-vet-ai
Install dependencies:npm install
# or
yarn install
# or
pnpm install
Set up environment variables:Create a file named .env.local in the root of your project and add your Google Gemini API key:GEMINI_API_KEY=YOUR_GEMINI_API_KEY_HERE
Run the development server:npm run dev
# or
yarn dev
Open http://localhost:3000 in your browser to see the application.usageSelect Symptoms: Go through the checklist and select any observable symptoms.Upload Photos: Click the upload area or drag and drop up to 5 clear images of your fish, tank, or pond.Describe the Problem: Write a detailed description of the fish's behavior, appearance, water conditions, and any recent changes.Get Diagnosis: Click the "Get Diagnosis & Recommendations" button.Review Results: The application will display the potential disease categories, along with detailed information and treatment suggestions.📂 Project StructureHere is an overview of the key files and directories in this project:.
├── src
│   ├── app
│   │   ├── api
│   │   │   └── diagnose
│   │   │       └── route.ts      # Backend API endpoint for Gemini analysis
│   │   ├── page.tsx              # Main page component
│   │   └── layout.tsx            # Root layout
│   ├── components
│   │   ├── diagnosis-form.tsx    # The main interactive form component
│   │   ├── diagnosis-result.tsx  # Component to display results
│   │   ├── image-uploader.tsx    # Reusable multi-image uploader
│   │   └── ui/                   # shadcn/ui components
│   └── lib
│       └── data.ts               # Contains the symptom and category data
├── .env.local                    # Environment variables (Git-ignored)
├── next.config.js                # Next.js configuration
└── tsconfig.json                 # TypeScript configuration
🤝 ContributingContributions are welcome! If you have suggestions for improvements or want to fix a bug, please feel free to:Fork the repository.Create a new branch (git checkout -b feature/AmazingFeature).Make your changes and commit them (git commit -m 'Add some AmazingFeature').Push to the branch (git push origin feature/AmazingFeature).Open a Pull Request.📄 LicenseThis project is licensed under the MIT License. See the LICENSE file for more details.