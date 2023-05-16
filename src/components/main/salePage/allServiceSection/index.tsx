import { useReducer, useState, useRef, useEffect } from "react";

import { reducer } from "src/reducers/category";

import InfoBox from "../infoBox";
import Category from "./category";

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
  const moreRef = useRef<any>(null);

  const [loadPost, setLoadPost] = useState<number>(20);
  const [state, selectCategoryDispatch] = useReducer(reducer, 0);

  // 버튼 클릭시 로드되는 포스트개수 증가
  function moreOnClickListener() {
    setLoadPost(loadPost + 8);
  }

  // 로드된 포스트개수 초기화
  function resetLoadPost() {
    setLoadPost(20);
  }

  // more버튼 글릭시 포스트양을 확인해 존재하는값 보다 많을시 버튼 없애기
  useEffect(() => {
    if (Items.length <= loadPost) {
      moreRef.current.style = "display: none";
    } else {
      moreRef.current.style = "display: block";
    }
  }, [loadPost]);

  // 카테고리 변화시 작동
  useEffect(() => {
    resetLoadPost();
  }, [state]);

  return (
    <Background>
      <Contents>
        <Title>판매중인 서비스</Title>
        <Category state={state} categoryDispatch={selectCategoryDispatch} />
        <BoxContainer>
          {Items.map((item, id) => {
            if (id < loadPost) return <InfoBox name={item.name} key={id} />;
          })}
        </BoxContainer>
        <MoreButton ref={moreRef} onClick={moreOnClickListener}>
          더 보기
        </MoreButton>
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
