import { useEffect, useState } from "react";
import Image from "next/image";

import { useDispatch } from "react-redux";
import {
  MODAL_UPDATE_LOGIN,
  MODAL_UPDATE_REGIST,
} from "src/redux/modal/action";

import styled from "styled-components";

import google_icon from "@/assets/imgs/accountModal/google_icon.png";

const RegistModal = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [matchPassword, setMatchPassword] = useState(true);

  const modalUpdateDispatch = useDispatch();

  function modalUpdateAction(action: string) {
    if (action === "MODAL_UPDATE_LOGIN")
      modalUpdateDispatch(MODAL_UPDATE_LOGIN);
    else if (action === "MODAL_UPDATE_REGIST") {
      modalUpdateDispatch(MODAL_UPDATE_REGIST);
    }
  }

  useEffect(() => {
    if (password === checkPassword) setMatchPassword(true);
    else setMatchPassword(false);
  }, [password, checkPassword]);

  return (
    <Background>
      <Form>
        {/* 컴포넌트 이름과 링크 */}
        <Top>
          <Title>회원가입</Title>
          <Link onClick={() => modalUpdateAction("MODAL_UPDATE_LOGIN")}>
            로그인
          </Link>
          <Link
            onClick={() => modalUpdateAction("MODAL_UPDATE_CHANGE_PASSWORD")}
          >
            비밀번호 찾기
          </Link>
        </Top>
        {/* 인풋 공간 */}
        <Middle>
          {/* 이름 입력 */}
          <InputArea>
            <InputTitle>이름</InputTitle>
            <InputBox
              placeholder="성함을 입력해주세요."
              onChange={(e) => setName(e.target.value)}
              value={name}
            ></InputBox>
          </InputArea>
          {/* 아이디 입력 */}
          <InputArea>
            <InputTitle>아이디</InputTitle>
            <InputBox
              placeholder="4~12자 아이디를 입력해주세요."
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
          {/* 비밀번호 확인 입력 */}
          <InputArea>
            <PasswordCheckArea>
              <InputTitle>비밀번호 확인</InputTitle>
              <PasswordCheck color={matchPassword ? "#00c400" : "#FF0000"}>
                {matchPassword ? "비밀번호 일치" : "비밀번호 불일치"}
              </PasswordCheck>
            </PasswordCheckArea>
            <InputBox
              type="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={(e) => setCheckPassword(e.target.value)}
              value={checkPassword}
            ></InputBox>
          </InputArea>
        </Middle>
        {/* 회원가입 버튼 */}
        <Bottom>
          <RegistButton>회원가입</RegistButton>
          <GoogleRegistButton>
            <Image
              src={google_icon}
              alt="Google Icon"
              style={{ width: "1.5rem", marginRight: "0.3125rem" }}
            />
            구글 회원가입
          </GoogleRegistButton>
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
  font-weight: 600;
`;

const Link = styled.button`
  margin-left: 0.625rem;
  color: #9e9ea7;
  font-weight: 700;
  line-height: 3rem;
  background-color: #fff;
  border: none;
  cursor: pointer;
`;

const Middle = styled.div``;

const InputArea = styled.div`
  width: 100%;
  margin-top: 0.75rem;
`;

const InputTitle = styled.span`
  font-weight: 600;
`;

const InputBox = styled.input`
  width: calc(100% - 3rem);
  padding: 0.9375rem 1.5rem;
  margin-top: 0.3125rem;
  border: 1px solid #aeaeb5;
  border-radius: 5px;
`;

const PasswordCheckArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const PasswordCheck = styled.span`
  color: ${(props) => props.color};
`;

const Bottom = styled.div`
  margin-top: 2.5rem;
`;

const RegistButton = styled.button`
  width: 100%;
  height: 2.875rem;
  color: #fff;
  background-color: #9776ff;
  border: none;
  font-size: 1rem;
  cursor: pointer;
`;

const GoogleRegistButton = styled.button`
  width: 100%;
  height: 2.875rem;
  border: 1px solid #d8d8d8;
  background-color: #fff;
  margin-top: 0.3125rem;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default RegistModal;
