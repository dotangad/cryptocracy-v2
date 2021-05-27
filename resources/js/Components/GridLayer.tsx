import styled from "styled-components";
import { Layer } from "./helpers";

export default styled(Layer)`
  display: grid;
  grid-template-columns: 75px 1fr 3fr 1fr;
  grid-template-rows: 75px 1fr 4.5fr 75px;
  grid-template-areas:
    "MobileHeader 12 13 14"
    "21 Title 23 SidebarTop"
    "31 Navbar Content Sidebar"
    "fLogo Social fContent Copyright";

  > div {
    color: white;
    border: 1.5px solid #282828;
  }

  > .Navbar {
    grid-area: Navbar;
    overflow: auto;
  }
  > .Content {
    grid-area: Content;
    overflow: auto;
  }
  > .Sidebar {
    grid-area: Sidebar;
    overflow: auto;
  }
  > .SidebarTop {
    grid-area: SidebarTop;
    overflow: auto;
  }
  > .Title {
    grid-area: Title;
    overflow: auto;
  }
  > .fLogo {
    grid-area: fLogo;
    overflow: auto;
  }
  > .Social {
    grid-area: Social;
    overflow: auto;
  }
  > .fContent {
    grid-area: fContent;
    overflow: auto;
  }
  > .Copyright {
    grid-area: Copyright;
    overflow: auto;
  }
  > .MobileHeader {
    grid-area: MobileHeader;
    overflow: auto;
  }
  > .12 {
    grid-area: 12;
    overflow: auto;
  }
  > .13 {
    grid-area: 13;
    overflow: auto;
  }
  > .14 {
    grid-area: 14;
    overflow: auto;
  }
  > .21 {
    grid-area: 21;
    overflow: auto;
  }
  > .23 {
    grid-area: 23;
    overflow: auto;
  }
  > .31 {
    grid-area: 31;
    overflow: auto;
  }

  @media screen and (max-width: 1300px) {
    display: flex !important;
    flex-direction: column;

    & > div {
      color: white;
      border: none;
      display: none !important;
      overflow: visible !important;
      height: auto;
    }

    & .MobileHeader,
    .Navbar,
    .Content,
    .Copyright,
    .Title {
      display: flex !important;
    }

    > .Sidebar {
      grid-area: Sidebar;
    }
    > .SidebarTop {
      grid-area: SidebarTop;
    }
    > .Title {
      grid-area: Title;
    }
    > .fLogo {
      grid-area: fLogo;
    }
    > .Social {
      grid-area: Social;
    }
    > .fContent {
      grid-area: fContent;
    }
    > .Copyright {
      grid-area: Copyright;
    }
    > .MobileHeader {
      grid-area: MobileHeader;
    }
    > .12 {
      grid-area: 12;
    }
    > .13 {
      grid-area: 13;
    }
    > .14 {
      grid-area: 14;
    }
    > .21 {
      grid-area: 21;
    }
    > .23 {
      grid-area: 23;
    }
    > .31 {
      grid-area: 31;
    }
  }
`;
