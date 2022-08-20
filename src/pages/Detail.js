import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import TopPart from "../components/TopPart";

export default function Detail() {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <TopPart />
      <Container style={{ display: "flex" }}>
        <LeftImg>
          <img src="https://www.gbgs.go.kr/design/special/img/life/life_tennis.gif" />
        </LeftImg>
        <RightContainer>
          <h1>제목</h1>
          <h5>부가정보 1</h5>
          <h5>부가정보 2</h5>
          <h5>부가정보 3</h5>
          <p>
            설명 : MZ세대가 예약제 스포츠를 요즘 많이 하는 이유나 MZ세대가
            예약제 스포츠를 하면서 두드러지는 특징들같은걸 찾으면 그냥
            예약서비스에서 좀더 차별점을 둘 수 있을거같음!! - 내생각..
          </p>
          <Btn>예약하기</Btn>
        </RightContainer>
      </Container>
    </>
  );
}
const LeftImg = styled.div``;
const RightContainer = styled.div`
  margin-left: 15px;
  position: relative;
`;
const Btn = styled.div`
  border-radius: 10px;
  width: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: tomato;
  color: white;
  position: absolute;
  right: 0;
  bottom: 0;
`;
