import SwiperSection from "@/components/main/swiper";
import TopSection from "@/components/main/salePage/topSection";
import LatestUploadSection from "@/components/main/salePage/latestUploadSection";
import AllServiceSection from "@/components/main/salePage/allServiceSection";

const Sale = () => {
  return (
    <main>
      <SwiperSection />
      <TopSection />
      <LatestUploadSection />
      <AllServiceSection />
    </main>
  );
};

export default Sale;
