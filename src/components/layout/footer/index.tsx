import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <Background>
      {/* 위쪽 컨테이너 */}
      <FirstContainer>
        <Contents>
          <Container>
            <Span>회사소개</Span>
            <Span>이용약관</Span>
            <Span>개인정보처리방침</Span>
            <Span>아이디어 보호방침</Span>
            <Span>지식재산권 보호센터</Span>
            <LastSpan>배너/광고 문의</LastSpan>
          </Container>
          <Partner>
            비즈니스 파트너 <FontAwesomeIcon icon={faAngleRight} size="xs" />
          </Partner>
        </Contents>
      </FirstContainer>
      {/* 아래쪽 컨테이너 */}
      <SecondContainer>
        {/* 위쪽 컨텐츠 */}
        <FirstContent>
          <Title>(주)브레인 컴파일러</Title>
          <p>
            <SecondSpan>대표 김윤현</SecondSpan>
            <SecondSpan>경상북도 의성군 봉양면 봉호로 14 코딩관 3층</SecondSpan>
            <SecondLastSpan>사업자등록번호: 000-11-22222</SecondLastSpan>
            <br />
            <SecondSpan>통신판매업신고 : 2022-경북의성-0000</SecondSpan>
            <SecondLastSpan>E-mail : kyhofficial05@gmail.com</SecondLastSpan>
          </p>
        </FirstContent>
        {/* 아래쪽 컨텐츠 */}
        <SecondContent>
          <Caution>
            IdeaPot에서 판매하는 상품 중에는 개별 판매자가 판매하는 상품이
            포함되어 있습니다. <br /> 개별 판매자가 판매하는 상품에 대해
            IdeaPot은 통신중개 판매업자로서 통신판매의 당사자가 아니며 상품의
            주문 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
          </Caution>
          <Copyright>
            Copyright © 2023 IdeaPot Inc. All rights reserved.
          </Copyright>
        </SecondContent>
      </SecondContainer>
    </Background>
  );
};

const Background = styled.footer`
  width: 100%;
  height: 32.125rem;
  background-color: #f1f1f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FirstContainer = styled.div`
  width: 100%;
  height: 3.5rem;
  background-color: #fff;
  margin-bottom: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SecondContainer = styled.div`
  width: 100%;
  height: 28.125rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Contents = styled.div`
  width: 80rem;
  display: flex;
  justify-content: space-between;
`;

const Container = styled.div`
  display: flex;
`;

const Span = styled.span`
  font-size: 0.875rem;

  &::after {
    content: "|";
    color: #d8d8d8;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
`;

const LastSpan = styled.span`
  font-size: 0.875rem;
`;

const Partner = styled.span`
  font-size: 0.875rem;
`;

const FirstContent = styled.div`
  width: 80rem;
  margin-bottom: 4.4375rem;
`;

const SecondContent = styled.div`
  width: 80rem;
  margin-bottom: 5.5rem;
`;

const Title = styled.h1`
  font-size: 1.125rem;
  font-family: "RegularFont";
  margin-bottom: 1rem;
`;

const SecondSpan = styled.span`
  color: #505050;
  font-size: 0.8125rem;

  &::after {
    content: "|";
    color: #d8d8d8;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
`;

const SecondLastSpan = styled.span`
  color: #505050;
  font-size: 0.8125rem;
`;

const Caution = styled.p`
  color: #505050;
  font-size: 0.8125rem;
  margin-bottom: 1rem;
`;

const Copyright = styled.p`
  color: #505050;
  font-size: 0.8125rem;
`;

export default Footer;
