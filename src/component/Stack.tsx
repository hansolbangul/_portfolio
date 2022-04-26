import React from 'react';
import styled from 'styled-components';

const SectionDiv = styled.div`
  width: 100%;
  height: 50vh;
  background-color: #ed4fe0;
`;

type DivProps = JSX.IntrinsicElements['div'];

const Stack = React.forwardRef<HTMLDivElement, DivProps>((props, ref) => (
  <>
    <SectionDiv {...props} ref={ref}></SectionDiv>
  </>
));

export default Stack;
