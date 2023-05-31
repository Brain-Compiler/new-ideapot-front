import styled from "styled-components";

const ServiceSection = () => {
  return (
    <Background>
      <Contents></Contents>
    </Background>
  );
};

const Background = styled.section`
  width: 100%;
  height: 38.9375rem;
  margin-top: 2rem;
`;

const Contents = styled.div`
  width: 80rem;
  display: flex;
  justify-content: center;
`;

export default ServiceSection;
