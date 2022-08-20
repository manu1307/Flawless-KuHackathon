import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import TopPart_NoDetail from "../components/TopPart_NoDetail";

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tab, setTab] = useState("info");
  return (
    <>
      <Container>
        <TopPart_NoDetail />
      </Container>
      <Container
        style={{ display: "flex", border: "2px solid black", padding: 0 }}
      >
        <LeftImg>
          <img
            src="https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/1590136745/B.jpg?180000000"
            style={{ width: "100%" }}
          />
        </LeftImg>
        <RightContainer>
          <Tabs>
            <Tab onClick={() => setTab("info")} selected={tab === "info"}>
              정보
            </Tab>
            <Tab onClick={() => setTab("review")} selected={tab === "review"}>
              리뷰
            </Tab>
          </Tabs>
          <InfoContainer>
            <Title>어떤 테니스장</Title>
            <DetailInfo>
              <EachLine>
                <Label>시간:</Label>
                <Info>00시~00시</Info>
              </EachLine>
              <EachLine>
                <Label>지역:</Label>
                <Info>00시 00구</Info>
              </EachLine>
              <EachLine>
                <Label>인원 제한:</Label>
                <Info>00명까지 수용 가능</Info>
              </EachLine>
              <EachLine>
                <Label>특이사항:</Label>
                <Info>~~</Info>
              </EachLine>
            </DetailInfo>
          </InfoContainer>
          {/* <div style={{ position: "absolute" }}> */}
          <Btn onClick={() => navigate(`/apply/1`)}>예약하기</Btn>
          {/* </div> */}
        </RightContainer>
      </Container>
    </>
  );
}
const LeftImg = styled.div`
  width: 40%;
`;
const RightContainer = styled.div`
  width: 60%;
  position: relative;
  padding-left: 50px;
`;
const Btn = styled.div`
  padding: 20px 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #10dd3d;
  color: white;
  cursor: pointer;
  font-size: 24px;
  position: absolute;
  bottom: 50px;
  right: 50px;
`;
const Tabs = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Tab = styled.div`
  padding: 5px 30px;
  color: ${(props) => (props.selected ? "white" : "black")};
  background-color: ${(props) => (props.selected ? "black" : "white")};
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  cursor: pointer;
`;
const InfoContainer = styled.div`
  margin-top: 32px;
`;
const Title = styled.div`
  width: max-content;
  font-size: 32px;
  border-bottom: 2px solid black;
  font-weight: bolder;
  margin-bottom: 30px;
`;
const DetailInfo = styled.div`
  font-size: 18px;
`;
const EachLine = styled.div`
  display: flex;
`;
const Label = styled.div`
  margin-right: 10px;
`;
const Info = styled.div``;
