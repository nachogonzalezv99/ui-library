import React from "react";
import { useCallback } from "react";
import { Accept, useDropzone } from "react-dropzone";
import {
  AiOutlineCloudUpload,
  AiOutlineDelete,
  AiOutlineFile,
  AiOutlineFileExcel,
  AiOutlineFileImage,
  AiOutlineFileJpg,
  AiOutlineFilePdf,
  AiOutlineFileText,
  AiOutlineFileZip,
} from "react-icons/ai";
import { twMerge } from "tailwind-merge";
import IconButton from "../IconButton";

const renderTypes: any = {
  "application/pdf": <AiOutlineFilePdf className="text-4xl text-red-600" />,
  "text/csv": <AiOutlineFileExcel className="text-4xl text-green-600" />,
  "image/jpeg": <AiOutlineFileJpg className="text-4xl text-gray-500" />,
  "image/png": <AiOutlineFileImage className="text-4xl text-gray-500" />,
  "text/plain": <AiOutlineFileText className="text-4xl text-blue-600" />,
  "application/zip": <AiOutlineFileZip className="text-4xl text-gray-500" />,
  "application/x-zip-compressed": (
    <AiOutlineFileZip className="text-4xl text-gray-500" />
  ),
};
interface FileProps {
  accept?: Accept;
  maxFiles?: number;
  maxSize?: number;
  setFiles: (value: React.SetStateAction<File[]>) => void;
  files: File[];
}

function UploadFiles({
  accept,
  maxFiles,
  maxSize,
  setFiles,
  files,
}: FileProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles((prev) => [...prev, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    maxFiles,
    maxSize,
  });

  const calculateFileSize = (bytes: number) => {
    if (bytes == 0) return "0 Bytes";
    const k = 1000,
      sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
      i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const handleDelete = (index: number) => {
    setFiles((prev) => prev.filter((file, i) => i !== index));
  };

  return (
    <div>
      <div
        {...getRootProps()}
        className={twMerge(
          "border border-gray-300 rounded-md p-5 cursor-pointer flex flex-col items-center gap-2 transition-colors hover:bg-gray-50 mb-2",
          isDragActive && "bg-gray-50"
        )}
      >
        <input {...getInputProps()} />
        <AiOutlineCloudUpload className="text-5xl text-gray-500 " />
        <p className="text-gray-500">
          <span className="font-semibold ">Click to upload</span> or drag and
          drop
        </p>
        <div className="flex gap-1">
          {maxSize && (
            <p className="text-gray-600">MAX. {calculateFileSize(maxSize)}</p>
          )}
          {accept && (
            <p className="text-gray-600">
              {Object.values(accept).map((type) => {
                return type + " ";
              })}
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col">
        {files.map((file, index) => (
          <div className="flex items-center justify-between border-b last:border-none py-3">
            <div className="flex gap-3 items-center">
              {renderTypes[file.type] || (
                <AiOutlineFile className="text-4xl text-gray-500" />
              )}
              <div>
                <p className="font-medium ">{file.name}</p>
                <p className="text-gray-500 text-sm">
                  {file.type} · {calculateFileSize(file.size)}
                </p>
              </div>
            </div>
            <IconButton size="sm" onClick={() => handleDelete(index)}>
              <AiOutlineDelete />
            </IconButton>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UploadFiles;
