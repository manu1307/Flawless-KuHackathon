import React from "react";
import { useNavigate } from "react-router-dom";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex" }}>
      <div onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        Logo
      </div>
      <div
        onClick={() => navigate("/new")}
        style={{ cursor: "pointer", marginLeft: "5px" }}
      >
        New
      </div>
      <div
        onClick={() => navigate("/meme")}
        style={{ cursor: "pointer", marginLeft: "5px" }}
      >
        Meme
      </div>
      <div
        onClick={() => navigate("/voice")}
        style={{ cursor: "pointer", marginLeft: "5px" }}
      >
        Voice
      </div>
      <div
        onClick={() => navigate("/search")}
        style={{ cursor: "pointer", marginLeft: "5px" }}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
    </div>
  );
}
