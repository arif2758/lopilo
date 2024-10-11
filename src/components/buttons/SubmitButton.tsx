
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button"; // Import Button from shadcn/ui

interface SubmitButtonProps {
  formId: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ formId }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    const form = document.getElementById(formId) as HTMLFormElement | null;
    if (form) {
      form.requestSubmit(); // Trigger form submission
    }
  };

  return (
    <Button
      onClick={handleClick}
      disabled={isLoading}
      className="w-full text-2xl"
    >
      {isLoading ? "Processing..." : "Order Now"}
    </Button>
  );
};

export default SubmitButton;
 