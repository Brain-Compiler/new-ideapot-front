import styled from "styled-components";

const Header = () => {
  return (
    <Background>
      <Container>
        {/* 로고 */}
        <Title>IdeaPot</Title>
        {/* 유저 정보 */}
        <User>
          <Job>개발자</Job>
          <Name>김윤현</Name>님
        </User>
      </Container>
    </Background>
  );
};

const Background = styled.header`
  width: 100vw;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 80rem;
  height: 2.625rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.span`
  font-size: 2.1875rem;
  font-weight: 900;
`;

const User = styled.span`
  font-size: 1.125rem;
  color: #000;
`;

const Job = styled.span`
  color: #888;
  margin-right: 0.5rem;
`;

const Name = styled.span`
  font-weight: 900;
`;

export default Header;
