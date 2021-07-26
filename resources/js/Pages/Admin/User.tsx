import { useForm } from "@inertiajs/inertia-react";
import React from "react";
import styled from "styled-components";
import AdminLayout from "../../Components/Layout/Admin";
import { PrimaryButton } from "../../Components/Button";
import { IUser } from "./Users";
import UserTiles, { ITilesF } from "../../Components/Admin/UserTiles";

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

interface IUserPageProps {
  user: IUser;
  users_referred: number;
  referred_by: number;
  tiles: ITilesF[];
  tile: ITilesF;
  pointsHistory: { points: number; label: string }[];
}

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

const User: React.FC<IUserPageProps> = ({
  user,
  tiles,
  tile,
  pointsHistory,
  users_referred,
  referred_by
}: IUserPageProps) => {
  const { post, processing } = useForm({});

  return (
    <AdminLayout title={`User ${user.email}`} backTo="/admin/users">
      <>
        <ButtonContainer>
          <SingleButtonForm
            url={`/admin/users/${user.id}/admin`}
            buttonLabel={user.admin ? "Demote to User" : "Promote to Admin"}
            post={post}
            processing={processing}
          />
          <SingleButtonForm
            url={`/admin/users/${user.id}/dq`}
            buttonLabel={user.disqualified ? "Requalify" : "Disqualify"}
            post={post}
            processing={processing}
          />
        </ButtonContainer>
        <div style={{ maxWidth: "1000px", paddingBottom: "100px" }}>
          <div
            style={{
              height: "700px",
              width: "700px",
              margin: "0 auto",
              marginBottom: "50px"
            }}
          >
            <UserTiles userId={user.id} tiles={tiles} tile={tile} />
          </div>

          <Table>
            <thead>
              <tr>
                <th>Attribute</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries({ ...user, users_referred, referred_by }).map(
                ([key, value], i) => (
                  <tr key={i}>
                    <td>{key}</td>
                    <td>{value}</td>
                  </tr>
                )
              )}
            </tbody>
          </Table>

          <Table style={{ marginTop: "50px" }}>
            <thead>
              <tr>
                <th>Label</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {pointsHistory.map(({ label, points }, i) => (
                <tr key={i}>
                  <td>{label}</td>
                  <td>{points}</td>
                </tr>
              ))}
              <tr>
                <th>Total</th>
                <th>{pointsHistory.map((x) => x.points).reduce((s, p) => s + p, 0)}</th>
              </tr>
            </tbody>
          </Table>
          <ButtonContainer style={{ marginTop: "20px", justifyContent: "flex-end" }}>
            <SingleButtonForm
              url={`/admin/users/${user.id}/recal`}
              buttonLabel="Recalibrate Points"
              post={post}
              processing={processing}
            />
          </ButtonContainer>
        </div>
      </>
    </AdminLayout>
  );
};

export default User;
