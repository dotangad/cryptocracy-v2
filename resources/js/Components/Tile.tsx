import React from "react";
import styled from "styled-components";
import { useForm } from "@inertiajs/inertia-react";
import { ITile } from "../Pages/Play";
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

const PrevNext: React.FC<{ tile: ITile; canBack: boolean; canNext: boolean }> = ({
  tile,
  canBack,
  canNext
}: {
  tile: ITile;
  canBack: boolean;
  canNext: boolean;
}) => {
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

export const TileContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    max-width: 100%;
    min-height: 300px;
    height: auto;
    max-width: 500px;
    margin: 0 auto;
    padding: 30px;
    background: #292929;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
    // box-shadow: 10px 10px 0 0 #222;
  }

  @media screen and (max-width: 1300px) {
    margin-top: 20px;
    margin-bottom: 50px;

    & > div {
      width: 100%;
      padding: 30px;
      background: none;
      box-shadow: none;
    }
  }
`;

const LevelContainer = styled.div`
  .answer {
    width: 100%;
  }
  .answer input {
    background: #353535;
    border: none;
    font-size: 1.1rem;
    padding: 20px;
    color: #fff;
    width: 100%;
  }

  .answer input:focus,
  .answer input:active {
    background: #454545;
    outline: none;
  }

  .answer > form {
    margin-bottom: 20px;
  }

  .answer > div {
    width: 100%;
    display: flex;
    justify-content: space-between;

    > form {
      display: flex;
      justify-content: flex-end;
      &:first-of-type {
        justify-content: flex-start;
      }
    }
  }
`;

interface ITileProps {
  tile: ITile;
  canBack: boolean;
  canNext: boolean;
}

export const LevelTile: React.FC<ITileProps> = ({
  tile,
  canBack,
  canNext
}: ITileProps) => {
  return (
    <TileContainer>
      <LevelContainer>
        <div className="content">
          <h1>Level {tile.id}</h1>
          <p>{tile.content}</p>
        </div>
        <div className="answer">
          <form>
            <input type="text" placeholder="Answer (Enter to submit)" name="answer" />
          </form>
          <PrevNext {...{ tile, canBack, canNext }} />
        </div>
      </LevelContainer>
    </TileContainer>
  );
};

const StoryContainer = styled(LevelContainer)`
  .answer > div {
    width: 100%;
    display: flex;
    justify-content: space-between;

    > form {
      display: flex;
      justify-content: flex-end;
      &:first-of-type {
        justify-content: flex-start;
      }
    }
  }

  .answer button {
    font-weight: 600;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    padding: 10px 15px;
  }
`;

export const StoryTile: React.FC<ITileProps> = ({
  tile,
  canBack,
  canNext
}: ITileProps) => {
  const { post, processing } = useForm({});
  return (
    <TileContainer>
      <StoryContainer>
        <div className="content">
          <h1>Tile {tile.id}</h1>
          <p>{tile.content}</p>
        </div>
        <div className="answer">
          <PrevNext {...{ tile, canBack, canNext }} />
        </div>
      </StoryContainer>
    </TileContainer>
  );
};

const SidequestContainer = styled(LevelContainer)`
  .answer form {
    width: 100%;
  }

  .answer form > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
  }

  .answer input {
    flex: 1;
  }

  .answer button {
    font-weight: 600;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    padding: 10px 20px;
  }

  .answer > div {
    width: 100%;
    display: flex;
    justify-content: space-between;

    > form {
      display: flex;
      justify-content: flex-end;
      &:first-of-type {
        justify-content: flex-start;
      }
    }
  }
`;

export const SidequestTile: React.FC<ITileProps> = ({
  tile,
  canBack,
  canNext
}: ITileProps) => {
  return (
    <TileContainer>
      <SidequestContainer>
        <div className="content">
          <h1>Sidequest {tile.id}</h1>
          <p>{tile.content}</p>
        </div>
        <div className="answer">
          <form>
            <div>
              <input type="text" name="answer" placeholder="Link to media" />
            </div>
          </form>
          <PrevNext {...{ tile, canBack, canNext }} />
        </div>
      </SidequestContainer>
    </TileContainer>
  );
};
