import React from "react";
import styled from "@emotion/styled";
import { SocialIcon } from "react-social-icons";
import tiktok from "../graphics/tiktok_white.svg";

const Container = styled("div")`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin: 0.5rem;
`;
const SocialIconStyled = styled(SocialIcon)`
  border-radius: 50%;
  box-shadow: 0px 0px 15px -3px rgba(240, 240, 240, 0.83);
`;

const IconSVGs = styled("img")`
  height: 50px;
  border-radius: 50%;
  box-shadow: 0px 0px 15px -3px rgba(240, 240, 240, 0.83);
`;

export default function FollowSocially() {
  return (
    <>
      <Container>
        <SocialIconStyled
          fgColor="#F0F0F0"
          url="https://www.facebook.com/cmpl.cmpl.1"
          target="_blank"
          rel="noreferrer"
        />
        <SocialIconStyled
          fgColor="#F0F0F0"
          url="https://www.instagram.com/cmlp_remix/"
          target="_blank"
          rel="noreferrer"
        />
        <SocialIconStyled fgColor="#F0F0F0" url="mailto:cmlp@posteo.de" />
        <SocialIconStyled
          fgColor="#F0F0F0"
          url="https://twitter.com/CmlpRemix"
          target="_blank"
          rel="noreferrer"
        />
        <a
          href="https://www.tiktok.com/@user078743126?lang=de"
          target="_blank"
          rel="noreferrer"
        >
          <IconSVGs src={tiktok} alt="TikTok Icon" />
        </a>
      </Container>
    </>
  );
}
