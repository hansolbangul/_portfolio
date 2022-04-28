import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

SwiperCore.use([Pagination, Autoplay, Navigation]);

const SectionDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.projectColor};
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

const StyledSwiter = styled(Swiper)`
  width: 100%;
  min-height: 60vh;
`;

type DivProps = JSX.IntrinsicElements["div"];

const Project = React.forwardRef<HTMLDivElement, DivProps>((props, ref) => (
  <>
    <SectionDiv className="padding" {...props} ref={ref}>
      <Title>PROJECT</Title>
      <StyledSwiter
        style={{
          backgroundColor: "#FFF5F1",
          borderRadius: "12px",
        }}
        navigation
        pagination={{ clickable: true }}
        onSwiper={swiper => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>슬라이더1</SwiperSlide>
        <SwiperSlide>슬라이더2</SwiperSlide>
        <SwiperSlide>슬라이더3</SwiperSlide>
      </StyledSwiter>
    </SectionDiv>
  </>
));

export default Project;
