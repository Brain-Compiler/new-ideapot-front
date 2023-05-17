import DetailView from "@/components/main/detailViewPage";

import styled from "styled-components";

const DetailViewPage = () => {
  return (
    <Main>
      <DetailView />
    </Main>
  );
};

const Main = styled.main`
  width: 100%;
  background-color: #fffbfb;
  padding: 4.8125rem 0 4.0625rem 0;
`;

export default DetailViewPage;
