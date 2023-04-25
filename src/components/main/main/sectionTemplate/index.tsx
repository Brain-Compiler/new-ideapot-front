import Image from "next/image";

import styled from "styled-components";

import Phone from "@/assets/pages/main/img/common/phone.png";

type propsType = {
  category: string;
  title: string;
  description: string;
};

const SectionTemplate = ({ category, title, description }: propsType) => {
  return (
    <Background>
      <Contents>
        <Info>
          <Category>{category}</Category>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Info>
        <Image src={Phone} alt="Phone" style={ImageStyle} />
      </Contents>
    </Background>
  );
};

const Background = styled.section`
  width: 100%;
  height: 78.75rem;
  background-color: #fff;
`;

const Contents = styled.div`
  width: 80rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div``;

const Category = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -2px;
  color: #9776ff;
`;

const Title = styled.h1`
  font-size: 2.75rem;
  font-weight: 900;
  letter-spacing: -5px;
  margin-top: 3.125rem;
  margin-bottom: 1.875rem;
  white-space: pre-line;
`;

const Description = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: -3px;
  color: #a5a5a5;
  white-space: pre-line;
`;

const ImageStyle = {
  width: "37.5rem",
  height: "58.5rem",
};

export default SectionTemplate;
