import { useForm } from "@inertiajs/inertia-react";
import React from "react";
import styled from "styled-components";
import AdminLayout from "../../Components/Layout/Admin";
import { PrimaryButton } from "../../Components/Button";
import { IUser } from "./Users";

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

const User: React.FC<IUserPageProps> = ({ user }: IUserPageProps) => {
  const { post, processing } = useForm({});

  return (
    <AdminLayout title={`User ${user.email}`} backTo="/admin/users">
      <>
        <ButtonContainer>
          {!user.admin ? (
            <SingleButtonForm
              url={`/admin/users/${user.id}/promote`}
              buttonLabel="Promote to Admin"
              post={post}
              processing={processing}
            />
          ) : (
            <SingleButtonForm
              url={`/admin/users/${user.id}/demote`}
              buttonLabel="Demote to User"
              post={post}
              processing={processing}
            />
          )}
          {!user.disqualified ? (
            <SingleButtonForm
              url={`/admin/users/${user.id}/dq`}
              buttonLabel="Disqualify"
              post={post}
              processing={processing}
            />
          ) : (
            <SingleButtonForm
              url={`/admin/users/${user.id}/rq`}
              buttonLabel="Requalify"
              post={post}
              processing={processing}
            />
          )}
        </ButtonContainer>
        <div style={{ maxWidth: "1000px", paddingBottom: "100px" }}>
          <Table>
            <thead>
              <tr>
                <th>Attribute</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(user).map(([key, value], i) => (
                <tr key={i}>
                  <td>{key}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </>
    </AdminLayout>
  );
};

export default User;
