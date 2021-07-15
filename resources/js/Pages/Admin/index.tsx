import { InertiaLink } from "@inertiajs/inertia-react";
import React from "react";
import styled from "styled-components";
import { ChevronRight } from "../../Components/Icons";
import AdminLayout from "../../Components/Layout/Admin";

const AdminTiles = styled.div`
  & > a {
    text-decoration: none;
    font-weight: 400;
    width: 100%;
    background: white;
    color: #333;
    display: flex;
    align-items: stretch;
    margin: 20px 0;
    padding: 15px;

    &:first-child {
      margin-top: 0;
    }

    .meta {
      flex: 1;
    }

    .chevron {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    svg {
      height: 40px;
      width: auto;
    }
  }
`;

const Numbers = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Number = styled.div`
  width: calc(50% - 10px);
  background: white;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 150px;
  font-weight: bold;
  margin: 10px 0;

  > div:nth-child(1) {
    font-size: 4rem;
    line-height: 4.3rem;
  }
  > div:nth-child(2) {
    font-size: 0.9rem;
    text-transform: uppercase;
  }
`;

interface IAdminProps {
  users: number;
  discord_accounts: number;
  attempts: number;
  levels_solved: number;
  tiles_opened: number;
  sidequests_submitted: number;
}

const Admin: React.FC<IAdminProps> = ({
  users,
  discord_accounts,
  attempts,
  levels_solved,
  tiles_opened,
  sidequests_submitted
}: IAdminProps) => {
  return (
    <AdminLayout title="Admin" backTo="/">
      <AdminTiles>
        <Numbers>
          <Number>
            <div>{users}</div>
            <div>users</div>
          </Number>
          <Number>
            <div>{discord_accounts}</div>
            <div>discord accounts</div>
          </Number>
          <Number>
            <div>{attempts}</div>
            <div>attempts</div>
          </Number>
          <Number>
            <div>{levels_solved}</div>
            <div>levels solved</div>
          </Number>
          <Number>
            <div>{tiles_opened}</div>
            <div>tiles opened</div>
          </Number>
          <Number>
            <div>{sidequests_submitted}</div>
            <div>sidequests submitted</div>
          </Number>
        </Numbers>

        <InertiaLink href="/admin/users">
          <div className="meta">
            <h2 className="title">Users</h2>
            <div className="desc">List, edit, delete, disqualify</div>
          </div>
          <div className="chevron">
            <ChevronRight />
          </div>
        </InertiaLink>

        <InertiaLink href="/admin/notifications">
          <div className="meta">
            <h2 className="title">Notifications</h2>
            <div className="desc">Create, list, edit, delete</div>
          </div>
          <div className="chevron">
            <ChevronRight />
          </div>
        </InertiaLink>

        <InertiaLink href="/admin/tiles">
          <div className="meta">
            <h2 className="title">Tiles</h2>
            <div className="desc">List, edit</div>
          </div>
          <div className="chevron">
            <ChevronRight />
          </div>
        </InertiaLink>
      </AdminTiles>
    </AdminLayout>
  );
};

export default Admin;
