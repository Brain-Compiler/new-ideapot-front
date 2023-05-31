import styled from "styled-components";
import Card from "../card";

const InquireSection = () => {
  return (
    <Background>
      <Contents>
        <Title>
          Service <BoldTitle>Farm에서!</BoldTitle>
        </Title>
        <CardWrap>
          <Card
            category="서비스 거래"
            title="안전하고 확실하게 거래하세요"
            img={1}
          />
          <Card
            category="프로젝트 팀"
            title="실력있는 개발자들과 함께해보세요"
            img={2}
          />
          <Card
            category="애프터 서비스"
            title="구매한 서비스를 관리받으세요"
            img={3}
          />
        </CardWrap>
      </Contents>
    </Background>
  );
};

const Background = styled.section`
  width: 100%;
  height: 38.9375rem;
  margin-top: 2.5rem;
`;

const Contents = styled.div`
  width: 80rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: 1.875rem;
  font-family: "RegularFont";
`;

const BoldTitle = styled.span`
  font-size: 1.875rem;
  font-family: "BoldFont";
`;

const CardWrap = styled.div`
  margin: 0.75rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export default InquireSection;
