import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { getPlaces } from "../api";
import { option } from "../atoms/atom-sort";
import InfoBanner from "../components/Banner/InfoBanner";
import TopPart from "../components/Layout/Top/TopPart";

export default function Sport() {
  const URL = window.location.href;
  const [type, setType] = useState("");
  const [optionState, setOptionState] = useRecoilState(option);
  const [bannerData, setBannerData] = useState([
    {
      placeIdx: 4,
      placeName: "안산 골프장",
      type: "golf",
      region: "서울",
      position: "실내",
      price: 30000,
      tennisType: null,
      time: "16:00~21:00",
      rate: 5,
      etc: "사용 불가",
    },
    {
      placeIdx: 5,
      placeName: "문래역 테니스장",
      type: "tennis",
      region: "서울",
      position: "실내",
      price: 30000,
      tennisType: "하드",
      time: "16:00~21:00",
      rate: 4,
      etc: "사용 불가",
    },
    {
      placeIdx: 6,
      placeName: "동대문 골프장",
      type: "golf",
      region: "서울",
      position: "실내",
      price: 30000,
      tennisType: null,
      time: "16:00~21:00",
      rate: 1,
      etc: "사용 불가",
    },
    {
      placeIdx: 7,
      placeName: "영등포역 테니스장",
      type: "tennis",
      region: "경기",
      position: "실외",
      price: 30000,
      tennisType: "클레이",
      time: "16:00~21:00",
      rate: 3,
      etc: "사용 불가",
    },
    {
      placeIdx: 8,
      placeName: "안산 골프장",
      type: "golf",
      region: "서울",
      position: "실내",
      price: 30000,
      tennisType: null,
      time: "16:00~21:00",
      rate: 5,
      etc: "사용 불가",
    },
    {
      placeIdx: 9,
      placeName: "문래역 테니스장",
      type: "tennis",
      region: "서울",
      position: "실내",
      price: 30000,
      tennisType: "하드",
      time: "16:00~21:00",
      rate: 4,
      etc: "사용 불가",
    },
    {
      placeIdx: 10,
      placeName: "동대문 골프장",
      type: "golf",
      region: "서울",
      position: "실내",
      price: 30000,
      tennisType: null,
      time: "16:00~21:00",
      rate: 1,
      etc: "사용 불가",
    },
    {
      placeIdx: 11,
      placeName: "영등포역 테니스장",
      type: "tennis",
      region: "경기",
      position: "실외",
      price: 30000,
      tennisType: "클레이",
      time: "16:00~21:00",
      rate: 3,
      etc: "사용 불가",
    },
  ]);
  // useEffect(() => {
  //   getPlaces().then((res) => {
  //     if (res.isSuccess) {
  //       setBannerData(res.result.placeResList);
  //     }
  //   });
  // }, []);
  useEffect(() => {
    console.log("option changed!");
    console.log(optionState);
  }, [optionState]);
  useEffect(() => {
    const sprotsType = URL.split("?type=")[1];
    setType(sprotsType);
  }, [URL]);
  return (
    <Container>
      <TopPart sprotsType={type} />
      <BannerContainer>
        <Row>
          {bannerData.map((each, idx) => (
            <InfoBanner data={each} key={idx} />
          ))}
        </Row>
      </BannerContainer>
    </Container>
  );
}
const CategoryContainer = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: center;
`;

const CategoryBox = styled.div`
  width: 75px;
  height: 75px;
  border: 1px solid black;
  margin: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BannerContainer = styled.div``;
