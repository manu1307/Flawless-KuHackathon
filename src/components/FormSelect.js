import React from "react";
import { Form } from "react-bootstrap";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { option } from "../atoms/atom-sort";

export default function FormSelect({ data }) {
  const [optionState, setOptionState] = useRecoilState(option);
  const onChange = (e) => {
    console.log(data.label, e.target.value);
    let new_option = { ...optionState };
    new_option[data.label] = e.target.value;
    setOptionState(new_option);
  };
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
      onChange={onChange}
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
