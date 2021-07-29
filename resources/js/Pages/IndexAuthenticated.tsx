import React from "react";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import styled, { createGlobalStyle } from "styled-components";
import Layout, { SidebarTop, IPageProps } from "../Components/Layout";
import { ChevronRight } from "../Components/Icons";
import Countdown from "../Components/Layout/Countdown";
import { ReferralCodeForm } from "../Components/ReferralCodeForm";
import Notifications from "../Components/Notifications";
import UserCard, { UserCardContainer } from "../Components/IndexUserCard";

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

const SplitContainer = styled.div`
  width: 100%;
  min-height: 0;
  height: calc((100vh - 150px) * 3 / 4);
  overflow: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  & > div {
    height: calc(100%);
    overflow: auto;
    width: 50%;
    min-width: 300px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    & > div {
      height: calc(100%);
      overflow: auto;
    }
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


const NumberCard = styled.div`
  width: 100%;
  background: #292929;
  margin: 10px 0;
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
  referred_users: number;
}

const Index: React.FC<IIndexProps> = ({ notifications, referred_users }: IIndexProps) => {
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
              <UserCard referred_users={referred_users} />
            </div>
            <div>
              <div>
                {started ? (
                  <>
                    {!ended && (
                      <>
                        <div>
                          <Countdown large={true} />
                        </div>
                        {!user.referral_code && <ReferralCodeForm />}
                        <NumberCard>
                          <span>{user.tile_id - 1}</span>
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
                    <div>
                      <Countdown large={true} />
                    </div>
                    {!user.referral_code && <ReferralCodeForm />}
                    <InfoContainer>Cryptocracy 2021 has not started yet.</InfoContainer>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </SplitContainer>
        </BigContainer>
      </Layout>
    </>
  );
};

export default Index;
