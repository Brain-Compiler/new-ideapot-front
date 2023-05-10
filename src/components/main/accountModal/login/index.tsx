import { useState } from "react";
import Image from "next/image";

import { useDispatch } from "react-redux";
import {
  MODAL_UPDATE_REGIST,
  MODAL_UPDATE_PASSWORD_CHANGE,
} from "src/redux/modal/action";

import styled from "styled-components";

import google_icon from "@/assets/imgs/accountModal/google_icon.png";

const LoginModal = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const modalUpdateDispatch = useDispatch();

  function modalUpdateAction(action: string) {
    if (action === "MODAL_UPDATE_REGIST")
      modalUpdateDispatch(MODAL_UPDATE_REGIST);
    else if (action === "MODAL_UPDATE_PASSWORD_CHANGE") {
      modalUpdateDispatch(MODAL_UPDATE_PASSWORD_CHANGE);
    }
  }

  return (
    <Background>
      <Form>
        {/* 컴포넌트 이름과 링크 */}
        <Top>
          <Title>로그인</Title>
          <Link onClick={() => modalUpdateAction("MODAL_UPDATE_REGIST")}>
            회원가입
          </Link>
          <Link
            onClick={() => modalUpdateAction("MODAL_UPDATE_CHANGE_PASSWORD")}
          >
            비밀번호 찾기
          </Link>
        </Top>
        {/* 인풋 공간 */}
        <Middle>
          {/* 아이디 입력 */}
          <InputArea>
            <InputTitle>아이디</InputTitle>
            <InputBox
              placeholder="아이디를 입력해주세요."
              onChange={(e) => setId(e.target.value)}
              value={id}
            ></InputBox>
          </InputArea>
          {/* 비밀번호 입력 */}
          <InputArea>
            <InputTitle>비밀번호</InputTitle>
            <InputBox
              type="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            ></InputBox>
          </InputArea>
        </Middle>
        {/* 로그인 버튼 */}
        <Bottom>
          <LoginButton>로그인</LoginButton>
          <GoogleLoginButton>
            <Image
              src={google_icon}
              alt="Google Icon"
              style={{ width: "1.5rem", marginRight: "0.3125rem" }}
            />
            구글 로그인
          </GoogleLoginButton>
        </Bottom>
      </Form>
    </Background>
  );
};

const Background = styled.div`
  width: 100%;
  height: 100%;
`;

const Form = styled.div`
  width: 100%;
  margin-top: 5rem;
`;

const Top = styled.div`
  display: flex;
  margin-bottom: 0.75rem;
`;

const Title = styled.span`
  font-size: 1.5rem;
  font-family: "BoldFont";
`;

const Link = styled.button`
  margin-left: 0.625rem;
  color: #9e9ea7;
  line-height: 3rem;
  background-color: #fff;
  border: none;
  cursor: pointer;
  font-family: "BoldFont";
`;

const Middle = styled.div``;

const InputArea = styled.div`
  width: 100%;
  margin-top: 0.75rem;
`;

const InputTitle = styled.span`
  font-family: "MediumFont";
`;

const InputBox = styled.input`
  width: calc(100% - 3rem);
  padding: 0.9375rem 1.5rem;
  margin-top: 0.3125rem;
  border: 1px solid #aeaeb5;
  border-radius: 5px;
`;

const Bottom = styled.div`
  margin-top: 2.5rem;
`;

const LoginButton = styled.button`
  width: 100%;
  height: 2.875rem;
  color: #fff;
  background-color: #9776ff;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  font-family: "MediumFont";
`;

const GoogleLoginButton = styled.button`
  width: 100%;
  height: 2.875rem;
  border: 1px solid #d8d8d8;
  background-color: #fff;
  margin-top: 0.3125rem;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: "MediumFont";
`;

export default LoginModal;
