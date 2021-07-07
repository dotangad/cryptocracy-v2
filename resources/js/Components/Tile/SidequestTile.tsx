import React from "react";
import styled from "styled-components";
import { useForm } from "@inertiajs/inertia-react";
import { PrevNext } from "./PrevNext";
import { ITileProps, TileContainer } from "./common";

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
          <h1>Sidequest {tile.id}</h1>
          <p>{tile.content}</p>
        </div>
        <div className="answer">
          {userTile.media_link ? (
            <></>
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
                  placeholder="Link to media (enter to submit)"
                  value={data.link}
                  onChange={(e: any) => setData("link", e.target.value)}
                  disabled={processing}
                />
              </div>
            </form>
          )}
          <PrevNext {...{ tile, canBack, canNext }}>
            {userTile.media_link ? <p>Submitted</p> : <></>}
            {errors.link ? <p style={{ color: "#ff0000" }}>{errors.link}</p> : <></>}
          </PrevNext>
        </div>
      </SidequestContainer>
    </TileContainer>
  );
};
