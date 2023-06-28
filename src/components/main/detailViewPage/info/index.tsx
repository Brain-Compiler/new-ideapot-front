import { useState } from "react";
import Image from "next/image";

import styled from "styled-components";

import GBSW from "@/assets/imgs/salePage/GBSW.png";
import Browser from "@/assets/imgs/salePage/browser.png";
import Team from "@/assets/imgs/salePage/team.png";
import Target from "@/assets/imgs/salePage/target.png";
import Card from "@/assets/imgs/salePage/card.png";
import Time from "@/assets/imgs/salePage/time.png";
import Development from "@/assets/imgs/salePage/development.png";
import Memo from "@/assets/imgs/salePage/memo.png";
import Icon1 from "@/assets/imgs/salePage/Icon1.png";
import Icon2 from "@/assets/imgs/salePage/Icon2.png";
import Designs from "./swiper";

const Info = () => {
  const [skills, setSkills] = useState<string[]>([
    "Adobe XD",
    "React.JS",
    "TypeScript",
  ]);

  return (
    <Container>
      {/* 타이틀 */}
      <Wrap>
        <TitleWrap>
          <Image
            src={GBSW}
            alt="logo"
            style={{
              width: "1.8125rem",
              height: "1.8125rem",
              marginRight: "0.625rem",
            }}
          />
          <Title>학생 작품 전시관 & 통합 로그인 시스템</Title>
        </TitleWrap>
        <CategoryWrap>
          <Image
            src={Browser}
            alt="browser"
            style={{
              width: "1.5rem",
              height: "1.5rem",
              marginRight: "0.3125rem",
            }}
          />
          <Category>웹</Category>
        </CategoryWrap>
      </Wrap>
      {/* 서브 정보 */}
      <SubInfoWrap>
        <SubInfo>
          <Image
            src={Team}
            alt="team"
            style={{
              width: "1.5rem",
              height: "1.5rem",
              marginRight: "0.625rem",
            }}
          />
          <InfoFont>Dev.PMH</InfoFont>
        </SubInfo>
        <SubInfo>
          <Image
            src={Target}
            alt="target"
            style={{
              width: "1.5rem",
              height: "1.5rem",
              marginRight: "0.625rem",
            }}
          />
          <InfoFont>팀 프로젝트</InfoFont>
        </SubInfo>
        <SubInfo>
          <Image
            src={Card}
            alt="card"
            style={{
              width: "1.5rem",
              height: "1.5rem",
              marginRight: "0.625rem",
            }}
          />
          <InfoFont>14,230,000원</InfoFont>
        </SubInfo>
        <SubInfo>
          <Image
            src={Time}
            alt="time"
            style={{
              width: "1.5rem",
              height: "1.5rem",
              marginRight: "0.625rem",
            }}
          />
          <InfoFont>2022.08.03</InfoFont>
        </SubInfo>
      </SubInfoWrap>
      {/* 사용 기술 */}
      <SkillStackWrap>
        <Image
          src={Development}
          alt="development"
          style={{
            width: "1.5rem",
            height: "1.5rem",
            marginRight: "0.625rem",
          }}
        />
        <div>
          <InfoFont>사용 기술</InfoFont>
          <SkillsWrap>
            {skills.map((skill, key) => (
              <Skills key={key}>{skill}</Skills>
            ))}
          </SkillsWrap>
        </div>
      </SkillStackWrap>
      {/* 설명 1 */}
      <DecriptionWrap>
        <Image
          src={Memo}
          alt="memo"
          style={{
            width: "1.5rem",
            height: "1.5rem",
            marginRight: "0.625rem",
          }}
        />
        <Decription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sed
          veniam mollitia voluptas a vel. Ea fugit, consequatur voluptatum
          magnam, molestias, adipisci ex sequi esse repellendus illo similique
          debitis est!
        </Decription>
      </DecriptionWrap>
      {/* 설명 2 */}
      <DecriptionWrap>
        <Image
          src={Icon1}
          alt="icon1"
          style={{
            width: "1.5rem",
            height: "1.5rem",
            marginRight: "0.625rem",
          }}
        />
        <Decription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sed
          veniam mollitia voluptas a vel. Ea fugit, consequatur voluptatum
          magnam, molestias, adipisci ex sequi esse repellendus illo similique
          debitis est!
        </Decription>
      </DecriptionWrap>
      {/* 디자인 */}
      <div>
        <DesignWrap>
          <Image
            src={Icon2}
            alt="icon2"
            style={{
              width: "1.5rem",
              height: "1.5rem",
              marginRight: "0.625rem",
            }}
          />
          <SubInfo>디자인</SubInfo>
        </DesignWrap>
        <DesignSwiper>
          <Designs />
        </DesignSwiper>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: calc(100% - 3rem);
  height: 37.5rem;
  padding: 1.5rem;
  background-color: #fff;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 10px;
`;

// 공용 폰트
const InfoFont = styled.span`
  font-size: 0.875rem;
  font-family: "RegularFont";
`;

// 타이틀
const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const TitleWrap = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.span`
  font-size: 1.25rem;
  font-family: "BoldFont";
  letter-spacing: -0.06rem;
`;

const CategoryWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e0d3fd;
  padding: 0 1.125rem;
  border-radius: 1.875rem;
`;

const Category = styled.span`
  font-family: "MediumFont";
`;

// 추가 정보
const SubInfoWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`;

const SubInfo = styled.div`
  display: flex;
  align-items: center;
`;

// 사용된 기술 스택
const SkillStackWrap = styled.div`
  display: flex;
  margin-top: 1.5rem;
`;

const SkillsWrap = styled.div`
  display: flex;
  margin-top: 0.4375rem;
`;

const Skills = styled.span`
  display: block;
  padding: 2px 6px;
  font-size: 0.875rem;
  font-family: "RegularFont";
  color: #888888;
  background-color: #f8f8f8;
  border-radius: 5px;
  margin-right: 12px;
`;

// 설명
const DecriptionWrap = styled.div`
  display: flex;
  margin-top: 1.5rem;
`;

const Decription = styled.span`
  display: block;
  width: 38.9375rem;
  font-size: 0.875rem;
  font-family: "RegularFont";
`;

// 디자인
const DesignWrap = styled.div`
  display: flex;
  margin-top: 1.5rem;
`;

const DesignSwiper = styled.div`
  margin-top: 0.75rem;
`;
export default Info;
