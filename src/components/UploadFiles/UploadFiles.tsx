import React, { useCallback, useState } from "react";
import { Accept, FileRejection, useDropzone } from "react-dropzone";
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
  disabled?: boolean;
  label?: string;
  id?: string;
}

function UploadFiles({
  accept,
  maxFiles,
  maxSize,
  setFiles,
  files,
  disabled,
  label,
  id,
}: FileProps) {
  const [error, setError] = useState<string | null>(null);
  const onDrop = useCallback(
    (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      setError(null);
      if (
        (maxFiles && fileRejections.length > maxFiles) ||
        (maxFiles && files.length + acceptedFiles.length > maxFiles)
      ) {
        setError(`Max number of files: ${maxFiles}`);
      } else {
        setFiles((prev) => [...prev, ...acceptedFiles]);
      }
    },
    [files]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    disabled,
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
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col flex-1 w-full">
      {label && <label className="mb-1" htmlFor={id}>{label}</label>}
      <div
        {...getRootProps()}
        className={twMerge(
          "border border-gray-300 rounded-md p-5 cursor-pointer flex flex-col items-center gap-2 transition-colors hover:bg-gray-50 mb-2",
          isDragActive && "bg-gray-50",
          disabled && "cursor-default hover:bg-white"
        )}
      >
        <input {...getInputProps()} id={id} />
        <AiOutlineCloudUpload
          className={twMerge(
            "text-5xl text-gray-500",
            disabled && "text-gray-300"
          )}
        />
        <p className={twMerge("text-gray-500", disabled && "text-gray-300")}>
          <span className="font-semibold ">Click to upload</span> or drag and
          drop
        </p>
        <div className="flex gap-1">
          {maxSize && (
            <p
              className={twMerge("text-gray-600", disabled && "text-gray-300")}
            >
              MAX. {calculateFileSize(maxSize)}
            </p>
          )}
          {accept && (
            <p
              className={twMerge("text-gray-600", disabled && "text-gray-300")}
            >
              {Object.values(accept).map((type) => {
                return type + " ";
              })}
            </p>
          )}
        </div>
      </div>
      {error && <div className="text-sm text-red-600">{error}</div>}
      <div className="flex flex-col">
        {files.map((file, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b last:border-none py-3"
          >
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
