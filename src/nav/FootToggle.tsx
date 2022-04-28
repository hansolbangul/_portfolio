import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../atoms";
import { MdLightbulb, MdLightbulbOutline } from "react-icons/md";

const Footer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  border-radius: 50%;
  font-size: 30px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* color: ${props => props.theme.textColor}; */
  color: red;
  /* background-color: ${props => props.theme.bgColor}; */
  cursor: pointer;
`;

function FootToggle() {
  const isDark = useRecoilValue(isDarkAtom);
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom(prev => !prev);
  console.log(isDark);
  return (
    <Footer onClick={toggleDarkAtom}>
      {isDark ? <MdLightbulbOutline /> : <MdLightbulb />}
    </Footer>
  );
}
export default FootToggle;
