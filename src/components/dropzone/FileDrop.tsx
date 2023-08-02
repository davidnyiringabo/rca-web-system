"use client"
import { FC, ReactNode } from "react";
import { useDropzone } from "react-dropzone"

const FileDropZone: FC<{ fileType: string; onFilesSelected: (files: File[]) => void, children: ReactNode; }> = ({
        fileType,
        onFilesSelected,
        children
}) => {
        const onDrop = (acceptedFiles: File[]) => {
                // Perform different actions based on the fileType
                if (fileType === 'landing') {
                        // Handle landing page image selection
                        console.log('Landing Page Image Selected:', acceptedFiles);
                } else if (fileType === 'about') {
                        // Handle about page image selection
                        console.log('About Page Image Selected:', acceptedFiles);
                }

                // Pass the selected files to the parent component
                onFilesSelected(acceptedFiles);
        };

        const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

        return (
                <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
                        <input {...getInputProps()} />
                        {children}
                </div>
        );
};

export default FileDropZone