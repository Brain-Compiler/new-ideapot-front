import styled from "styled-components";

interface PropsType {
  state: number;
  categoryDispatch: React.Dispatch<{ type: string }>;
}

const Category = ({ state, categoryDispatch }: PropsType) => {
  return (
    <Background>
      {/* 전체 보기 버튼 */}
      <Button
        color={state === 0 ? "#9776FF" : "#9E9EA7"}
        backgroundColor={state === 0 ? "#9776FF4D" : "#F5F5F5"}
        onClick={() => categoryDispatch({ type: "CATEGORY_ALL" })}
      >
        전체 보기
      </Button>
      {/* 개인 프로젝트 버튼 */}
      <Button
        color={state === 1 ? "#9776FF" : "#9E9EA7"}
        backgroundColor={state === 1 ? "#9776FF4D" : "#F5F5F5"}
        onClick={() => categoryDispatch({ type: "CATEGORY_SOLO" })}
      >
        개인 프로젝트
      </Button>
      {/* 팀 프로젝트 버튼 */}
      <Button
        color={state === 2 ? "#9776FF" : "#9E9EA7"}
        backgroundColor={state === 2 ? "#9776FF4D" : "#F5F5F5"}
        onClick={() => categoryDispatch({ type: "CATEGORY_TEAM" })}
      >
        팀 프로젝트
      </Button>
      {/* 대회 수상작 버튼 */}
      <Button
        color={state === 3 ? "#9776FF" : "#9E9EA7"}
        backgroundColor={state === 3 ? "#9776FF4D" : "#F5F5F5"}
        onClick={() => categoryDispatch({ type: "CATEGORY_AWARD" })}
      >
        대회 수상작
      </Button>
    </Background>
  );
};

const Background = styled.div`
  width: 26rem;
  display: flex;
  justify-content: space-between;
  margin-top: 0.625rem;
`;

const Button = styled.button<{ backgroundColor: string }>`
  padding: 0.5rem 0.875rem;
  border: none;
  border-radius: 1.875rem;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  cursor: pointer;
`;

export default Category;
