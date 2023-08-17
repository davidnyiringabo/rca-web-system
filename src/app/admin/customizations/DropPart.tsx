"use client"
import FileDropZone from '@/src/components/dropzone/FileDrop'
import React from 'react'

const DropPart = () => {
        const handleFilesSelected = (files: File[]) => {
                console.log('Files selected:', files);
        };
        return (
                <div className="my-2 grid grid-cols-3 grid-rows-2 gap-3">
                        <FileDropZone fileType='landing' onFilesSelected={handleFilesSelected}>
                                <div className='bg-[rgba(67,67,67,0.03)] h-[300px] rounded-md border-[2px] border-[rgba(67,67,67,0.09)] flex flex-col gap-5 justify-center items-center'>
                                        <p className='text-[rgba(0,0,0,0.1)]  text-[28px] font-semibold'>Drag & Drop</p>
                                        <p className='text-[rgba(73,73,74,0.78)] text-sm font-medium'>Main Landing Page Barner Image</p>
                                </div>
                        </FileDropZone>
                        <FileDropZone fileType='landing' onFilesSelected={handleFilesSelected}>
                                <div className='bg-[rgba(67,67,67,0.03)] h-[300px] rounded-md border-[2px] border-[rgba(67,67,67,0.09)] flex flex-col gap-5 justify-center items-center'>
                                        <p className='text-[rgba(0,0,0,0.1)]  text-[28px] font-semibold'>Drag & Drop</p>
                                        <p className='text-[rgba(73,73,74,0.78)] text-sm font-medium'>Main Landing About Us Large Image</p>
                                </div>
                        </FileDropZone>
                        <FileDropZone fileType='landing' onFilesSelected={handleFilesSelected}>
                                <div className='bg-[rgba(67,67,67,0.03)] h-[300px] rounded-md border-[2px] border-[rgba(67,67,67,0.09)] flex flex-col gap-5 justify-center items-center'>
                                        <p className='text-[rgba(0,0,0,0.1)]  text-[28px] font-semibold'>Drag & Drop</p>
                                        <p className='text-[rgba(73,73,74,0.78)] text-sm font-medium'>Main Landing About Us Smaller Image</p>
                                </div>
                        </FileDropZone>
                        <FileDropZone fileType='landing' onFilesSelected={handleFilesSelected}>
                                <div className='bg-[rgba(67,67,67,0.03)] h-[300px] rounded-md border-[2px] border-[rgba(67,67,67,0.09)] flex flex-col gap-5 justify-center items-center'>
                                        <p className='text-[rgba(0,0,0,0.1)]  text-[28px] font-semibold'>Drag & Drop</p>
                                        <p className='text-[rgba(73,73,74,0.78)] text-sm font-medium'>Innovations Images maximum 10 shots</p>
                                </div>
                        </FileDropZone>
                        <FileDropZone fileType='landing' onFilesSelected={handleFilesSelected}>
                                <div className='bg-[rgba(67,67,67,0.03)] h-[300px] rounded-md border-[2px] border-[rgba(67,67,67,0.09)] flex flex-col gap-5 justify-center items-center'>
                                        <p className='text-[rgba(0,0,0,0.1)]  text-[28px] font-semibold'>Drag & Drop</p>
                                        <p className='text-[rgba(73,73,74,0.78)] text-sm font-medium'>News Letter small Card Image</p>
                                </div>
                        </FileDropZone>
                        <FileDropZone fileType='landing' onFilesSelected={handleFilesSelected}>
                                <div className='bg-[rgba(67,67,67,0.03)] h-[300px] rounded-md border-[2px] border-[rgba(67,67,67,0.09)] flex flex-col gap-5 justify-center items-center'>
                                        <p className='text-[rgba(0,0,0,0.1)]  text-[28px] font-semibold'>Drag & Drop</p>
                                        <p className='text-[rgba(73,73,74,0.78)] text-sm font-medium'>News Letter large Card Image</p>
                                </div>
                        </FileDropZone>
                </div>
        )
}

export default DropPart