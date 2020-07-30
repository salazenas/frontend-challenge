import React from "react";
import Loading from "../../components/loading/Loading";

export default function Container(props) {
  return props.isLoading ? <Loading /> : props.children;
}
