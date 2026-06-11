"use client";

import { useRef, useState } from "react";

type AdminFormProps = {
  action: (formData: FormData) => Promise<{ error?: string; success?: boolean }>;
  children: React.ReactNode;
  className?: string;
  successMessage?: string;
};

export default function AdminForm({ action, children, className, successMessage = "Successfully saved!" }: AdminFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  async function handleSubmit(formData: FormData) {
    setStatus(null); // clear previous status

    try {
      const result = await action(formData);

      if (result?.error) {
        setStatus({ type: "error", message: result.error });
      } else {
        setStatus({ type: "success", message: successMessage });
        formRef.current?.reset(); // Clear the form on success
      }
    } catch (e: any) {
      setStatus({ type: "error", message: e.message || "An unexpected error occurred." });
    }
  }

  return (
    <form ref={formRef} action={handleSubmit} className={className}>
      {status && (
        <div
          className={`p-4 rounded-lg text-sm mb-4 border ${
            status.type === "success"
              ? "bg-green-50 text-green-700 border-green-200"
              : "bg-red-50 text-red-700 border-red-200"
          }`}
        >
          {status.message}
        </div>
      )}
      {children}
    </form>
  );
}
