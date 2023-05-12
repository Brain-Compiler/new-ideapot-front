import InfoBox from "@/components/main/salePage/infoBox";
import LatestUploadSection from "@/components/main/salePage/latestUploadSection";
import TopSection from "@/components/main/salePage/topSection";
import SwiperSection from "@/components/main/swiper";

const Sale = () => {
  return (
    <main>
      <SwiperSection />
      <TopSection />
      <LatestUploadSection />
    </main>
  );
};

export default Sale;
