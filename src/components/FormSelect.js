import React from "react";
import { Form } from "react-bootstrap";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import {
  placeNameState,
  placePriceState,
  placePositionState,
  placeTennisTypeState,
  placePriceStateChanged,
  placePositionStateChanged,
  placeTennisTypeStateChanged,
  placeNameStateChanged,
} from "../atoms/atom-filter";

export default function FormSelect({ data }) {
  const [placePosition, setPlacePosition] = useRecoilState(placePositionState);
  const [placePrice, setPlacePrice] = useRecoilState(placePriceState);
  const [placeName, setPlaceName] = useRecoilState(placeNameState);
  const [placeTennisType, setPlaceTennisType] =
    useRecoilState(placeTennisTypeState);

  const [placePriceChanged, setPlacePriceChanged] = useRecoilState(
    placePriceStateChanged
  );
  const [placeNameChanged, setPlaceNameChanged] = useRecoilState(
    placeNameStateChanged
  );
  const [placePositionChanged, setPlacePositionChanged] = useRecoilState(
    placePositionStateChanged
  );
  const [placeTennisTypeChanged, setPlaceTennisTypeChanged] = useRecoilState(
    placeTennisTypeStateChanged
  );

  return (
    <Form.Select
      aria-label={data.label}
      style={{
        border: "1px solid #10DD3D",
        borderRadius: 0,
        margin: "5px",
        color: "#10DD3D",
        width: data.width,
      }}
      onChange={(event) => {
        if (data.label === "position") {
          setPlacePosition(() => {
            return event.target.value;
          });
          setPlacePositionChanged(true);
        }
        if (data.label === "price") {
          setPlacePrice(() => {
            return event.target.value;
          });
          setPlacePriceChanged(true);
        }
        if (data.label === "region") {
          setPlaceName(() => {
            return event.target.value;
          });
          setPlaceNameChanged(true);
        }
      }}
    >
      <DefaultOption>{data.labelKor}</DefaultOption>
      {data.option.map((option) => (
        <option value={option.value}>{option}</option>
      ))}
    </Form.Select>
  );
}
const DefaultOption = styled.option`
  /* font-size: 10px; */
`;
