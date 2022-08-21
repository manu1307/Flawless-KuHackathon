import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { getPlace } from "../api";
import { selected } from "../atoms/atom-sort";
import TopPart_NoDetail from "../components/Layout/Top/TopPart_NoDetail";
import InfoTabSmall from "../components/Mobile/InfoTabSmall";
import DetailInfoBox from "../components/Reservation/DetailInfo";

export default function Reservation() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [recoilData, setRecoilData] = useRecoilState(selected);
  useEffect(() => {
    if (id) {
      getPlace(id).then((res) => {
        if (res.isSuccess) {
          setData(res.result);
          setRecoilData(res.result);
        }
      });
    }
  }, [id]);
  const navigate = useNavigate();
  const [tab, setTab] = useState("info");
  const width = window.screen.width;
  return width > 500 ? (
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
              {data.type === "golf" ? "골프장" : "테니스장"} 정보
            </Tab>
            <Tab onClick={() => setTab("review")} selected={tab === "review"}>
              리뷰
            </Tab>
          </Tabs>
          <InfoContainer>
            <div>
              <Title>{data.placeName}</Title>
              <DetailInfoBox
                data={[
                  {
                    label: "테니스장 종류",
                    value: data.tennis_type
                      ? data.tennis_type
                      : "해당사항 없음",
                  },
                  { label: "장소", value: data.position ? data.position : "" },
                  {
                    label: "금액",
                    value: `시간당 ${
                      data.price && data.price.toLocaleString("ko")
                    }원`,
                  },
                  { label: "특이사항", value: data.etc ? data.etc : "" },
                ]}
              />
            </div>
            <div style={{ display: "flex", alignItems: "flex-end" }}>
              <Btn
                onClick={() => {
                  window.scroll(0, 0);
                  navigate(`/apply/${data.placeIdx ? data.placeIdx : 5}`);
                }}
              >
                예약하기
              </Btn>
            </div>
          </InfoContainer>
        </RightContainer>
      </Container>
    </>
  ) : (
    <>
      <InfoTabSmall
        data={[
          {
            label: "테니스장 종류",
            value: recoilData.tennis_type
              ? recoilData.tennis_type
              : "해당사항 없음",
          },
          {
            label: "장소",
            value: recoilData.position ? recoilData.position : "",
          },
          {
            label: "금액",
            value: `시간당 ${
              recoilData.price && recoilData.price.toLocaleString("ko")
            }원`,
          },
          {
            label: "특이사항",
            value: recoilData.etc ? recoilData.etc : "",
          },
        ]}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "30px",
        }}
      >
        <BtnMobile onClick={() => navigate("/apply/1")}>예약하기</BtnMobile>
      </div>
    </>
  );
}
const LeftImg = styled.div`
  width: 40%;
`;
const RightContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
const Tabs = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Tab = styled.div`
  padding: 5px 45px;
  color: ${(props) => (props.selected ? "white" : "black")};
  background-color: ${(props) => (props.selected ? "black" : "white")};
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  cursor: pointer;
  font-weight: 700;
  font-size: 24px;
`;
const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
  padding-bottom: 30px;
`;
const Title = styled.div`
  width: max-content;
  font-size: 40px;
  font-weight: 700;
  border-bottom: 2px solid black;
  font-weight: bolder;
  margin-bottom: 30px;
`;
