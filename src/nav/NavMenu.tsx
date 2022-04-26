import { useRef, useState } from 'react';
import styled from 'styled-components';

const Nav = styled.div`
  position: fixed;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.bgColor};
  /* background-color: black; */
  border-bottom: 1px solid gray;
`;

const NavMenu = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    color: ${(props) => props.theme.textColor};
    padding: 0px 20px;
    border: none;
    background-color: ${(props) => props.theme.cardBgColor};
  }
  button:hover {
    color: ${(props) => props.theme.accentColor};
  }
`;

function NavMenuList() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const snsRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  const Routers = () => {
    return (
      <>
        <button onClick={() => aboutRef.current?.scrollIntoView({ behavior: 'smooth' })}>
          about
        </button>
        <button onClick={() => stackRef.current?.scrollIntoView({ behavior: 'smooth' })}>
          stack
        </button>
        <button onClick={() => snsRef.current?.scrollIntoView({ behavior: 'smooth' })}>sns</button>
        <button onClick={() => projectRef.current?.scrollIntoView({ behavior: 'smooth' })}>
          project
        </button>
        <button onClick={() => experienceRef.current?.scrollIntoView({ behavior: 'smooth' })}>
          Experience
        </button>
      </>
    );
  };

  return (
    <>
      <Nav>
        <NavMenu>
          <Routers />
        </NavMenu>
      </Nav>
    </>
  );
}
export default NavMenuList;
