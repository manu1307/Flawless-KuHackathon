import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

export default function Apply() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const onSubmit = () => {
    const validation = true;
    if (validation) {
      setSuccess(true);
    }
  };
  return (
    <Container>
      {success ? (
        <>
          <Success>
            예약이 완료되었습니다!
            <br />
            즐거운 운동 어쩌고~ 기분좋은 말
          </Success>
          <h1 style={{ marginTop: "50px" }}>예약 정보</h1>
          <ReservationInfoContainer>
            <LeftImg>
              <img src="https://img.hankyung.com/photo/202107/02.26859161.1-1200x.jpg" />
            </LeftImg>
            <InfoTab>
              <Title>어떤 테니스장</Title>
              <DetailInfo>
                <EachLine>
                  <InfoLabel>시간:</InfoLabel>
                  <Info>00시~00시</Info>
                </EachLine>
                <EachLine>
                  <InfoLabel>지역:</InfoLabel>
                  <Info>00시 00구</Info>
                </EachLine>
                <EachLine>
                  <InfoLabel>인원 제한:</InfoLabel>
                  <Info>00명까지 수용 가능</Info>
                </EachLine>
                <EachLine>
                  <InfoLabel>특이사항:</InfoLabel>
                  <Info>~~</Info>
                </EachLine>
              </DetailInfo>
            </InfoTab>
          </ReservationInfoContainer>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "100px",
            }}
          >
            <Btn onClick={() => navigate("/")}>홈으로</Btn>
          </div>
        </>
      ) : (
        <>
          <h1>예약 정보</h1>
          <ReservationInfoContainer>
            <LeftImg>
              <img src="https://img.hankyung.com/photo/202107/02.26859161.1-1200x.jpg" />
            </LeftImg>
            <InfoTab>
              <Title>어떤 테니스장</Title>
              <DetailInfo>
                <EachLine>
                  <InfoLabel>시간:</InfoLabel>
                  <Info>00시~00시</Info>
                </EachLine>
                <EachLine>
                  <InfoLabel>지역:</InfoLabel>
                  <Info>00시 00구</Info>
                </EachLine>
                <EachLine>
                  <InfoLabel>인원 제한:</InfoLabel>
                  <Info>00명까지 수용 가능</Info>
                </EachLine>
                <EachLine>
                  <InfoLabel>특이사항:</InfoLabel>
                  <Info>~~</Info>
                </EachLine>
              </DetailInfo>
            </InfoTab>
          </ReservationInfoContainer>
          <ApplyInfoContainer>
            <InputContainer>
              <Label>예약자 이름</Label>
              <InputBox placeholder="이름" />
            </InputContainer>
            <InputContainer>
              <Label>전화번호</Label>
              <InputBox placeholder="010-XXXX-XXXX" />
            </InputContainer>
            <InputContainer>
              <Label>동행 인원</Label>
              <InputBox placeholder="00명" />
            </InputContainer>
            <BtnContainer>
              <Btn onClick={onSubmit} type="reserv">
                예약하기
              </Btn>
              <CancelBtn>취소</CancelBtn>
            </BtnContainer>
          </ApplyInfoContainer>
        </>
      )}
    </Container>
  );
}
const ReservationInfoContainer = styled.div`
  display: flex;
  border: 1px solid black;
  margin-top: 50px;
`;
const LeftImg = styled.div`
  width: 50%;
  @media screen and (max-width: 500px) {
    width: 50%;
  }
`;
const InfoTab = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-start;
  padding-left: 36px;
  padding-top: 50px;
  @media screen and (max-width: 450px) {
    width: 50%;
  }
`;
const ApplyInfoContainer = styled.div`
  margin-top: 60px;
`;
const InputContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
`;
const Label = styled.div`
  width: 20%;
  font-size: 24px;
  font-weight: bolder;
  @media screen and (max-width: 450px) {
    width: 40%;
  }
`;
const InputBox = styled.input`
  outline: none;
  border: 2px solid #10dd3d;
  width: 40%;
  padding-left: 10px;
  ::placeholder {
    color: #10dd3d;
  }
`;
const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
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
  margin-left: 50px;
  font-weight: bold;
`;
const EachLine = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
const InfoLabel = styled.div`
  margin-right: 10px;
`;
const Info = styled.div``;
const CancelBtn = styled(Btn)`
  margin-left: 10px;
  background-color: #f2f2f2;
  color: #959595;
`;
const Success = styled.div`
  text-align: center;
  font-size: 32px;
  font-weight: bolder;
`;
