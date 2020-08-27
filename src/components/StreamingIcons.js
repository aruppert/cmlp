import React from "react";
import styled from "@emotion/styled";
import { SocialIcon } from "react-social-icons";

const Container = styled("div")`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin: 0.5rem;
`;

export default function StreamingIcons() {
  return (
    <>
      <Container>
        <SocialIcon url="https://soundcloud.com/cmlp_remix" />
        <SocialIcon url="https://www.youtube.com/channel/UCxErZpcyKhWdLbfF5Lq9sNQ/?guided_help_flow=5" />
        <SocialIcon url="https://vimeo.com/cmplremix" />
      </Container>
    </>
  );
}
