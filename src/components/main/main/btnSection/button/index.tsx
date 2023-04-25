import Image from "next/image";

import styled from "styled-components";

type propsType = {
  img: any;
  alt: string;
  description: string;
};

const ServiceButton = ({ img, alt, description }: propsType) => {
  return (
    <Background>
      <Image src={img} alt={alt} style={ImageStyle} />
      <Description>{description}</Description>
    </Background>
  );
};

const Background = styled.div`
  width: 17.1825rem;
  height: 11.25rem;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  box-shadow: 0px 3px 6px #00000029;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Description = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
`;

const ImageStyle = {
  width: "4.5rem",
  height: "4.5rem",
  marginBottom: "0.9375rem",
};

export default ServiceButton;
