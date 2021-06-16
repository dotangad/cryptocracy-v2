import { usePage } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IPageProps } from "./helpers";

const CountdownContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 20px;
  font-weight: bold;
  font-size: 1.1rem;
`;

function countdownTo(dt: string) {
  const fmt = (n: number) => String(Math.floor(n)).padStart(2, "0");
  const diff = (Date.parse(dt) - Date.now()) / 1000;
  const days = fmt(diff / (60 * 60 * 24));
  const hours = fmt((diff / (60 * 60)) % 24);
  const minutes = fmt((diff / 60) % 60);
  const seconds = fmt(diff % 60);

  return String(`${days}:${hours}:${minutes}:${seconds}`);
}

const Countdown: React.FC = () => {
  const { dates } = usePage<IPageProps>().props;
  const [countdown, setCountdown] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(countdownTo(dates.start));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <CountdownContainer>{countdown}</CountdownContainer>;
};

export default Countdown;
