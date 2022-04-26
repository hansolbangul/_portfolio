import React, { useRef, forwardRef, InputHTMLAttributes } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SectionDiv = styled.div`
  width: 100%;
  height: 50vh;
  background-color: #4fed91;
`;

type DivProps = JSX.IntrinsicElements['div'];

const Header = React.forwardRef<HTMLDivElement, DivProps>((props, ref) => (
  <>
    <SectionDiv {...props} ref={ref}></SectionDiv>
  </>
));

export default Header;
