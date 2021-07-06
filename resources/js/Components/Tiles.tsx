import React from "react";
import styled from "styled-components";

const TilesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr);
  grid-template-areas:
    "str x01 x02 x03 x04 x05 x06"
    "x07 x08 x09 x10 x11 x12 x13"
    "x14 x15 cen cen cen x16 x17"
    "x18 x19 cen cen cen x20 x21"
    "x22 x23 cen cen cen x24 x25"
    "x26 x27 x28 x29 x30 x31 x32"
    "x33 x34 x35 x36 x37 x38 x39";

  & a {
    text-decoration: none;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    font-weight: 900;
    color: #999;
  }

  > div {
    border: 0.5px solid #29292940;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Start = styled.div`
  background: white;
  border-color: white;
  grid-area: str;
  color: #333;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.9rem;
`;

const Tiles: React.FC = () => {
  return (
    <TilesContainer>
      <Start>Start</Start>
      {Array(39)
        .fill("-")
        .map((_, i) => i + 1)
        .map((i) => (
          <div key={i} style={{ gridArea: `x${String(i).padStart(2, "0")}` }}>
            {i}
          </div>
        ))}
      <div style={{ gridArea: "cen" }}>
        <svg
          viewBox="0 0 36 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "50%", height: "auto" }}
        >
          <path
            d="M8.97945 13.4493C9.05782 11.7415 9.47628 10.1715 10.191 8.68222C10.6375 7.75217 11.2069 6.89716 11.8784 6.11359C12.9843 4.82422 14.3 3.80182 15.8286 3.0673C17.3421 2.34 18.9382 1.94461 20.6214 1.884C23.0653 1.79597 25.3136 2.41649 27.4015 3.67411C27.5791 3.78089 27.7991 3.85665 28.0041 3.8718C28.4254 3.90211 28.777 3.63442 28.8992 3.24841C29.0272 2.84507 28.9006 2.39773 28.5347 2.18488C27.9063 1.81906 27.2721 1.45397 26.6114 1.15237C25.1619 0.490011 23.6254 0.116982 22.0393 0.0267906C18.1287 -0.194717 14.6739 0.954672 11.726 3.57526C10.3959 4.75784 9.34254 6.15544 8.55237 7.74424C7.75069 9.35685 7.26177 11.0654 7.14961 12.8728C7.13811 13.059 7.1 13.2444 7.07052 13.4551C6.11138 13.4551 5.16231 13.4551 4.15068 13.4551C4.25134 13.3368 4.31174 13.256 4.3822 13.1845C4.7719 12.7899 5.1659 12.3988 5.55488 12.0027C5.74398 11.81 5.77777 11.5077 5.63828 11.3497C5.46644 11.1549 5.19251 11.1592 4.95883 11.3894C4.34122 11.9969 3.72792 12.6088 3.12612 13.2314C2.95284 13.4104 2.7774 13.5049 2.52432 13.4869C2.24391 13.4674 1.96134 13.4825 1.61263 13.4825C1.69963 13.3555 1.73918 13.2769 1.79813 13.2177C2.15835 12.8505 2.52288 12.4883 2.88525 12.1225C2.96147 12.046 3.04271 11.9717 3.10455 11.8836C3.22678 11.7083 3.20233 11.4543 3.06284 11.3252C2.91401 11.1881 2.67531 11.1737 2.50131 11.297C2.44667 11.336 2.40209 11.3887 2.35464 11.437C1.64714 12.1463 0.938934 12.8548 0.23432 13.5662C-0.0806002 13.8837 -0.0784431 14.1009 0.242947 14.4249C0.948281 15.1363 1.65649 15.8441 2.36398 16.5534C2.40209 16.5916 2.43732 16.6342 2.47902 16.6674C2.66093 16.8138 2.87663 16.8196 3.03337 16.6854C3.20089 16.5418 3.23972 16.2886 3.10742 16.0966C3.03912 15.9978 2.94421 15.917 2.85865 15.8304C2.46177 15.4307 2.06416 15.0324 1.66728 14.6334C1.67662 14.6052 1.68525 14.5771 1.6946 14.549C2.0771 14.549 2.46033 14.5345 2.84139 14.5583C2.94205 14.5648 3.04559 14.6781 3.12971 14.7611C3.72576 15.352 4.31533 15.9494 4.90922 16.5418C5.17956 16.8117 5.41827 16.8513 5.60809 16.6674C5.8015 16.4798 5.76267 16.1839 5.50455 15.922C5.16231 15.575 4.81647 15.2322 4.47351 14.8852C4.39227 14.8029 4.31965 14.712 4.23409 14.6146C4.55548 14.523 6.34865 14.4956 7.06693 14.5677C7.09497 14.7387 7.14098 14.9198 7.15177 15.1024C7.24883 16.7143 7.6601 18.2468 8.31007 19.7172C9.06933 21.4345 10.1356 22.9389 11.5067 24.216C13.6536 26.216 16.1766 27.4405 19.0842 27.8532C21.7402 28.2334 24.2969 27.8748 26.7465 26.7803C27.3117 26.5277 27.8531 26.2182 28.3894 25.9072C28.5807 25.7961 28.764 25.6287 28.8805 25.4426C29.0926 25.1034 29.0085 24.6381 28.7374 24.3523C28.4671 24.0681 28.0292 23.9851 27.6582 24.1705C27.3936 24.3033 27.1441 24.4663 26.8846 24.6106C25.2791 25.5024 23.5628 26.0068 21.7265 26.0984C18.491 26.2593 15.6373 25.2795 13.1813 23.1734C10.9876 21.2923 9.66465 18.8933 9.13619 16.0533C9.04776 15.5786 9.02259 15.0923 8.96292 14.5663C9.90264 14.515 10.8172 14.5482 11.7303 14.5425C12.6629 14.5367 13.5947 14.541 14.5272 14.541C15.4454 14.541 16.3628 14.541 17.309 14.541C17.987 15.2236 18.6837 15.9249 19.3797 16.6255C19.4466 16.6926 19.5084 16.7655 19.581 16.8261C19.7687 16.9827 19.9959 16.9783 20.1677 16.821C20.3101 16.6912 20.3381 16.4408 20.2166 16.2619C20.1562 16.1738 20.0721 16.101 19.9959 16.0245C19.4236 15.4487 18.8491 14.8736 18.2768 14.2979C18.1826 14.2033 18.0942 14.1038 17.982 13.9833C18.1948 13.769 18.3925 13.5691 18.591 13.3693C19.059 12.8995 19.5278 12.4298 19.9952 11.9594C20.0714 11.8829 20.1526 11.8079 20.2137 11.7206C20.3273 11.5582 20.3094 11.3338 20.185 11.1939C20.0556 11.0481 19.7953 11.007 19.6292 11.1217C19.5415 11.1823 19.4703 11.2682 19.3941 11.3447C18.7535 11.9868 18.11 12.6261 17.4758 13.274C17.3327 13.4205 17.1846 13.4869 16.9783 13.4869C14.4244 13.4818 11.8705 13.484 9.31666 13.4818C9.21169 13.4818 9.10743 13.4623 8.97945 13.4493Z"
            fill="#292929"
          />
        </svg>
      </div>
    </TilesContainer>
  );
};

export default Tiles;
