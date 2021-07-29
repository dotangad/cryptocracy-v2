import React from "react";
import styled from "styled-components";
import { useForm } from "@inertiajs/inertia-react";
import { PrevNext } from "./PrevNext";
import { ITileProps, TileContainer } from "./common";
import { PrimaryButton } from "../Button";

const LevelContainer = styled.div``;

export const LevelTile: React.FC<ITileProps> = ({
  tile,
  canBack,
  canNext,
  userTile: { solved }
}: ITileProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const { data, setData, post, processing, reset, errors } = useForm({
    answer: ""
  });

  return (
    <TileContainer>
      <LevelContainer>
        <div className="content">
          <div>
            <h1>Level {tile.id - 1}</h1>
            <div className="points" style={{ color: solved ? "green" : "#999" }}>
              {tile.points}
            </div>
          </div>
          <p dangerouslySetInnerHTML={{ __html: tile.content }} data-html={tile.content}></p>
        </div>

        <div className="answer">
          {solved ? (
            <div
              style={{
                marginBottom: "20px",
                color: "green",
                width: "100%",
                display: "flex",
                justifyContent: "center"
              }}
            >
              Level Solved
            </div>
          ) : (
            <form
              onSubmit={(e: any) => {
                e.preventDefault();
                post("/play/try", {
                  preserveState: true,
                  onSuccess: () => {
                    reset();
                  },
                  onError: () => {
                    if (inputRef.current) {
                      inputRef.current.value = "";
                      inputRef.current.focus();
                    }
                  }
                });
              }}
            >
              <div>
                <input
                  type="text"
                  name="answer"
                  placeholder="Answer"
                  autoFocus={true}
                  autoComplete="off"
                  value={data.answer}
                  ref={inputRef}
                  onChange={(e: any) =>
                    setData(
                      "answer",
                      e.target.value
                        .split("")
                        .filter((x: any) => /^[a-z0-9-_{}]$/.test(x))
                        .join("")
                    )
                  }
                  disabled={processing}
                />
                <PrimaryButton as="button" type="submit">
                  Submit
                </PrimaryButton>
              </div>
            </form>
          )}

          <PrevNext {...{ tile, canBack, canNext }}>
            {errors.answer ? <p style={{ color: "#ff0000" }}>{errors.answer}</p> : <></>}
          </PrevNext>
        </div>
      </LevelContainer>
    </TileContainer>
  );
};
