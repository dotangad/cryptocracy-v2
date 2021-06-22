import React from "react";
import styled from "styled-components";
import { ChevronRight } from "../Components/Icons";
import AdminLayout from "../Components/Layout/Admin";

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

const Admin: React.FC = () => {
  return (
    <AdminLayout title="Admin">
      <AdminTiles>
        <a href="/admin/users">
          <div className="meta">
            <h2 className="title">Users</h2>
            <div className="desc">List, edit, delete, disqualify</div>
          </div>
          <div className="chevron">
            <ChevronRight />
          </div>
        </a>

        <a href="/admin/notifications">
          <div className="meta">
            <h2 className="title">Notifications</h2>
            <div className="desc">Create, list, edit, delete</div>
          </div>
          <div className="chevron">
            <ChevronRight />
          </div>
        </a>
      </AdminTiles>
    </AdminLayout>
  );
};

export default Admin;
