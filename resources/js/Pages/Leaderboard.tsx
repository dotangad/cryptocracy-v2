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

  thead {
    border-bottom: 3px solid white;
  }

  tr {
    width: 100%;
    overflow: hidden;
  }

  th,
  td {
    padding: 15px 30px;
    font-size: 1.1rem;
    text-align: left;
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
  username: string;
}

interface IProps {
  users: ILeaderboardUser[];
}

const Leaderboard: React.FC<IProps> = ({ users }: IProps) => {
  const [displayUsers, setDisplayUsers] = useState<ILeaderboardUser[]>(users);
  const searchRef = useRef<HTMLInputElement>(null);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setDisplayUsers(
      users.filter(({ username }) =>
        username.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <>
      <Global />
      <Layout
        title="Leaderboard"
        gridStyles={{
          gridTemplateColumns: "75px 20vw 3fr 1fr"
        }}
      >
        <div>
          <SearchInput placeholder="Search" ref={searchRef} onChange={handleSearch} />

          <LeaderboardTable>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {displayUsers.map(({ username }, i) => (
                <tr>
                  <td>{i + 1}</td>
                  <td>{username}</td>
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
