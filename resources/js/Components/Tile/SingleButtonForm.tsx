import React from "react";
import { useForm } from "@inertiajs/inertia-react";
import { PrimaryButton } from ".././Button";

interface IFormProps {
  url: string;
  post: any;
  processing: boolean;
  buttonLabel: string;
}

export const SingleButtonForm: React.FC<IFormProps> = ({
  url,
  post,
  processing,
  buttonLabel
}: IFormProps) => {
  return (
    <form
      onSubmit={(e: any) => {
        e.preventDefault();
        post(url);
      }}
    >
      <PrimaryButton
        as="button"
        type="submit"
        disabled={processing}
        style={{
          fontWeight: "bold",
          fontSize: "0.9rem",
          padding: "10px 15px",
          textTransform: "uppercase"
        }}
      >
        {buttonLabel}
      </PrimaryButton>
    </form>
  );
};
