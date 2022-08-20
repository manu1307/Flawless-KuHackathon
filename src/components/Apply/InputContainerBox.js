import React from "react";
import styled from "styled-components";

export default function InputContainerBox({ onSubmit }) {
  return (
    <>
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
      <InputContainer>
        <Label>예약 시간</Label>
        <InputBox placeholder="00시" />
      </InputContainer>
      <BtnContainer>
        <Btn onClick={onSubmit} type="reserv">
          예약하기
        </Btn>
        <CancelBtn>취소</CancelBtn>
      </BtnContainer>
    </>
  );
}
const InputContainer = styled.div`
  display: flex;
  margin-bottom: 5px;
`;
const Label = styled.div`
  width: 30%;
  font-size: 14px;
  font-weight: bolder;
  @media screen and (max-width: 450px) {
    width: 40%;
  }
`;
const InputBox = styled.input`
  outline: none;
  border: 2px solid #10dd3d;
  padding-left: 10px;
  font-size: 14px;
  ::placeholder {
    color: #10dd3d;
  }
`;
const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const Btn = styled.div`
  width: 48%;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #10dd3d;
  color: white;
  cursor: pointer;
  font-size: 14px;
`;
const CancelBtn = styled(Btn)`
  color: white;
  background-color: gray;
`;
