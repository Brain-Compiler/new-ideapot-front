import InfoBox from "../infoBox";

import styled from "styled-components";
import Category from "./category";
import { useReducer } from "react";
import { reducer } from "src/reducers/category";

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

const AllServiceSection = () => {
  const [state, selectCategoryDispatch] = useReducer(reducer, 0);

  return (
    <Background>
      <Contents>
        <Title>판매중인 서비스</Title>
        <button
          onClick={() => selectCategoryDispatch("CATEGORY_SOLO")}
        ></button>
        <Category state={state} categoryDispatch={selectCategoryDispatch} />
        <BoxContainer>
          {Items.map((item, id) => (
            <InfoBox name={item.name} key={id} />
          ))}
          {Items.map((item, id) => (
            <InfoBox name={item.name} key={id} />
          ))}
          {Items.map((item, id) => (
            <InfoBox name={item.name} key={id} />
          ))}
          {Items.map((item, id) => (
            <InfoBox name={item.name} key={id} />
          ))}
        </BoxContainer>
        <MoreButton>더 보기</MoreButton>
      </Contents>
    </Background>
  );
};

const Background = styled.section`
  width: 100%;
  min-height: 30rem;
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
  margin-top: 1.5rem;
  margin-bottom: 6.25rem;
`;

const MoreButton = styled.button`
  display: block;
  width: 15rem;
  height: 3.125rem;
  border: none;
  border-radius: 5px;
  color: #9e9ea7;
  background-color: #f5f5f5;
  margin: 0 auto;
  margin-bottom: 7.6875rem;
  font-family: "MediumFont";
  cursor: pointer;
`;

export default AllServiceSection;
