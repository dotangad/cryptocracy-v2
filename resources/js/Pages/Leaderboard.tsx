import React, { ChangeEvent, useRef, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Layout from "../Components/Layout";

const Global = createGlobalStyle`
  .Sidebar {
    overflow: hidden;
  }
`;

const LeaderboardTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;

  tr {
    width: 100%;
    overflow: hidden;
  }

  /*
  tbody tr:nth-child(1) {
    color: #ffd700;
  }
  tbody tr:nth-child(2) {
    color: #c0c0c0;
  }
  tbody tr:nth-child(3) {
    color: #cd7f32;
  }

  tbody tr:nth-child(-n + 15) {
    font-weight: bold;
  }
  */

  th,
  td {
    padding: 15px 30px;
    font-size: 1.1rem;
    text-align: center;
  }

  th {
    font-size: 1.3rem;
    font-family: "Bruta Pro", "Lufga";
  }
`;

const SearchInput = styled.input`
  display: block;
  margin-bottom: 20px;
  width: 100%;
  background: none;
  color: inherit;
  font-size: 1.2rem;
  padding: 20px;
  border: none;
  border-bottom: 5px solid #282828;
  transition: border 0.3s ease, background 0.3s ease;

  &:focus {
    border-bottom-color: #fff;
    background: #282828;
    outline: none;
  }
`;

interface ILeaderboardUser {
  rank: number;
  username: string;
  points: number;
}

interface IProps {
  users: ILeaderboardUser[];
}

const Leaderboard: React.FC<IProps> = ({ users }: IProps) => {
  const [displayUsers, setDisplayUsers] = useState<ILeaderboardUser[]>(
    users.sort((a, b) => Number(b.points) - Number(a.points))
  );
  const searchRef = useRef<HTMLInputElement>(null);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setDisplayUsers(
      users
        .filter(({ username }) =>
          username.toLowerCase().includes(e.target.value.toLowerCase())
        )
        .sort((a, b) => Number(b.points) - Number(a.points))
    );
  };

  return (
    <>
      <Global />
      <Layout title="Leaderboard">
        <div>
          <SearchInput placeholder="Search" ref={searchRef} onChange={handleSearch} />

          <LeaderboardTable>
            <thead>
              <tr>
                <th>Username</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {displayUsers.map(({ username, points }) => (
                <tr>
                  <td>
                    {username === "impostor" ? (
                      <a
                        href="https://pastebin.com/bkwjyrWX"
                        style={{ textDecoration: "none", fontWeight: 400 }}
                      >
                        {username}
                      </a>
                    ) : (
                      username
                    )}
                  </td>
                  <td>{points}</td>
                </tr>
              ))}
            </tbody>
          </LeaderboardTable>
        </div>
      </Layout>
    </>
  );
};

export default Leaderboard;
