import { DiagnosisForm } from "@/components/diagnosis-form"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 pt-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">Fish Dawai</h1>
          <p className="text-lg text-blue-700">AI-Powered Fish Health Diagnostic Tool</p>
          <p className="text-sm text-blue-600 mt-2">
            Get instant recommendations for fish diseases and water quality issues
          </p>
        </div>
        <DiagnosisForm />
      </div>
    </main>
  )
}
