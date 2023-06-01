import styled from "styled-components";

import Card from "../card";

const ServiceSection = () => {
  return (
    <Background>
      <Contents>
        <Title>
          Service <BoldTitle>Farm</BoldTitle>
        </Title>
        <CardWrap>
          <Card category="광고 문의" title="배너·포스터 광고 문의" />
          <Card category="투자 문의" title="서비스 투자 문의" />
          <Card category="파트너 문의" title="파트너·제휴 문의" />
        </CardWrap>
      </Contents>
    </Background>
  );
};

const Background = styled.section`
  width: 100%;
  height: 29.125rem;
`;

const Contents = styled.div`
  width: 80rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: 2.5rem;
  font-family: "RegularFont";
`;

const BoldTitle = styled.span`
  font-size: 2.5rem;
  font-family: "BoldFont";
`;

const CardWrap = styled.div`
  margin: 0.75rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export default ServiceSection;
