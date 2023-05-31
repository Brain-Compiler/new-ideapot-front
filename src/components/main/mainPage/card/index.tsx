import Image from "next/image";

import styled from "styled-components";

import First from "@/assets/imgs/main/card/1.png";
import Second from "@/assets/imgs/main/card/2.png";
import Third from "@/assets/imgs/main/card/3.png";

interface props {
  category: string;
  title: string;
  img?: number;
}

const Card = ({ category, title, img }: props) => {
  let imgSrc: any;

  if (img === 1) imgSrc = First;
  else if (img === 2) imgSrc = Second;
  else if (img === 3) imgSrc = Third;

  return (
    <Background>
      <Category>{category}</Category>
      <Title>{title}</Title>
      {img ? (
        <ImgWrap>
          <Image
            src={imgSrc}
            alt="img"
            style={{
              width: "18.5rem",
              height: "13.84rem",
              borderRadius: "4px",
            }}
          />
        </ImgWrap>
      ) : (
        <></>
      )}
    </Background>
  );
};

const Background = styled.section`
  width: calc(22.5rem - 2px);
  padding: 2.5rem 0 2.5rem 2.5rem;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  background-color: #fff;

  :hover {
    background: #ebe5ff;
    color: #9776ff;
  }
`;

const Category = styled.p`
  font-size: 1.25rem;
  font-family: "MediumFont";
`;

const Title = styled.p`
  font-size: 1.5rem;
  margin-top: 0.75rem;
  font-family: "MediumFont";
`;

const ImgWrap = styled.div`
  width: 20rem;
  height: 15.4375rem;
  margin-top: 1.5rem;
  background: url("/assets/imgs/main/card/ipad.png");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Card;
