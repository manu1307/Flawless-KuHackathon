import React from "react";
import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function CircleContainer() {
  const navigate = useNavigate();
  return (
    <AllCircleContainer fulid>
      <CircleBox onClick={() => navigate("/")}>
        <Circle>
          <img style={{ height: "60%" }} src="/img/logo.png" />
        </Circle>
        <Text>어디구장</Text>
      </CircleBox>
      <CircleBox
        onClick={() => {
          navigate("/sport?type=golf");
          window.location.reload();
        }}
      >
        <Circle>
          <img style={{ width: "40%" }} src="/img/golf.png" />
        </Circle>
        <Text>골프</Text>
      </CircleBox>
      <CircleBox
        onClick={() => {
          navigate("/sport?type=tennis");
          window.location.reload();
        }}
      >
        <Circle>
          <img style={{ width: "50%" }} src="/img/tennis.png" />
        </Circle>
        <Text>테니스</Text>
      </CircleBox>
    </AllCircleContainer>
  );
}
const AllCircleContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 998px) {
    /* justify-content: space-around; */
    justify-content: center;
  }
`;
const CircleBox = styled.div`
  /* width: 33%; */
  margin-left: 20px;
`;
const Circle = styled.div`
  width: 80px;
  height: 80px;
  background-color: #f2f2f2;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.div`
  text-align: center;
  margin-top: 10px;
`;
