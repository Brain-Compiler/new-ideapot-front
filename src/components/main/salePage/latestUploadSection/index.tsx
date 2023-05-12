import InfoBox from "../infoBox";

import styled from "styled-components";

interface ArrayType {
  name: string;
}

const Items: ArrayType[] = [
  {
    name: "짱무일",
  },
  {
    name: "짱무일2",
  },
  {
    name: "짱무일3",
  },
  {
    name: "짱무일4",
  },
];

const LatestUploadSection = () => {
  return (
    <Background>
      <Contents>
        <Title>최신 업로드</Title>
        <BoxContainer>
          {Items.map((item, id) => (
            <InfoBox name={item.name} key={id} />
          ))}
        </BoxContainer>
      </Contents>
    </Background>
  );
};

const Background = styled.section`
  width: 100%;
  height: 20rem;
`;

const Contents = styled.div`
  width: 80rem;
  margin: 0 auto;
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-family: "BoldFont";
`;

const BoxContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 19.4375rem);
  grid-column-gap: 0.75rem;
  grid-row-gap: 2.5rem;
  margin-top: 0.625rem;
`;

export default LatestUploadSection;
