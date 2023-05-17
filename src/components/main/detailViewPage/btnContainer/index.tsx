import styled from "styled-components";

const BtnContainer = () => {
  return (
    <Container>
      <BuyButton>구매하기</BuyButton>
      <MoreInfoButton>추가 정보 요청</MoreInfoButton>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 6.9375rem;
`;

const BuyButton = styled.button`
  width: 100%;
  height: 3rem;
  color: #9776ff;
  font-family: "MediumFont";
  box-shadow: 0px 3px 6px #00000029;
  border: none;
  border-radius: 5px;
  background-color: #ebe5ff;
`;

const MoreInfoButton = styled.button`
  width: 100%;
  height: 3rem;
  color: #888;
  font-family: "MediumFont";
  box-shadow: 0px 3px 6px #00000029;
  border: none;
  border-radius: 5px;
  background-color: #fff;
  margin-top: 0.9375rem;
`;

export default BtnContainer;
