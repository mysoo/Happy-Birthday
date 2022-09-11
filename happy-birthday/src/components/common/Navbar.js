import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/happyBdayLogo.JPG";

const NavibarSection = styled.div`
  position: relative;
  grid-area: navibar;
  min-height: 120px;
  max-height: 120px;
`;
const Bar = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0 4px 4px -4px black;
  z-index: 4;
`;
const LogoBox = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 13%;
  margin-left: 1%;
  //   background-color: red;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const PagesBox = styled.div`
  position: absolute;
  height: 100%;
  width: 60%;
  //   background-color: yellow;
  left: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-decoration-line: none;
  font-size: 3vh;
`;
const StyledLink = styled(NavLink)`
  box-sizing: border-box;
  font-weight: 600;
  font-size: 30px;
  text-decoration-line: none;
  color: #e5ccff;
  :hover {
    color: #b266ff;
  }
  .active {
    color: #b266ff;
  }
`;

export default function Navibar() {
  return (
    <NavibarSection>
      <Bar>
        {/* 로고 */}
        <LogoBox>
          <NavLink
            style={{ height: "100%", width: "60vw" }}
            to="/Happy-Birthday/"
          >
            <img
              style={{ height: "120px", width: "120px" }}
              alt="logo"
              src={logo}
            />
          </NavLink>
        </LogoBox>

        {/* 메뉴 */}
        <PagesBox>
          {/* <div> */}
          <StyledLink
            activeClassName="active"
            //  style={({ isActive }) =>
            //  (isActive ? {color: 'red'} : {color: 'blue'})}
            // style={{ textDecorationLine: "none", hover: "black" }}
            to="/cake"
          >
            Cake
          </StyledLink>
          <StyledLink
            style={{ textDecorationLine: "none" }}
            activeClassName="active"
            to="/gift"
          >
            Gift
          </StyledLink>
          <StyledLink
            style={{ textDecorationLine: "none" }}
            activeClassName="active"
            to="/letter"
          >
            Letter
          </StyledLink>
          {/* </div> */}
        </PagesBox>
      </Bar>
    </NavibarSection>
  );
}
