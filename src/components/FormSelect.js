import React from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";

export default function FormSelect({ data }) {
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
    >
      <DefaultOption>{data.labelKor}</DefaultOption>
      {data.option.map((option) => (
        <option>{option}</option>
      ))}
    </Form.Select>
  );
}
const DefaultOption = styled.option`
  /* font-size: 10px; */
`;
