import React from "react";
import { FallbackProps } from "react-error-boundary";
import Button from "../Button";

function ErrorMessage({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div
      role="alert"
      className="h-full w-full  flex justify-center items-center"
    >
      <div className="text-center">
        <h3 className="font-medium text-xl mb-2">Something went wrong</h3>
        <pre className="text-gray-600 mb-2">{error.message}</pre>
        <Button variant="contained" onClick={resetErrorBoundary}>
          Try again
        </Button>
      </div>
    </div>
  );
}

export default ErrorMessage;
