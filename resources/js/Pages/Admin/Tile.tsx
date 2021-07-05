import { useForm } from "@inertiajs/inertia-react";
import React from "react";
import styled from "styled-components";
import AdminLayout from "../../Components/Layout/Admin";
import { PrimaryButton } from "../../Components/Button";
import { ITile, TileType } from "./Tiles";

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;

  & > form {
    width: auto;
    margin: 0 10px;

    &:first-child {
      margin-left: 0;
    }
  }
`;

interface ITilePageProps {
  tile: ITile;
  failure?: string;
}

const TilePage: React.FC<ITilePageProps> = ({ tile, failure }: ITilePageProps) => {
  const { post, processing, reset, errors, setData, data } = useForm({
    content: tile.content,
    type: tile.type,
    comment: tile.comment,
    solution: tile.solution,
    points: tile.points
  });

  const handleChange = (e: any) => setData(e.target.name, e.target.value);

  return (
    <AdminLayout title={`Tile ${tile.id}`} backTo="/admin/tiles">
      <div style={{ paddingBottom: "100px" }}>
        <form
          onSubmit={(e: any) => {
            e.preventDefault();
            post(`/admin/tiles/${tile.id}`, {
              preserveState: true,
              onSuccess: () => {
                window.location.reload();
              }
            });
          }}
        >
          <div className="input-group">
            <label htmlFor="content">Content</label>
            <textarea
              placeholder="content"
              name="content"
              disabled={processing}
              rows={4}
              value={data.content}
              onChange={handleChange}
            />
            {errors.content && <div className="error">{errors.content}</div>}
          </div>

          <div className="input-group">
            <label htmlFor="type">Type</label>
            <select
              name="type"
              disabled={processing}
              onChange={(e) =>
                setData("type", TileType[e.target.value as keyof typeof TileType])
              }
              defaultValue={data.type as string}
            >
              <option value="STORY">Story</option>
              <option value="SIDEQUEST">Sidequest</option>
              <option value="LEVEL">Level</option>
            </select>
            {errors.type && <div className="error">{errors.type}</div>}
          </div>

          <div className="input-group">
            <label htmlFor="comment">Comment Hint</label>
            <textarea
              placeholder="comment"
              name="comment"
              disabled={processing}
              rows={4}
              value={data.comment}
              onChange={handleChange}
            />
            {errors.comment && <div className="error">{errors.comment}</div>}
          </div>

          <div className="input-group">
            <label htmlFor="solution">Answer</label>
            <input
              type="text"
              name="solution"
              disabled={processing || data.type !== TileType.LEVEL}
              placeholder="someshgod"
              value={data.solution}
              onChange={handleChange}
            />
            {errors.solution && <div className="error">{errors.solution}</div>}
          </div>

          <div className="input-group">
            <label htmlFor="points">Points</label>
            <input
              type="text"
              name="points"
              disabled={processing || data.type !== TileType.LEVEL}
              placeholder="1000000"
              value={data.points}
              onChange={handleChange}
            />
            {errors.points && <div className="error">{errors.points}</div>}
          </div>

          {failure && (
            <div className="input-group">
              <div className="annotate error">{failure}</div>
            </div>
          )}

          <div className="input-group">
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
              Edit
            </PrimaryButton>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default TilePage;
