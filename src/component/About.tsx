import React from "react";
import styled from "styled-components";

const SectionDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.aboutColor};
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

const About = React.forwardRef<HTMLDivElement, DivProps>((props, ref) => (
  <>
    <SectionDiv className="padding" {...props} ref={ref}>
      <Title>ABOUT</Title>
      <div>hello</div>
    </SectionDiv>
  </>
));

export default About;
