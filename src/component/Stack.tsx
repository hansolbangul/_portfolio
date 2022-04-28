import React from "react";
import styled from "styled-components";
import { DiTerminalBadge } from "react-icons/di";
import {
  SiReactrouter,
  SiMongodb,
  SiFirebase,
  SiPython,
  SiMysql,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiStyledcomponents,
} from "react-icons/si";
import { FaAws, FaVuejs, FaNode } from "react-icons/fa";

const SectionDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.stackColor};
`;

const Title = styled.h1`
  display: inline;
  font-size: 2.8rem;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  font-weight: 900;
  margin: 0 auto 2rem;
  line-height: 1.5;
`;

const Section = styled.div<{ color: string }>`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 10px;
  margin-bottom: 30px;
  background-color: ${props => props.color};
  border-radius: 30px;
`;

const Temple = styled.div<{ color: string }>`
  padding: 20px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  transition: all ease 0.4s;
  position: relative;
  color: ${props => props.color};
  font-size: 3rem;
  &:hover {
    transform: translateY(-6px);
  }
`;

const Lang = styled.span`
  font-size: 2rem;
`;

const SubTItle = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 2rem;
  color: white;
`;

type DivProps = JSX.IntrinsicElements["div"];

const Stack = React.forwardRef<HTMLDivElement, DivProps>((props, ref) => (
  <>
    <SectionDiv className="padding" {...props} ref={ref}>
      <Title>STACK</Title>
      <Section className="sectionDiv" color="#e583ee">
        <Temple className="templeDiv" color="#61DAFB">
          <SiReact></SiReact>
          <Lang>&nbsp;: REACT</Lang>
        </Temple>
        <Temple className="templeDiv" color="#4FC08D">
          <FaVuejs></FaVuejs>
          <Lang>&nbsp;: VUE</Lang>
        </Temple>
        <Temple className="templeDiv" color="#339933">
          <FaNode></FaNode>
          <Lang>&nbsp;: NODE</Lang>
        </Temple>
        <Temple className="templeDiv" color="#4479A1">
          <SiMysql></SiMysql>
          <Lang>&nbsp;: MYSQL</Lang>
        </Temple>
        <Temple className="templeDiv" color="#61DAFB">
          <SiReact></SiReact>
          <Lang>&nbsp;: REACT-NATIVE</Lang>
        </Temple>
        <Temple className="templeDiv" color="#3178C6">
          <SiTypescript></SiTypescript>
          <Lang>&nbsp;: TYPESCRIPT</Lang>
        </Temple>
        <Temple className="templeDiv" color="#F7DF1E">
          <SiJavascript></SiJavascript>
          <Lang>&nbsp;: JAVASCRIPT</Lang>
        </Temple>
        <SubTItle className="m">❤️</SubTItle>
      </Section>
      {/* 섹션 2 다른 좋아하는 거 */}
      <Section className="sectionDiv" color="#e583ee">
        <Temple className="templeDiv" color="#FFCA28">
          <SiFirebase></SiFirebase>
          <Lang>&nbsp;: FIREBASE</Lang>
        </Temple>
        <Temple className="templeDiv" color="#47A248">
          <SiMongodb></SiMongodb>
          <Lang>&nbsp;: MONGO-DB</Lang>
        </Temple>
        <Temple className="templeDiv" color="#3776AB">
          <SiPython></SiPython>
          <Lang>&nbsp;: PYTHON</Lang>
        </Temple>
        <Temple className="templeDiv" color="#241F31">
          <DiTerminalBadge></DiTerminalBadge>
          <Lang>&nbsp;: TERMINAL</Lang>
        </Temple>
        <Temple className="templeDiv" color="#232F3E">
          <FaAws></FaAws>
          <Lang>&nbsp;: AWS</Lang>
        </Temple>
        <SubTItle className="m">💛</SubTItle>
      </Section>
      {/* 섹션 3 라이브러리 */}
      <Section className="sectionDiv" color="#e583ee">
        <Temple className="templeDiv" color="#FF4154">
          <SiReact></SiReact>
          <Lang>&nbsp;: REACT-QUERY</Lang>
        </Temple>
        <Temple className="templeDiv" color="#DB7093">
          <SiStyledcomponents></SiStyledcomponents>
          <Lang>&nbsp;: STYLED-COMPONENTS</Lang>
        </Temple>
        <Temple className="templeDiv" color="#000000">
          <SiReact></SiReact>
          <Lang>&nbsp;: RECOIL</Lang>
        </Temple>
        <Temple className="templeDiv" color="#CA4245">
          <SiReactrouter></SiReactrouter>
          <Lang>&nbsp;: REACT-ROUTER</Lang>
        </Temple>
        <SubTItle className="m">🤍</SubTItle>
      </Section>
    </SectionDiv>
  </>
));

export default Stack;
