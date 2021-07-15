import React from "react";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import styled, { createGlobalStyle } from "styled-components";
import Layout, { SidebarTop, IPageProps } from "../Components/Layout";
import { PrimaryButton } from "../Components/Button";
import { ChevronRight } from "../Components/Icons";
import Countdown from "../Components/Layout/Countdown";
import countries from "../Data/countries";

const Global = createGlobalStyle`
  .Content > div {
    min-height: 0;
  }

  .layer.grid > .Content {
    padding: 0 !important;
    display: flex;
    align-items: flex-end;
  }
`;

const NotificationsContainer = styled.div`
  min-height: 0;
  overflow: hidden;
  height: calc((100vh - 150px) * 3 / 4);
  width: 100%;

  & > div {
    height: calc(100%);
    overflow: auto;
  }

  & > div > div {
    margin: 20px;
    padding: 10px 15px;
    background: #292929;
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;

    > span.timestamp {
      width: 100%;
      text-align: right;
      font-weight: bold;
      color: #888;
      font-size: 0.8rem;
      padding: 0 5px;
    }
  }
`;

interface INotificationsProps {
  notifications: { content: string; created_at: string }[];
}

const Notifications: React.FC<INotificationsProps> = ({
  notifications
}: INotificationsProps) => {
  return (
    <NotificationsContainer>
      <div>
        {notifications.length === 0 ? (
          <div>
            <span style={{ fontWeight: "bold", color: "#999" }}>
              No new notifications
            </span>
          </div>
        ) : (
          notifications.map(({ content, created_at }, i) => (
            <div key={i}>
              <span>{content}</span>
              <span className="timestamp">{created_at}</span>
            </div>
          ))
        )}
      </div>
    </NotificationsContainer>
  );
};

const SplitContainer = styled.div`
  width: 100%;
  min-height: 0;
  height: calc((100vh - 150px) * 3 / 4);
  overflow: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  & > div {
    height: 100%;
    width: 50%;
    min-width: 300px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  @media screen and (max-width: 900px) {
    height: 100%;
    align-items: center;
    & > div {
      height: auto;
      width: 100%;
      min-width: 0;
    }
  }
`;

const BigContainer = styled.div`
  height: calc((100vh - 150px) * 3 / 4);
  width: 100%;
  min-height: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: auto;

  @media screen and (max-width: 900px) {
    height: 100%;
    display: block;
    overflow: auto;
    padding: 0;
  }
`;

const UserCardContainer = styled.div`
  padding: 30px;
  background: #292929;
  margin: 10px 0;
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

const UserCard: React.FC = () => {
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
  ].concat(
    auth.user.discord_discriminator && auth.user.discord_username
      ? [
          {
            label: "Discord",
            data: "@" + auth.user.discord_username + "#" + auth.user.discord_discriminator
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
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          <PrimaryButton style={{ padding: "10px 20px" }} href="/discord">
            Connect Discord
          </PrimaryButton>
        </div>
      )}
    </UserCardContainer>
  );
};

const NumberCard = styled.div`
  width: 100%;
  background: #292929;
  margin: 30px 0;
  padding: 20px;
  font-weight: bold;
  color: #888;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;

  & > span {
    font-size: 2rem;
    font-family: monospace;
    color: white;
  }

  @media screen and (max-width: 900px) {
    display: none;
    &:first-child {
      margin-top: 60px;
    }
  }
`;

const PlayBtn = styled(InertiaLink)`
  margin: 10px 0;
  width: 100%;
  font-size: 1.2rem;
  text-transform: uppercase;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  text-decoration: none;
  font-weight: bold;
  padding: 15px 0;

  & svg {
    height: 25px;
    width: auto;
    color: inherit;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(3px);
  }
`;

const InfoContainer = styled(UserCardContainer)`
  min-height: 0;
  background: none;
  border: 3px solid #292929;
`;

interface IIndexProps {
  notifications: { content: string; created_at: string }[];
}

const Index: React.FC<IIndexProps> = ({ notifications }: IIndexProps) => {
  const {
    started,
    ended,
    auth: { user }
  } = usePage<IPageProps>().props;

  return (
    <>
      <Global />
      <Layout
        title="Cryptocracy II"
        SidebarHeader={
          <SidebarTop>
            <h1>Notifications</h1>
          </SidebarTop>
        }
        Sidebar={<Notifications notifications={notifications} />}
        gridStyles={{
          gridTemplateColumns: "75px 20vw 1fr 0.3fr"
        }}
      >
        <BigContainer>
          <SplitContainer>
            <div>
              <UserCard />
            </div>
            <div>
              {started ? (
                <>
                  {!ended && (
                    <>
                      <div style={{ marginBottom: "30px" }}>
                        <Countdown large={true} />
                      </div>
                      <NumberCard>
                        <span>{user.tile_id}</span>
                        <div>tile</div>
                      </NumberCard>
                    </>
                  )}
                  <NumberCard>
                    <span>{user.points}</span>
                    <div>points</div>
                  </NumberCard>
                  {ended ? (
                    <InfoContainer>Cryptocracy 2021 has ended.</InfoContainer>
                  ) : (
                    <PlayBtn href="/play">
                      <span>Play</span>
                      <ChevronRight />
                    </PlayBtn>
                  )}
                </>
              ) : !ended ? (
                <>
                  <div style={{ marginBottom: "30px" }}>
                    <Countdown large={true} />
                  </div>
                  <InfoContainer>Cryptocracy 2021 has not started yet.</InfoContainer>
                </>
              ) : (
                <></>
              )}
            </div>
          </SplitContainer>
        </BigContainer>
      </Layout>
    </>
  );
};

export default Index;
