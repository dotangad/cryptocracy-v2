import { useForm } from "@inertiajs/inertia-react";
import React from "react";
import styled from "styled-components";
import { PrimaryButton } from "./Button";

interface IFormProps {
  url: string;
  post: any;
  processing: boolean;
  buttonLabel: string;
}

const SingleButtonForm: React.FC<IFormProps> = ({
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

const CharacterChoiceContainer = styled.div`
  width: 100%;
margin: 20px 0;

& p {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 5px;
}

& > div {
  display: flex;
}

  & form {
    width: auto;
  }

  & form:last-child {
    margin-left: 30px;
  }
`;

export const CharacterChoice: React.FC = () => {
  const { post, processing } = useForm({});

  return (
    <CharacterChoiceContainer>
      <p>Choose a team</p>
      <div>
        <SingleButtonForm url="/team/queen" buttonLabel="Queen" {...{ post, processing }} />
        <SingleButtonForm url="/team/ace" buttonLabel="Ace" {...{ post, processing }} />
      </div>
    </CharacterChoiceContainer>
  );
};
