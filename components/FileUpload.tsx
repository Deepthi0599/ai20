import React, { useRef } from 'react';

interface FileUploadProps {
  handleFileUpload: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ handleFileUpload }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = () => {
    if (fileInputRef.current && fileInputRef.current.files) {
      const file = fileInputRef.current.files[0];
      if (file) {
        handleFileUpload(file);
      }
    }
  };

  return (
    <div className="file-upload-container">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".docx, .txt, .pdf"
      />
      <p>Drag & Drop PDF, TXT or DOCX file here, or click to select</p>
    </div>
  );
};

export default FileUpload;
