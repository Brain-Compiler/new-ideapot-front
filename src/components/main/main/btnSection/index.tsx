import ServiceButton from "./button";

import styled from "styled-components";

import img1 from "@/assets/imgs/main/btnSection/078.개발,코딩.png";
import img2 from "@/assets/imgs/main/btnSection/108.악수,성사.png";
import img3 from "@/assets/imgs/main/btnSection/012.폴더,저장소.png";
import img4 from "@/assets/imgs/main/btnSection/077.브라우저 창.png";

const BtnSection = () => {
  return (
    <Background>
      <Contents>
        {/* 제목 */}
        <Title>IdeaPot에서 만나보세요!</Title>
        {/* 버튼 공간 */}
        <BtnArea>
          <ServiceButton
            img={img1}
            alt="개발, 코드"
            description="판매 중인 서비스"
          />
          <ServiceButton
            img={img2}
            alt="악수, 성사"
            description="프로젝트 팀 매칭"
          />
          <ServiceButton
            img={img3}
            alt="폴더, 저장소"
            description="판매 • 구매 기록"
          />
          <ServiceButton
            img={img4}
            alt="브라우저"
            description="애프터 서비스"
          />
        </BtnArea>
      </Contents>
    </Background>
  );
};

const Background = styled.section`
  width: 100%;
  height: 42.8125rem;
  background-color: #fff;
`;

const Contents = styled.div`
  width: 80rem;
  margin: 0 auto;
  margin-top: 8.125rem;
`;

const Title = styled.h1`
  width: 31.25rem;
  font-family: "BoldFont";
  font-size: 2.75rem;
  letter-spacing: -0.5px;
  line-height: 2.6rem;
  border-bottom: 0.625rem solid #9776ff;
  font-family: "BoldFont";
`;

const BtnArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 3.125rem;
`;

export default BtnSection;
