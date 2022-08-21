import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import InputContainerBox from "../components/Apply/InputContainerBox";
import TopPart_NoDetail from "../components/Layout/Top/TopPart_NoDetail";
import InfoTabSmall from "../components/Mobile/InfoTabSmall";
import DetailInfoBox from "../components/Reservation/DetailInfo";

export default function ApplyInfo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const width = window.screen.width;

  const onSubmit = () => {
    const validation = true;
    if (validation) {
      setSuccess(true);
      window.scroll(0, 0);
    }
  };
  return width < 500 ? (
    <>
      <InfoTabSmall
        data={[
          { label: "예약자 이름", value: "심하민" },
          { label: "전화번호", value: "010-0000-0000" },
          { label: "동행인 수", value: "3명" },
          { label: "예약 시간", value: "15:00~17:00" },
        ]}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "30px",
        }}
      >
        <BtnMobile onClick={() => navigate("/")}>확인</BtnMobile>
      </div>
    </>
  ) : (
    <Container>
      <TopPart_NoDetail />
      <ReservationInfoContainer>
        <LeftImg>
          <img
            src="http://kimsgolf.kr/wp-content/uploads/2021/03/KakaoTalk_20201211_144850644.jpg"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </LeftImg>
        <div style={{ width: "70%", height: "100%" }}>
          <div className="flex justify-between">
            <div className="w-full h-full">
              <InfoTab className="w-1/2">
                <div style={{ height: "20px" }} />
                <Title>어떤 테니스장</Title>
                <DetailInfoBox
                  data={[
                    { label: "예약자 이름", value: "심하민" },
                    { label: "전화번호", value: "010-0000-0000" },
                    { label: "동행인 수", value: "3명" },
                    { label: "예약 시간", value: "15:00~17:00" },
                  ]}
                />
              </InfoTab>
            </div>
            <div className="flex flex-col justify-between">
              <div
                style={{
                  fontWeight: "700",
                  fontSize: "24px",
                  padding: "15px 35px",
                  background: "black",
                  color: "white",
                }}
                className="text-center"
              >
                예약 정보
              </div>
              <div
                style={{
                  // border: "1px solid blue",
                  width: "100%",
                }}
              >
                <button
                  onClick={() => {
                    window.scroll(0, 0);
                    navigate("/");
                  }}
                  style={{
                    backgroundColor: "#10dd3d",
                    width: "100%",
                    position: "relative",
                    top: "213%",
                  }}
                  className="py-2"
                >
                  확인
                </button>
              </div>
            </div>
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

const ApplyInfoContainerMobile = styled(ApplyInfoContainer)`
  width: 100%;
  margin-top: 30px;
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
const SuccessMobile = styled(Success)`
  font-size: 16px;
  margin-bottom: 30px;
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
const BtnMobile = styled(Btn)`
  font-size: 16px;
  padding: 10px 20px;
`;
const TopDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 70px;
`;
const GoHomeBtn = styled(Btn)`
  padding: 10px 20px;
  font-size: 15px;
  height: max-content;
  margin: 30px;
`;
