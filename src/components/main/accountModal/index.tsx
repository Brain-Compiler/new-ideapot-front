import { useEffect, useRef } from "react";

import { useSelector } from "react-redux";

import styled from "styled-components";
import LoginModal from "./login";
import RegistModal from "./regist";

const AccountModal = ({ modalStateDispatch }: any) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const page: number = useSelector(
    (state: any) => state.modalUpdateReducer.page
  );

  // 모달 외부영역 클릭시 모달 오프
  useEffect(() => {
    const handler = (e: any) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        modalStateDispatch({ type: "MODAL_CLOSE" });
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <Background>
      <Section ref={modalRef}>
        <ImgSection></ImgSection>
        <Form>
          {page === 0 && <LoginModal />}
          {page === 1 && <RegistModal />}
          {page === 2 && <div>2</div>}
        </Form>
      </Section>
    </Background>
  );
};

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #00000066;
  z-index: 99999;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Section = styled.div`
  width: 60.9375rem;
  height: 43.75rem;
  display: flex;
  background-color: #fff;
`;

const ImgSection = styled.div`
  width: 30.9375rem;
  height: 100%;
  background-color: #f5f5f5;
`;

const Form = styled.div`
  width: 25rem;
  height: 100%;
  padding: 0 2.5rem;
`;

export default AccountModal;
