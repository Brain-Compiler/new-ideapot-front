import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

import design1 from "@/assets/imgs/salePage/design1.jpg";
import design2 from "@/assets/imgs/salePage/design2.jpg";

const Designs = () => {
  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={2}
      modules={[Pagination]}
      pagination={{ clickable: true }}
      style={{ height: "230px" }}
    >
      <SwiperSlide>
        <Image
          src={design1}
          alt="design1"
          style={{
            width: "22.3125rem",
            height: "12.5rem",
            borderRadius: "5px",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={design2}
          alt="design2"
          style={{
            width: "22.3125rem",
            height: "12.5rem",
            borderRadius: "5px",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={design1}
          alt="design1"
          style={{
            width: "22.3125rem",
            height: "12.5rem",
            borderRadius: "5px",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={design2}
          alt="design2"
          style={{
            width: "22.3125rem",
            height: "12.5rem",
            borderRadius: "5px",
          }}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Designs;
