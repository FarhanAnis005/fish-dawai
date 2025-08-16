"use client"

import { useState, useEffect } from "react"
import type React from "react"
import { Button } from "@/components/ui/button"
import { Upload, X } from "lucide-react"

interface ImageUploaderProps {
  onFileChange: (files: File[]) => void;
  maxFiles?: number;
  maxSizeMb?: number;
}

export function ImageUploader({ onFileChange, maxFiles = 5, maxSizeMb = 5 }: ImageUploaderProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    // Clean up object URLs when the component unmounts or files change
    return () => {
      previewUrls.forEach(url => URL.revokeObjectURL(url));
    }
  }, [previewUrls]);

  const handleFiles = (incomingFiles: FileList | null) => {
    if (!incomingFiles) return;

    setError(null);
    const newFiles = Array.from(incomingFiles);

    if (files.length + newFiles.length > maxFiles) {
      setError(`You can only upload a maximum of ${maxFiles} images.`);
      return;
    }

    const validFiles: File[] = [];
    for (const file of newFiles) {
      if (!file.type.startsWith("image/")) {
        setError("Only image files are allowed.");
        continue; // Skip non-image files
      }
      if (file.size > maxSizeMb * 1024 * 1024) {
        setError(`File size should not exceed ${maxSizeMb}MB.`);
        continue; // Skip large files
      }
      validFiles.push(file);
    }

    const updatedFiles = [...files, ...validFiles];
    setFiles(updatedFiles);

    const newPreviewUrls = validFiles.map(file => URL.createObjectURL(file));
    setPreviewUrls(prevUrls => [...prevUrls, ...newPreviewUrls]);
    
    onFileChange(updatedFiles);
  };

  const handleRemoveFile = (indexToRemove: number) => {
    // Revoke the specific URL to free memory
    URL.revokeObjectURL(previewUrls[indexToRemove]);

    const updatedFiles = files.filter((_, index) => index !== indexToRemove);
    const updatedUrls = previewUrls.filter((_, index) => index !== indexToRemove);

    setFiles(updatedFiles);
    setPreviewUrls(updatedUrls);
    onFileChange(updatedFiles);
  };

  const handleDragEvent = (e: React.DragEvent<HTMLDivElement>, dragging: boolean) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(dragging);
  };
  
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    handleDragEvent(e, false);
    handleFiles(e.dataTransfer.files);
  };

  return (
    <div>
      {/* Grid for image previews */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-4">
        {previewUrls.map((url, index) => (
          <div key={index} className="relative group aspect-square">
            <img src={url} alt={`Preview ${index + 1}`} className="w-full h-full object-cover rounded-lg border-2 border-blue-200" />
            <Button
              variant="destructive"
              size="icon"
              onClick={() => handleRemoveFile(index)}
              className="absolute top-1 right-1 h-6 w-6 opacity-50 group-hover:opacity-100 transition-opacity"
              aria-label={`Remove image ${index + 1}`}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>

      {/* Uploader section, hidden when max files are reached */}
      {files.length < maxFiles && (
        <div>
          <div
            onDragEnter={(e) => handleDragEvent(e, true)}
            onDragOver={(e) => handleDragEvent(e, true)}
            onDragLeave={(e) => handleDragEvent(e, false)}
            onDrop={handleDrop}
            className={`border-2 border-dashed border-blue-300 rounded-lg p-8 text-center transition-colors ${isDragging ? 'bg-blue-50 ring-2 ring-blue-400' : ''}`}
          >
            <input
              type="file"
              accept="image/*"
              multiple // Allow multiple file selection in the dialog
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFiles(e.target.files)}
              className="hidden"
              id="photo-upload"
            />
            <label htmlFor="photo-upload" className="cursor-pointer flex flex-col items-center">
              <Upload className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <p className="text-lg font-medium text-blue-900 mb-2">
                <span className="text-blue-600 font-bold">Click to upload</span> or drag and drop
              </p>
              <p className="text-sm text-blue-600">
                {files.length} / {maxFiles} images added
              </p>
            </label>
          </div>
          {error && <p className="text-sm text-red-600 mt-2 text-center">{error}</p>}
        </div>
      )}
    </div>
  );
}