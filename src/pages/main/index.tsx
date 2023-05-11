import BtnSection from "@/components/main/mainPage/btnSection";
import SectionTemplate from "@/components/main/mainPage/sectionTemplate";
import SwiperSection from "@/components/main/swiper";

const Main = () => {
  return (
    <main>
      <SwiperSection />
      <BtnSection />
      <SectionTemplate
        category={"서비스 거래"}
        title={"서비스 거래 , \n소개부터 거래까지 \n확실하게"}
        description={
          "서비스 소개와 기능은 기본 , \n개발 언어와 대회 수상 여부 확인과 \n애프터 서비스까지 받을 수 있어요 ."
        }
      />
      <SectionTemplate
        category={"프로젝트 팀 매칭"}
        title={"팀 프로젝트 , \n실력있는 개발자들과 \n함께해보세요 !"}
        description={
          "팀 프로젝트를 \n실력있는 개발자들과 함께 \n진행해보세요 !"
        }
      />
      <SectionTemplate
        category={"애프터 서비스"}
        title={"실력있는 개발자들에게 \n구매한 서비스를 관리받으세요 !"}
        description={
          "실력있는 개발자들을 통해 \n구매한 서비스를 발전시키고 \n유지보수 받으세요 !"
        }
      />
    </main>
  );
};

export default Main;
