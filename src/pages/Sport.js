import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import InfoBanner from "../components/Banner/InfoBanner";
import TopPart from "../components/Layout/Top/TopPart";
import { useRecoilValue, useRecoilState } from "recoil";
import { placeFilteredState, placeListState } from "../atoms/atom-filter";

export default function Sport() {
  const URL = window.location.href;
  const [type, setType] = useState("");
  useEffect(() => {
    const sportsType = URL.split("?type=")[1];
    setType(sportsType);
  }, [URL]);

  const [placeList, setPlaceList] = useRecoilState(placeListState);

  // useEffect(() => {
  //   const BASE_URL =
  //     "https://cors-anywhere.herokuapp.com/http://43.200.61.214:8090";
  //   const fetchData = async () => {
  //     const response = await fetch(`${BASE_URL}/places`, {
  //       method: "GET",
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //     });

  //     const data = await response.json();
  //     console.log(data);
  //     setPlaceList(data);
  //   };
  //   fetchData();
  // }, [setPlaceList]);
  const filteredList = useRecoilValue(placeFilteredState);

  console.log(filteredList);

  return (
    <Container>
      <TopPart sportsType={type} />
      <BannerContainer>
        <Row>
          <InfoBanner />
          <InfoBanner />
          <InfoBanner />
          <InfoBanner />
          <InfoBanner />
          <InfoBanner />
          <InfoBanner />
          <InfoBanner />
          <InfoBanner />
          <InfoBanner />
          <InfoBanner />
          <InfoBanner />
          <InfoBanner />
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
