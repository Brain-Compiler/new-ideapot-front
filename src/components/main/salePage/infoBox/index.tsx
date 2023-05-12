import styled from "styled-components";

interface PropsType {
  name: string;
}

const InfoBox = ({ name }: PropsType) => {
  return (
    <Container>
      <ImgBox></ImgBox>
      <Info>
        <User>
          <Icon></Icon>
          <Name>{name}</Name>
        </User>
        <Date>2022.01.10</Date>
      </Info>
    </Container>
  );
};

const Container = styled.div`
  width: 19.4375rem;
  height: 12.4375rem;
`;

const ImgBox = styled.div`
  width: 100%;
  height: 10.9375rem;
  background-color: #f5f5f5;
`;

const Info = styled.div`
  width: 100%;
  margin-top: 0.3125rem;
  display: flex;
  justify-content: space-between;
`;

const User = styled.div`
  display: flex;
`;

const Icon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: #f1f1f5;
  margin-right: 0.3125rem;
`;

const Name = styled.span`
  font-size: 0.875rem;
  color: #191919;
`;

const Date = styled.span`
  color: #9e9ea7;
  font-size: 0.875rem;
`;

export default InfoBox;
