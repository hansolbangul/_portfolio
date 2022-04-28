import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isMoveAtom } from "../atoms";
import Vscode from "../component/Vscode";
import Window from "../component/Window";

import window from '../image/window.png'

const Main = styled.div`
    width: 100vw;
    position: relative;
    height: 100vh;
    background-size: cover;
`

const Prograss = styled.div`
    width: 400px;
    height: 30px;
    background-color: antiquewhite;
`

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
`

const BodyDiv = styled.div`
    display: flex;
    flex-direction: column;
`

const Black = styled.div`
    width: 100vw;
    height: 100vh;
    /* background-color: black; */
    transition: all ease 0.9s;
    position: absolute;
    display: flex;
`

const AniBackground = styled.div`
    background: linear-gradient(-45deg, #1d2c41, #b7c9d9, #22131a);
    background-size: 400% 400%;
    background-repeat: no-repeat;
    position: relative;
    animation: backgroundChange 20s ease-in-out initial;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`

function Home() {
    const [isMove, setIsMove] = useRecoilState(isMoveAtom)
    const [isLoading, setIsLoading] = useState(false)
    const [test, setTest] = useState(false)
    console.log(isMove)
    return (
        <Main>
            {isLoading ? <BackgroundImg style={{ 'opacity': isLoading ? 1 : 0, visibility: 'visible', top: isLoading ? 0 : '3000px' }} src={window} >
                <BodyDiv>
                    <span>Title</span>
                    <span>Content</span>
                </BodyDiv>
            </BackgroundImg> : null}

            <Black style={{ 'opacity': isLoading ? 0 : 1 }}>
                <AniBackground></AniBackground>
                <button onClick={() => setIsLoading(!isLoading)}>절전모드 해제</button>
            </Black>

        </Main>
    );
}
export default Home;
