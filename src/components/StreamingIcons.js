import React from "react";
import styled from "@emotion/styled";
import { SocialIcon } from "react-social-icons";
import mixcloud from "../graphics/Mixcloud_white.svg";
import hearthis from "../graphics/hearthis_white.svg";
import audiomack from "../graphics/audiomack_white.svg";

const Container = styled("div")`
  width: 80%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin: 0.5rem;
`;

const ContainerTop = styled(Container)`
  width: 38%;
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
export default function StreamingIcons() {
  return (
    <>
      <ContainerTop>
        <SocialIconStyled
          fgColor="#F0F0F0"
          url="https://soundcloud.com/cmlp_remix"
          target="_blank"
          rel="noreferrer"
        />{" "}
        <a
          href="https://www.mixcloud.com/CMLP/"
          target="_blank"
          rel="noreferrer"
        >
          <IconSVGs src={mixcloud} alt="Mixcloud Icon" />
        </a>
      </ContainerTop>
      <Container>
        <SocialIconStyled
          fgColor="#F0F0F0"
          url="https://vimeo.com/cmplremix"
          target="_blank"
          rel="noreferrer"
        />
        <SocialIconStyled
          fgColor="#F0F0F0"
          url="https://www.youtube.com/channel/UCxErZpcyKhWdLbfF5Lq9sNQ/?guided_help_flow=5"
          target="_blank"
          rel="noreferrer"
        />
        <a href="https://hearthis.at/cmlp/" target="_blank" rel="noreferrer">
          <IconSVGs src={hearthis} alt="Hearthis Icon" />
        </a>
        <a href="https://audiomack.com/cmlp" target="_blank" rel="noreferrer">
          <IconSVGs src={audiomack} alt="Audiomack Icon" />
        </a>
      </Container>
    </>
  );
}
