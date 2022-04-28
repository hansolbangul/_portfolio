import React from "react";
import styled from "styled-components";
import { SiGithub, SiInstagram, SiBlogger } from "react-icons/si";

const SectionDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.snsColor};
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

const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.4rem;
`;

type DivProps = JSX.IntrinsicElements["div"];

const Sns = React.forwardRef<HTMLDivElement, DivProps>((props, ref) => (
  <>
    <SectionDiv className="padding" {...props} ref={ref}>
      <Title>SNS</Title>
      <Section>
        <SiGithub
          style={{
            cursor: "pointer",
            color: "#181717",
            margin: "0 20px 10px 20px",
          }}
          onClick={() =>
            (window.location.href = "https://github.com/hansolbangul")
          }
        />
        <SiInstagram
          style={{
            cursor: "pointer",
            color: "#181717",
            margin: "0 20px 10px 20px",
          }}
          onClick={() =>
            (window.location.href = "https://www.instagram.com/_oneso1/")
          }
        />
        <SiBlogger
          style={{
            cursor: "pointer",
            color: "#181717",
            margin: "0 20px 10px 20px",
          }}
          onClick={() =>
            (window.location.href = "https://hansolbangul.tistory.com/")
          }
        />
      </Section>
      <Section></Section>
    </SectionDiv>
  </>
));

export default Sns;
