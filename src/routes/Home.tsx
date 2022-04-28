import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Header from "../component/Header";
import About from "../component/About";
import Stack from "../component/Stack";
import Sns from "../component/Sns";
import Project from "../component/Project";
import Experience from "../component/Experience";

import MenuIcon from "../image/Menu.png";
import Toggle from "../image/toggle.png";
import Close from "../image/close.png";

const Icon = styled.div`
  position: fixed;
  right: 20px;
  top: 20px;
  width: 100px;
  height: 200px;
  box-shadow: 2px 2px 2px 2px gray;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const Nav = styled.div`
  cursor: pointer;
`;

const MenuImg = styled.img`
  position: relative;
  cursor: pointer;
`;

const MobileMenu = styled.div`
  position: fixed;
  left: 20px;
  bottom: 20px;
  transition: all ease 0.5s;
`;

const Circle = styled.div<{ isMove: IMove; color: string }>`
  position: absolute;
  width: 50px;
  height: 50px;
  margin: 0 10px 10px 0;
  border-style: solid;
  border-width: 2px;
  border-color: ${props => props.color};
  border-radius: 80%;
  backface-visibility: hidden;
  left: ${props => `${props.isMove.left}px`};
  top: ${props => `${props.isMove.top}px`};
  transition: all ease 0.08s;
  z-index: 99999;
`;

interface IMove {
  left: number;
  top: number;
}

function Home() {
  const headerRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const snsRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  const [isMenu, setIsMenu] = useState(true);
  const [isMove, setIsMove] = useState({
    left: -10,
    top: -20,
  });
  const [isColor, setIsColor] = useState("gray");

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("mousemove", onMouseUpdate, false);
    }
    watchScroll();
    var colorCode = "#" + Math.round(Math.random() * 0xffffff).toString(16);
    setIsColor(() => colorCode);
  }, []);

  function onMouseUpdate(e: any) {
    setIsMove(() => {
      return { left: e.pageX, top: e.pageY };
    });
  }

  const Routers = () => {
    return (
      <>
        <Nav
          style={{
            height: "calc(100% / 5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderBottom: "1px solid black",
            color: "#d5ed4f",
          }}
          onClick={() =>
            aboutRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          about
        </Nav>
        <Nav
          style={{
            height: "calc(100% / 5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderBottom: "1px solid black",
            color: "#934fed",
          }}
          onClick={() =>
            stackRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          stack
        </Nav>
        <Nav
          style={{
            height: "calc(100% / 5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderBottom: "1px solid black",
            color: "#ed4fe0",
          }}
          onClick={() =>
            experienceRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          experience
        </Nav>
        <Nav
          style={{
            height: "calc(100% / 5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderBottom: "1px solid black",
            color: "#4fd5ed",
          }}
          onClick={() =>
            projectRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          project
        </Nav>
        <Nav
          style={{
            height: "calc(100% / 5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#4f5fed",
          }}
          onClick={() => snsRef.current?.scrollIntoView({ behavior: "smooth" })}
        >
          sns
        </Nav>
      </>
    );
  };

  return (
    <>
      <MobileMenu
        className="m"
        style={{
          zIndex: 1990,
        }}
      >
        <MenuImg
          style={{ bottom: "0px", position: "absolute", zIndex: 2000 }}
          onClick={() => setIsMenu(!isMenu)}
          width="26px"
          src={isMenu ? Toggle : Close}
          alt="Toggle"
        />
        {isMenu ? null : (
          <div
            style={{
              position: "relative",
              bottom: isMenu ? "-30px" : "0px",
              opacity: isMenu ? 0 : 1,
              left: "20px",
              zIndex: 1990,
              width: "200px",
              height: "200px",
            }}
          >
            <MenuImg
              onClick={() =>
                headerRef.current?.scrollIntoView({ behavior: "smooth" })
              }
              width="200px"
              src={MenuIcon}
              alt="MenuIcon"
            />
            <Nav
              style={{
                top: "15px",
                left: "70px",
                position: "absolute",
                color: "#d5ed4f",
              }}
              onClick={() => {
                setIsMenu(() => !isMenu);
                aboutRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              about
            </Nav>
            <Nav
              style={{
                top: "40px",
                left: "30px",
                position: "absolute",
                color: "#934fed",
              }}
              onClick={() => {
                setIsMenu(() => !isMenu);
                stackRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              stack
            </Nav>
            <Nav
              style={{
                top: "115px",
                left: "80px",
                position: "absolute",
                color: "#ed4fe0",
              }}
              onClick={() => {
                setIsMenu(() => !isMenu);
                snsRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              sns
            </Nav>
            <Nav
              style={{
                top: "90px",
                left: "40px",
                position: "absolute",
                color: "#4fd5ed",
              }}
              onClick={() => {
                setIsMenu(() => !isMenu);
                projectRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              project
            </Nav>
            <Nav
              style={{
                top: "65px",
                left: "100px",
                position: "absolute",
                color: "#4f5fed",
              }}
              onClick={() => {
                setIsMenu(() => !isMenu);
                experienceRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              experience
            </Nav>
          </div>
        )}
      </MobileMenu>
      <Icon className="pc">
        {/* <MenuImg
          onClick={() =>
            headerRef.current?.scrollIntoView({ behavior: "smooth" })
          }
          width="200px"
          src={MenuIcon}
          alt="MenuIcon"
        /> */}
        <Routers />
      </Icon>
      <Header ref={headerRef}></Header>
      <About ref={aboutRef}></About>
      <Stack ref={stackRef}></Stack>
      <Experience ref={experienceRef}></Experience>
      <Project ref={projectRef}></Project>
      <Sns ref={snsRef}></Sns>
      <Circle className="pc" isMove={isMove} color={isColor}></Circle>
    </>
  );
}
export default Home;
