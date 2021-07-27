import React from "react";
import styled from "styled-components";
import { useForm } from "@inertiajs/inertia-react";
import { PrevNext } from "./PrevNext";
import { ITileProps, TileContainer } from "./common";
import { PrimaryButton } from "../Button";

const SidequestContainer = styled.div``;

export const SidequestTile: React.FC<ITileProps> = ({
  tile,
  canBack,
  canNext,
  userTile
}: ITileProps) => {
  const { data, setData, post, processing, reset, errors } = useForm({
    link: ""
  });

  return (
    <TileContainer>
      <SidequestContainer>
        <div className="content">
          <div>
            <h1>Sidequest {tile.id}</h1>
            {userTile.media_link &&
              (userTile.sidequest_points === 0 ? (
                <div
                  className="points"
                  style={{
                    fontSize: "0.9rem",
                    textTransform: "uppercase"
                  }}
                >
                  no points
                </div>
              ) : (
                <div style={{ color: "green" }}>{userTile.sidequest_points}</div>
              ))}
          </div>
          <p dangerouslySetInnerHTML={{ __html: tile.content }}></p>
        </div>
        <div className="answer">
          {userTile.media_link ? (
            <div
              style={{
                marginBottom: "20px",
                color: "green",
                width: "100%",
                display: "flex",
                justifyContent: "center"
              }}
            >
              Submitted
            </div>
          ) : (
            <form
              onSubmit={(e: any) => {
                e.preventDefault();
                post("/play/try", {
                  preserveState: true,
                  onSuccess: () => {
                    // window.location.reload();
                    reset();
                  }
                });
              }}
            >
              <div>
                <input
                  type="text"
                  name="link"
                  placeholder="Link to media"
                  value={data.link}
                  onChange={(e: any) => setData("link", e.target.value)}
                  disabled={processing}
                />
                <PrimaryButton as="button" type="submit">
                  Submit
                </PrimaryButton>
              </div>
            </form>
          )}
          <PrevNext {...{ tile, canBack, canNext }}>
            {errors.link ? <p style={{ color: "#ff0000" }}>{errors.link}</p> : <></>}
          </PrevNext>
        </div>
      </SidequestContainer>
    </TileContainer>
  );
};
