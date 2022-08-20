import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Form } from "react-bootstrap";
import styled from "styled-components";

export default function SearchInputContainer() {
  const [search, setSearch] = useState("");
  return (
    <SearchBox>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("search : ", search);
          alert(`${search}을(를) 검색하셨습니다!`);
          setSearch("");
        }}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} color="#10DD3D" />
        <Input
          placeholder="검색어를 입력하세요"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </Form>
    </SearchBox>
  );
}
const SearchBox = styled.div`
  width: 100%;
  border-bottom: 2px solid #10dd3d;
  width: 80%;
  padding: 5px 15px;
`;

const Input = styled.input`
  border: 0;
  outline: none;
  margin-left: 10px;
  ::placeholder {
    color: #10dd3d;
  }
`;
