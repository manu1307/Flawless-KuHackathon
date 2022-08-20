import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import InputContainerBox from "../components/Apply/InputContainerBox";
import TopPart_NoDetail from "../components/Layout/Top/TopPart_NoDetail";
import DetailInfoBox from "../components/Reservation/DetailInfo";

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
        <Success>
          예약이 완료되었습니다.
          <br />
          오늘도 안전하고 즐거운 테니스 생활 파이팅!
        </Success>
      ) : (
        <TopPart_NoDetail />
      )}
      <ReservationInfoContainer>
        <LeftImg>
          <img
            src="http://kimsgolf.kr/wp-content/uploads/2021/03/KakaoTalk_20201211_144850644.jpg"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </LeftImg>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "70%",
          }}
        >
          <TopDiv>
            <div
              style={{
                fontWeight: "700",
                fontSize: "24px",
                padding: "15px 35px",
                background: "black",
                color: "white",
              }}
            >
              예약 정보
            </div>
          </TopDiv>
          <div style={{ display: "flex" }}>
            <InfoTab>
              <Title>어떤 테니스장</Title>
              <DetailInfoBox
                data={
                  success
                    ? [
                        { label: "예약자 이름", value: "심하민" },
                        { label: "전화번호", value: "010-0000-0000" },
                        { label: "동행인 수", value: "3명" },
                        { label: "예약 시간", value: "15:00~17:00" },
                      ]
                    : [
                        { label: "테니스장 종류", value: "잔디" },
                        { label: "장소", value: "실외" },
                        { label: "금액", value: "시간당 30,000원" },
                        { label: "특이사항", value: "정비로 인해 사용불가" },
                      ]
                }
              />
            </InfoTab>
            {success ? null : (
              <ApplyInfoContainer>
                <InputContainerBox onSubmit={onSubmit} />
              </ApplyInfoContainer>
            )}
            {success && (
              <div
                style={{
                  // border: "1px solid blue",
                  width: "60%",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                <GoHomeBtn onClick={() => navigate("/")}>확인</GoHomeBtn>
              </div>
            )}
          </div>
        </div>
      </ReservationInfoContainer>
    </Container>
  );
}
const ReservationInfoContainer = styled.div`
  display: flex;
  border: 1px solid black;
  margin-top: 50px;
`;
const LeftImg = styled.div`
  width: 30%;
  /* @media screen and (max-width: 500px) {
    width: 50%;
  } */
`;
const InfoTab = styled.div`
  width: 40%;
  padding-left: 36px;
  border-right: 1px solid #f2f2f2;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const ApplyInfoContainer = styled.div`
  width: 50%;
  padding: 0 20px;
  padding-bottom: 20px;
  /* border: 1px solid red; */
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Title = styled.div`
  width: max-content;
  font-size: 32px;
  border-bottom: 2px solid black;
  font-weight: bolder;
  margin-bottom: 30px;
`;
const Success = styled.div`
  text-align: center;
  font-size: 32px;
  font-weight: bolder;
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
const TopDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 70px;
`;
const GoHomeBtn = styled(Btn)`
  padding: 10px 40px;
  font-size: 15px;
  height: max-content;
  margin: 30px;
`;
