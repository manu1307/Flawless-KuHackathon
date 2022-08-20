import React from "react";
import { Dropdown, Form } from "react-bootstrap";

export default function FormRegion() {
  return (
    <Form.Select
      aria-label="region"
      style={{
        border: "1px solid #10DD3D",
        borderRadius: 0,
        margin: "5px",
        color: "#10DD3D",
        width: "20%",
      }}
    >
      <option>지역</option>
      <option>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </option>
      <option>일반</option>
    </Form.Select>
  );
}
