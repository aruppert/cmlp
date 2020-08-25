import React from "react";
import styled from "@emotion/styled";
import artwork_cmlp_remix from "../graphics/artwork_cmlp_remix.jpg";

const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  z-index: -1;
  display: block;
  height: 100%;
  background-image: url(${artwork_cmlp_remix});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  filter: blur(30px);
  -webkit-filter: blur(30px);
  -moz-filter: blur(30px);
  -o-filter: blur(30px);
  -ms-filter: blur(30px);
`;

export default function Background() {
  return <Container></Container>;
}
