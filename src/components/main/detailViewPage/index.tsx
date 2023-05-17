import styled from "styled-components";

import Info from "./info";
import Team from "./team";
import BtnContainer from "./btnContainer";
import Awards from "./awards";

const DetailView = () => {
  return (
    <Container>
      <Left>
        <Info />
        <Team />
      </Left>
      <Right>
        <BtnContainer />
        <Awards />
      </Right>
    </Container>
  );
};

const Container = styled.div`
  width: 80rem;
  height: 54.6875rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 47.9375rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Right = styled.div`
  width: 30.5625rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default DetailView;
