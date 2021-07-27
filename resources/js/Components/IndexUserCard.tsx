import React from "react";
import { usePage } from "@inertiajs/inertia-react";
import styled from "styled-components";
import { PrimaryButton } from "../Components/Button";
import countries from "../Data/countries";
import { IPageProps } from "./Layout";

export const UserCardContainer = styled.div`
  padding: 30px;
  background: #292929;
  margin: 10px 0;

  .buttons {
    display: flex;
    justify-content: "space-between";
    width: "100%";
  }

  @media screen and (max-width: 600px) {
    .buttons {
      flex-direction: column;
      align-items: center;
      a {
        width: 100%;
        margin: 10px 0;
      }
    }
  }
`;

const UserCreatedAt = styled.div`
  font-weight: bold;
  color: #888;
  font-size: 0.9rem;
`;

const UserAttribute = styled.div`
  margin: 20px 0;

  & > div:first-child {
    font-size: 0.9rem;
    font-weight: bold;
    color: #888;
  }

  & > div:last-child {
    font-size: 1.1rem;
  }
`;

const UserCard: React.FC<any> = ({ referred_users }: any): JSX.Element => {
  const { auth } = usePage<IPageProps>().props;

  const country = Object.entries(countries).find(([iso]) => iso === auth.user.country);
  const userData = [
    { label: "Name", data: auth.user.name },
    { label: "Email", data: auth.user.email },
    { label: "Institution / Company", data: auth.user.company },
    { label: "Phone", data: auth.user.phone },
    {
      label: "Country",
      // @ts-ignore
      data: country ? country[1] : "Unknown"
    }
  ]
    .concat(
      auth.user.discord_discriminator && auth.user.discord_username
        ? [
          {
            label: "Discord",
            data:
              "@" + auth.user.discord_username + "#" + auth.user.discord_discriminator
          }
        ]
        : []
    )
    .concat(
      auth.user.referral_code
        ? [
          {
            label: "Referral Code",
            data: `${auth.user.referral_code} (Referred ${referred_users} user${referred_users === 1 ? "" : "s"
              })`
          }
        ]
        : []
    );

  return (
    <UserCardContainer>
      <h1 style={{ fontSize: "1.6rem" }}>@{auth.user.username}</h1>
      <UserCreatedAt>Registered {auth.user.created}</UserCreatedAt>
      {userData.map(({ label, data }, i) => (
        <UserAttribute key={i}>
          <div>{label}</div>
          <div>{data}</div>
        </UserAttribute>
      ))}
      {!auth.user.discord_username && !auth.user.discord_discriminator && (
        <div
          style={{ display: "flex", justifyContent: "space-between", width: "100%" }}
          className="buttons"
        >
          <PrimaryButton style={{ padding: "10px 20px" }} href="/connectdiscord">
            Connect Discord
          </PrimaryButton>
        </div>
      )}
    </UserCardContainer>
  );
};

export default UserCard;
