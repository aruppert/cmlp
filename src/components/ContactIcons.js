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

export default function FollowSocially() {
  return (
    <>
      <Container>
        <SocialIcon url="mailto:cmlp@posteo.de" />
        <SocialIcon url="https://twitter.com/CmlpRemix" />
        <SocialIcon url="https://www.facebook.com/cmpl.cmpl.1" />
        <SocialIcon url="https://www.instagram.com/cmlp_remix/" />
      </Container>
    </>
  );
}
