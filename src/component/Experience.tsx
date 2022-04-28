import React, { useRef, forwardRef, InputHTMLAttributes } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SectionDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.experienceColor};
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

type DivProps = JSX.IntrinsicElements["div"];

const Experience = React.forwardRef<HTMLDivElement, DivProps>((props, ref) => (
  <>
    <SectionDiv className="padding" {...props} ref={ref}>
      <Title>EXPERIENCE</Title>
      <div>hello</div>
    </SectionDiv>
  </>
));

export default Experience;
