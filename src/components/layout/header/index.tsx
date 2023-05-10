import { useReducer, useState } from "react";

import { getCookie } from "@/utils/cookies";
import { reducer } from "src/reducers/modal";

import { useDispatch } from "react-redux";
import {
  MODAL_UPDATE_LOGIN,
  MODAL_UPDATE_REGIST,
} from "src/redux/modal/action";

import styled from "styled-components";

import AccountModal from "@/components/main/accountModal";

const Header = (props: any) => {
  const [job, setJob] = useState<string>("개발자");
  const [name, setName] = useState<string>("김윤현");

  // 모달 온/오프 디스패치
  const [state, modalStateDispatch] = useReducer(reducer, false);

  // 모달 업데이트 디스패치
  const modalUpdateDispatch = useDispatch();

  // 토큰
  const token: string = getCookie("token");

  // 모달 온/오프 함수
  function modalStateAction(action: string) {
    modalStateDispatch({ type: action });
  }

  // 모달 업데이트 함수
  function modalUpdateAction(action: string) {
    if (action === "MODAL_UPDATE_LOGIN")
      modalUpdateDispatch(MODAL_UPDATE_LOGIN);
    else if (action === "MODAL_UPDATE_REGIST") {
      modalUpdateDispatch(MODAL_UPDATE_REGIST);
    }
  }

  return (
    <Background>
      <Container>
        {/* 로고 */}
        <Title>IdeaPot</Title>
        {/* 유저 정보 */}
        {token ? (
          <User>
            <Job>{job}</Job>
            <Name>{name}</Name>님
          </User>
        ) : (
          <User>
            <Regist
              onClick={() => {
                modalStateAction("MODAL_OPEN");
                modalUpdateAction("MODAL_UPDATE_REGIST");
              }}
            >
              회원가입
            </Regist>
            <Login
              onClick={() => {
                modalStateAction("MODAL_OPEN");
                modalUpdateAction("MODAL_UPDATE_LOGIN");
              }}
            >
              로그인
            </Login>
          </User>
        )}
        {state && <AccountModal modalStateDispatch={modalStateDispatch} />}
      </Container>
    </Background>
  );
};

const Background = styled.header`
  width: 100%;
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
  font-family: "BoldFont";
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
  font-family: "BoldFont";
`;

const Regist = styled.button`
  margin-right: 2.5rem;
  font-size: 1.125rem;
  background-color: #fff;
  border: none;
  cursor: pointer;
  font-family: "MediumFont";
`;

const Login = styled.button`
  font-size: 1.125rem;
  background-color: #fff;
  border: none;
  cursor: pointer;
  font-family: "MediumFont";
`;

export default Header;
