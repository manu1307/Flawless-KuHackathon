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
          <h1>예약 성공했습니다..!</h1>
          <div onClick={() => navigate("/")}>🔙홈으로 돌아가기</div>
        </>
      ) : (
        <>
          <ReservationInfoContainer>
            <LeftImg>
              <img src="https://img.hankyung.com/photo/202107/02.26859161.1-1200x.jpg" />
            </LeftImg>
            <InfoTab>
              <h1>이름</h1>
              <p>관련 정보...</p>
            </InfoTab>
          </ReservationInfoContainer>
          <ApplyInfoContainer>
            <h1>예약 정보 입력</h1>
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
              <Btn onClick={onSubmit}>예약하기</Btn>
              <Btn>취소</Btn>
            </BtnContainer>
          </ApplyInfoContainer>
        </>
      )}
    </Container>
  );
}
const ReservationInfoContainer = styled.div`
  display: flex;
`;
const LeftImg = styled.div`
  width: 40%;
  border: 1px solid black;
  @media screen and (max-width: 500px) {
    width: 50%;
  }
`;
const InfoTab = styled.div`
  border: 1px solid black;
  width: 60%;
  margin-left: 15px;
  @media screen and (max-width: 450px) {
    width: 50%;
  }
`;
const ApplyInfoContainer = styled.div`
  margin-top: 10px;
`;
const InputContainer = styled.div`
  display: flex;
`;
const Label = styled.div`
  width: 20%;
  @media screen and (max-width: 450px) {
    width: 40%;
  }
`;
const InputBox = styled.input`
  outline: none;
`;
const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Btn = styled.div`
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  margin-left: 10px;
`;
