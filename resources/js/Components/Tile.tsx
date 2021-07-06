import React from "react";
import styled from "styled-components";
import { PrimaryButton } from "./Button";

export const TileContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    max-width: 100%;
    width: 500px;
    padding: 30px;
    background: #292929;
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
    margin-top: 50px;
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
`;

export const LevelTile = () => {
  return (
    <TileContainer>
      <LevelContainer>
        <div className="content">
          <h1>Level 123</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut quisquam
            assumenda ipsum debitis, nobis temporibus quas ratione, odit eaque facilis ab?
            Ut delectus mollitia repellat aliquid provident ratione nostrum porro?
          </p>
        </div>
        <div className="answer">
          <form>
            <input type="text" placeholder="Answer (Enter to submit)" name="answer" />
          </form>
        </div>
      </LevelContainer>
    </TileContainer>
  );
};

const StoryContainer = styled(LevelContainer)`
  .answer form {
    width: 100%;
    display: flex;
    justify-content: flex-end;
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

export const StoryTile = () => {
  return (
    <TileContainer>
      <StoryContainer>
        <div className="content">
          <h1>Tile 123</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut quisquam
            assumenda ipsum debitis, nobis temporibus quas ratione, odit eaque facilis ab?
            Ut delectus mollitia repellat aliquid provident ratione nostrum porro?
          </p>
        </div>
        <div className="answer">
          <form>
            <PrimaryButton as="button">Next</PrimaryButton>
          </form>
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
    justify-content: flex-end;
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
`;

export const SidequestTile = () => {
  return (
    <TileContainer>
      <SidequestContainer>
        <div className="content">
          <h1>Sidequest 123</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut quisquam
            assumenda ipsum debitis, nobis temporibus quas ratione, odit eaque facilis ab?
            Ut delectus mollitia repellat aliquid provident ratione nostrum porro?
          </p>
        </div>
        <div className="answer">
          <form>
            <div>
              <input type="text" name="answer" placeholder="Link to media" />
            </div>
            <div>
              <PrimaryButton as="button">Skip</PrimaryButton>
            </div>
          </form>
        </div>
      </SidequestContainer>
    </TileContainer>
  );
};
