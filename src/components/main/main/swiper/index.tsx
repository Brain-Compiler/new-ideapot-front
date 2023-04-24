import styled from "styled-components";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const SwiperSection = () => {
  SwiperCore.use([Pagination, Autoplay]);

  return (
    <Section>
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {/* 첫번째 슬라이드 */}
        <SwiperSlide>
          <Slide color="red" />
          {/* <Image src={Img} alt="img" /> */}
        </SwiperSlide>
        {/* 두번째 슬라이드 */}
        <SwiperSlide>
          <Slide color="green" />
          {/* <Image src={Img} alt="img" /> */}
        </SwiperSlide>
        {/* 세번째 슬라이드 */}
        <SwiperSlide>
          <Slide color="blue" />
          {/* <Image src={Img} alt="img" /> */}
        </SwiperSlide>
      </Swiper>
    </Section>
  );
};

const Section = styled.section`
  .swiper-slide {
    width: 100%;
    height: 28.75rem;
  }

  img {
    width: 100%;
  }

  .swiper-page {
    display: flex;
  }

  .swiper-pagination {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background-color: #fff;
    opacity: 1;
    margin: 0 0.5rem !important;
  }

  .swiper-pagination-bullet-active {
    width: 14px;
    height: 14px;
    background-color: #fff;
  }
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.color || "black"};
`;

export default SwiperSection;
