import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import styled, { keyframes } from "styled-components";
import { isMoveAtom } from "../atoms";
import Vscode from "../component/Vscode";
import Window from "../component/Window";

import window from "../image/window.png";

const Main = styled.div`
  width: 100vw;
  position: relative;
  height: 100vh;
  background-size: cover;
  overflow: hidden;
`;

const Prograss = styled.div`
  width: 400px;
  height: 30px;
  background-color: antiquewhite;
`;

const BackgroundImg = styled.div<{ src: string }>`
  width: 100vw;
  height: 100vh;
  background-image: url(${props => props.src});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ease 0.9s;
  position: absolute;
`;

const BodyDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Black = styled.div`
  width: 100vw;
  height: 100vh;
  /* background-color: black; */
  transition: all ease 0.3s;
  position: absolute;
  display: flex;
`;

const backgroundChange = keyframes`
    0%{
    background-position: 0 50%;
    }
    50% {
    background-position: 100% 50%;
    }
    100%{
    background-position: 0 50%;
    }
`;

const AniBackground = styled.div`
  background: linear-gradient(-45deg, #1d2c41, #b7c9d9, #22131a);
  width: 100%;
  height: 100%;
  background-size: 400% 400%;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  animation: ${backgroundChange} 20s ease-in-out infinite;
`;

function Home() {
  const [isMove, setIsMove] = useRecoilState(isMoveAtom);
  const [isLoading, setIsLoading] = useState(false);
  const [test, setTest] = useState(false);
  console.log(isMove);
  return (
    <Main>
      <BackgroundImg
        style={{
          opacity: isLoading ? 1 : 0,
          visibility: isLoading ? "visible" : "hidden",
          overflow: isLoading ? "visible" : "hidden",
          top: isLoading ? 0 : "101vh",
        }}
        src={window}
      >
        <BodyDiv>
          <span>Content</span>
        </BodyDiv>
      </BackgroundImg>

      {isLoading ? null : (
        <Black style={{ opacity: isLoading ? 0 : 1 }}>
          <AniBackground>
            <button onClick={() => setIsLoading(!isLoading)}>
              절전모드 해제
            </button>
          </AniBackground>
        </Black>
      )}
    </Main>
  );
}
export default Home;
