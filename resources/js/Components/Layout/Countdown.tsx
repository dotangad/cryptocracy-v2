import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { usePage } from "@inertiajs/inertia-react";
import { IPageProps } from "./helpers";

const CountdownContainer = styled.div`
  display: flex;
  /* justify-content: flex-start; */
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 20px;

  & > div {
    margin: 0 2px;
    display: flex;
    flex-direction: column;
    align-items: center;

    > span:first-child {
      background: #292929;
      padding: 5px;
      font-size: 1.1rem;
      border: none;
      border-radius: 3px;
      font-family: monospace;
      margin-bottom: 2px;
      font-weight: bold;
    }

    > span:last-child {
      font-size: 0.6rem;
      font-weight: 400;
      text-transform: uppercase;
    }

    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 1300px) {
    display: none;
  }
`;

function countdownTo(dt: string): ICountdown {
  const fmt = (n: number) => String(Math.floor(n)).padStart(2, "0");
  const diff = (Date.parse(dt) - Date.now()) / 1000;
  const days = fmt(diff / (60 * 60 * 24));
  const hours = fmt((diff / (60 * 60)) % 24);
  const minutes = fmt((diff / 60) % 60);
  const seconds = fmt(diff % 60);

  return {
    days,
    hours,
    minutes,
    seconds
  };
}

interface ICountdown {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const Countdown: React.FC = () => {
  const { dates } = usePage<IPageProps>().props;
  const [countdown, setCountdown] = useState<ICountdown>(countdownTo(dates.start));

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(countdownTo(dates.start));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <CountdownContainer>
      <div>
        <span>{countdown.days}</span>
        <span>DY</span>
      </div>
      <div>
        <span>{countdown.hours}</span>
        <span>HR</span>
      </div>
      <div>
        <span>{countdown.minutes}</span>
        <span>Min</span>
      </div>
      <div>
        <span>{countdown.seconds}</span>
        <span>Sec</span>
      </div>
    </CountdownContainer>
  );
};

export default Countdown;