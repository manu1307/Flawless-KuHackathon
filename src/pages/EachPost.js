import React from "react";
import { useParams } from "react-router-dom";

export default function EachPost() {
  const { postId } = useParams();
  return <div>post id : {postId}</div>;
}
