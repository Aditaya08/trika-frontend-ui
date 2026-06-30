'use client';

import React, { useState } from 'react';
import CodrivaConsultView from '@/components/consultation/CodrivaConsultView';
import CodrivaPrintPreview from '@/components/consultation/CodrivaPrintPreview';

export default function ConsultationPage() {
  const [viewMode, setViewMode] = useState<'edit' | 'preview'>('edit');
  const [previewData, setPreviewData] = useState<any>(null);

  const handlePreview = (data: any) => {
    setPreviewData(data);
    setViewMode('preview');
  };

  const handleBackToEdit = () => {
    setViewMode('edit');
  };

  return (
    <div className="min-h-screen bg-[#c5d3ca]">
      {viewMode === 'edit' ? (
        <CodrivaConsultView onPreview={handlePreview} />
      ) : (
        <CodrivaPrintPreview data={previewData} onBack={handleBackToEdit} />
      )}
    </div>
  );
}

