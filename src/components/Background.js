import React from "react";
import styled from "@emotion/styled";
import cover_west_end_bg from "../graphics/cover_west_end_bg.jpg";

const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  z-index: -1;
  display: block;
  height: 100%;
  background-image: url(${cover_west_end_bg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

export default function Background() {
  return <Container></Container>;
}
