import styled from "styled-components";

const VideoSection = () => {
  return (
    <Background>
      <Contents>
        <Title>
          Service <BoldTitle>Farm</BoldTitle>
        </Title>
        <SubTitle>낭비되는 서비스들이 세상을 발전시킬 수 있도록</SubTitle>
        <VideoWrap></VideoWrap>
      </Contents>
    </Background>
  );
};

const Background = styled.section`
  width: 100%;
  height: 75.625rem;
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

const SubTitle = styled.span`
  font-size: 1.875rem;
  font-family: "BoldFont";
  margin-top: 0.75rem;
`;

const VideoWrap = styled.div`
  width: 80rem;
  height: 52.75rem;
  background: url("assets/imgs/main/videoSection/macBook.png");
  background-size: cover;
`;

export default VideoSection;
