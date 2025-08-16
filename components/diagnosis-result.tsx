// src/components/diagnosis-result.tsx

"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Package, Droplets, Clock, Info, SearchX } from "lucide-react"
import type { DiagnosisData } from "@/lib/data"

interface DiagnosisResultProps {
  data: DiagnosisData[]
  onReset: () => void
}

export function DiagnosisResult({ data, onReset }: DiagnosisResultProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="outline" onClick={onReset} size="sm">
          <ArrowLeft className="h-4 w-4 mr-2" />
          New Diagnosis
        </Button>
        <Badge variant="secondary" className="bg-green-100 text-green-800 px-3 py-1">
          {data.length > 0
            ? `${data.length} ${data.length > 1 ? "Potential Matches" : "Match"} Found`
            : "No Matches Found"}
        </Badge>
      </div>

      {/* Conditional Rendering: Show results or a "not found" message */}
      {data.length > 0 ? (
        data.map((result) => (
          <div key={result.categoryName} className="space-y-6 border-t-4 border-slate-200 pt-6 mt-6 first:mt-0 first:border-0 first:pt-0">
            {/* Diagnosis Category */}
            <Card className="border-2 border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-green-900">{result.categoryName}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-green-800">
                  Based on your input, we recommend {result.categoryName.toLowerCase()} treatment for your fish.
                </p>
              </CardContent>
            </Card>

            {/* Product Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  Recommended Products
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {result.products.map((product) => (
                    <div key={product.name} className="border rounded-lg p-4 bg-blue-50">
                      <h3 className="font-semibold text-blue-900 mb-2">{product.name}</h3>
                      <div className="space-y-1 text-sm">
                        <p>
                          <span className="font-medium">Pack Size:</span> {product.packSize}
                        </p>
                        <p>
                          <span className="font-medium">Dose:</span> {product.dosePerAcre}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Instructions */}
            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Info className="h-5 w-5" />
                    How It Works
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{result.work}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Droplets className="h-5 w-5" />
                    Application
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{result.application}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Clock className="h-5 w-5" />
                    When to Use
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{result.rateOfUse}</p>
                </CardContent>
              </Card>
            </div>



          </div>
        ))
      ) : (
        // This block renders if data array is empty
        <Card>
          <CardContent className="pt-6">
            <div className="text-center py-8">
              <SearchX className="mx-auto h-12 w-12 text-muted-foreground" />
              <h3 className="mt-4 text-lg font-semibold">No Matching Diagnosis Found</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We couldn't find a match for the symptoms provided. Please try again with more details or a clearer photo.
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Important Notice (Global, appears once at the bottom) */}
      <Card className="border-amber-200 bg-amber-50">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-amber-600 mt-0.5" />
            <div>
              <h4 className="font-semibold text-amber-900 mb-1">Important Notice</h4>
              <p className="text-sm text-amber-800">
                This is an AI-generated recommendation. For severe cases or if symptoms persist, please consult with a
                fish health professional or veterinarian.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}