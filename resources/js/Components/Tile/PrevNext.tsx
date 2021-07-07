import React from "react";
import { useForm } from "@inertiajs/inertia-react";
import { ITile } from "../../Pages/Play";
import { PrimaryButton } from ".././Button";
import { SingleButtonForm } from "./SingleButtonForm";

interface IProps {
  tile: ITile;
  canBack: boolean;
  canNext: boolean;
  children: React.ReactNode;
}

export const PrevNext: React.FC<IProps> = ({
  tile,
  canBack,
  canNext,
  children
}: IProps) => {
  const { post, processing } = useForm({});
  return (
    <div>
      {canBack ? (
        <SingleButtonForm url="/play/back" buttonLabel="Back" {...{ post, processing }} />
      ) : (
        <form>
          <PrimaryButton
            as="button"
            type="submit"
            disabled={true}
            style={{
              fontWeight: "bold",
              fontSize: "0.9rem",
              padding: "10px 15px",
              textTransform: "uppercase"
            }}
          >
            Back
          </PrimaryButton>
        </form>
      )}
      {children && children}
      {canNext ? (
        <SingleButtonForm url="/play/next" buttonLabel="Next" {...{ post, processing }} />
      ) : (
        <form>
          <PrimaryButton
            as="button"
            type="submit"
            disabled={true}
            style={{
              fontWeight: "bold",
              fontSize: "0.9rem",
              padding: "10px 15px",
              textTransform: "uppercase"
            }}
          >
            Next
          </PrimaryButton>
        </form>
      )}
    </div>
  );
};
