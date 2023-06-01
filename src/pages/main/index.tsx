import SwiperSection from "@/components/main/swiper";
import InquireSection from "@/components/main/mainPage/InquireSection";
import VideoSection from "@/components/main/mainPage/videoSection";
import ServiceSection from "@/components/main/mainPage/serviceSection";

const Main = () => {
  return (
    <main>
      <SwiperSection />
      <InquireSection />
      <VideoSection />
      <ServiceSection />
    </main>
  );
};

export default Main;
