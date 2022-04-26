import { useRef, useState } from 'react';
import styled from 'styled-components';
import Header from '../component/Header';
import About from '../component/About';
import Stack from '../component/Stack';
import Sns from '../component/Sns';
import Project from '../component/Project';
import Experience from '../component/Experience';

import MenuIcon from '../image/Menu.png';

const Icon = styled.div`
  position: fixed;
  left: 20px;
  top: 20px;
`;

const Nav = styled.div`
  position: absolute;
  cursor: pointer;
`;

const NavMenu = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    color: ${(props) => props.theme.textColor};
    padding: 0px 20px;
    border: none;
    /* background-color: transparent !important; */
    /* background-color: ${(props) => props.theme.cardBgColor}; */
  }
  div:hover {
    color: ${(props) => props.theme.accentColor};
    cursor: pointer;
  }
`;

function Home() {
  const headerRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const snsRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  const Routers = () => {
    return (
      <>
        <Nav
          style={{ top: '15px', left: '70px' }}
          onClick={() => aboutRef.current?.scrollIntoView({ behavior: 'smooth' })}
        >
          about
        </Nav>
        <Nav
          style={{ top: '40px', left: '30px' }}
          onClick={() => stackRef.current?.scrollIntoView({ behavior: 'smooth' })}
        >
          stack
        </Nav>
        <Nav
          style={{ top: '65px', left: '100px' }}
          onClick={() => snsRef.current?.scrollIntoView({ behavior: 'smooth' })}
        >
          Experience
        </Nav>
        <Nav
          style={{ top: '90px', left: '40px' }}
          onClick={() => projectRef.current?.scrollIntoView({ behavior: 'smooth' })}
        >
          project
        </Nav>
        <Nav
          style={{ top: '115px', left: '80px' }}
          onClick={() => experienceRef.current?.scrollIntoView({ behavior: 'smooth' })}
        >
          sns
        </Nav>
      </>
    );
  };

  return (
    <>
      <Icon>
        <img
          onClick={() => headerRef.current?.scrollIntoView({ behavior: 'smooth' })}
          style={{ position: 'relative', cursor: 'pointer' }}
          width="200px"
          src={MenuIcon}
          alt="MenuIcon"
        />
        <Routers />
      </Icon>
      <Header ref={headerRef}></Header>
      <About ref={aboutRef}></About>
      <Stack ref={stackRef}></Stack>
      <Sns ref={snsRef}></Sns>
      <Project ref={projectRef}></Project>
      <Experience ref={experienceRef}></Experience>
    </>
  );
}
export default Home;
