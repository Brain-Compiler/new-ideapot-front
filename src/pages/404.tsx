import { NextPage } from "next";

import styled from "styled-components";

const Custom404: NextPage = () => {
  return (
    <Container>
      <h1>404 - 페이지를 찾을수 없습니다.</h1>
    </Container>
  );
};

const Container = styled.div`
  min-height: 45rem;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Custom404;
