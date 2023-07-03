import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { FaBars } from "react-icons/fa";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";

const Header = () => {
  return (
    <Nav>
      <NavLink to="/">EXPLORIX</NavLink>
      <Bars />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink key={item.index} to={item.link}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Button primary="true" round="true" to="/trips">
          Book a Flight
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  font-size: 20px; /* Increase the font size as desired */
  font-weight: 700; /* Increase the font weight for bolder text */
  transition: color 0.3s ease; /* Add a smooth color transition on hover */

  &:hover {
    color: #f26a2e; /* Change the color on hover */
  }
`;

const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
