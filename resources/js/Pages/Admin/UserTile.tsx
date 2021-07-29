import React from "react";
import styled from "styled-components";
import AdminLayout from "../../Components/Layout/Admin";
import { IUser } from "./Users";
import { ITilesF } from "../../Components/Admin/UserTiles";
import { IUserTile } from "../Play";
import { TileType } from "./Tiles";
import { useForm } from "@inertiajs/inertia-react";
import { PrimaryButton } from "../../Components/Button";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  tr td {
    text-align: center;
  }

  th,
  td {
    padding: 15px 10px;
  }

  tbody tr:nth-child(even) {
    background: #ffffff10;
  }

  thead tr {
    background: white;
    color: #333;
  }
`;

interface ITile extends ITilesF {
  solution: string;
}

interface IUserTileFull extends IUserTile {
  sidequest_points: number;
  id: number;
  created_at: string;
  updated_at: string;
  ip: string;
}

interface IUserTilePageProps {
  user: IUser;
  tile: ITile;
  userTile: IUserTileFull;
  attempts: { attempt: string; created_at: string; ip: string }[];
}

const User: React.FC<IUserTilePageProps> = ({
  user,
  tile,
  userTile,
  attempts
}: IUserTilePageProps) => {
  const { data, setData, post, reset, processing, errors } = useForm({
    points: userTile.sidequest_points
  });
  const show = {
    "ID (Tile)": tile.id,
    "ID (UserTile)": userTile.id,
    Type: tile.type as string,
    Content: tile.content,
    Comment: tile.comment,
    Solution: tile.solution,
    Points: tile.points,
    Opened: new Date(userTile.created_at).toLocaleString(),
    "Solved/Submitted":
      tile.type === "SIDEQUEST" || tile.type === "LEVEL"
        ? userTile.created_at === userTile.updated_at
          ? "-"
          : new Date(userTile.updated_at).toLocaleString()
        : "-",
    "Submitted Media": userTile.media_link,
    "IP Address": userTile.ip,
    "Sidequest Points":
      tile.type === "SIDEQUEST" && userTile.media_link ? userTile.sidequest_points : "-"
  };

  return (
    <AdminLayout
      title={`User ${user.email} - Tile ${tile.id - 1}${user.tile_id === tile.id ? " [current]" : ""
        }`}
      backTo={`/admin/users/${user.id}`}
    >
      <div style={{ maxWidth: "1000px", paddingBottom: "100px" }}>
        <Table>
          <thead>
            <tr>
              <th>Attribute</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(show).map(([key, value], i) => (
              <tr key={i}>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        {tile.type === TileType.LEVEL && (
          <Table style={{ marginTop: "50px" }}>
            <thead>
              <tr>
                <th>Attempt</th>
                <th>IP</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {attempts.map(({ attempt, ip, created_at }, i) => (
                <tr
                  key={i}
                  style={{ color: attempt === tile.solution ? "green" : "white" }}
                >
                  <td>{attempt}</td>
                  <td>{ip}</td>
                  <td>{new Date(created_at).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}

        {tile.type === TileType.SIDEQUEST && userTile.media_link && (
          <form
            style={{ marginTop: "50px" }}
            onSubmit={(e: any) => {
              e.preventDefault();
              post(`/admin/users/${user.id}/tile/${tile.id}/sq`);
            }}
          >
            <div className="input-group">
              <label htmlFor="points">Points</label>
              <input
                type="number"
                name="points"
                disabled={processing}
                placeholder="420"
                value={data.points === 0 ? "" : data.points}
                onChange={(e: any) => setData("points", e.target.value)}
              />
              {errors.points && <div className="error">{errors.points}</div>}
            </div>
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
                Grant
              </PrimaryButton>
            </div>
          </form>
        )}
      </div>
    </AdminLayout>
  );
};

export default User;
