import React from "react";
import styled from "@emotion/styled";
import artwork_cmlp_remix from "../graphics/artwork_cmlp_remix.jpg";
import ReactAudioPlayer from "react-audio-player";
import teaser from "../audio/teaser.mp3";
import {
  EmailShareButton,
  FacebookShareButton,
  PinterestShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  PinterestIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const Container = styled.div`
  height: 100%;
  width: 325px;
  margin: auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.pri};
`;

const Artwork = styled.img`
  background-image: url(${artwork_cmlp_remix});
  background-size: cover;
  width: 300px;
  height: 300px;
`;

const ReactAudioPlayerStyled = styled(ReactAudioPlayer)`
  margin: 1rem;
  width: 300px;
`;

const Contact = styled.p`
  font-size: 1.5rem;
  text-align: center;
  color: ${(props) => props.theme.colors.pri};
  & > a {
    color: ${(props) => props.theme.colors.sec};
  }
`;
const Credit = styled.aside`
  font-size: 1rem;
  text-align: center;
  color: ${(props) => props.theme.colors.pri};
  & > a {
    color: ${(props) => props.theme.colors.sec};
  }
`;

const ShareButtonsContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  /* height: 400px; */
  width: 100%;
  margin: 0.7rem;
`;

const ShareText = styled.aside`
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.pri};
`;

const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;
export default function Start() {
  const [showConfirmation, setShowConfirmation] = React.useState(false);
  const shareURL = "https://www.choirsband.com/";
  return (
    <Container>
      <Artwork />
      <ReactAudioPlayerStyled
        src={teaser}
        controls
        onPlay={() => setShowConfirmation(true)}
        onPause={() => setShowConfirmation(false)}
      >
        Your browser does not support the
        <code>audio</code> element.
      </ReactAudioPlayerStyled>
      {showConfirmation ? (
        <Title>Playing *strobo effect*</Title>
      ) : (
        <Title>Pausing</Title>
      )}
      <Contact>
        Contact the <a href="mailto:cmlp@posteo.de">artists</a> for remix and
        booking inquiries!{" "}
      </Contact>
      <Credit>
        Original Song by{" "}
        <a target="_blank" rel="noreferrer" href="https://www.choirsband.com/">
          Choirs
        </a>{" "}
        - Watch the official clip{" "}
        <a target="_blank" rel="noreferrer" href="https://youtu.be/0T9C-MYew1M">
          here on YouTube
        </a>
      </Credit>
      <ShareButtonsContainer>
        <ShareText>Share this site:</ShareText>
        <ButtonsWrapper>
          <EmailShareButton url={shareURL}>
            <EmailIcon size={32} round />
          </EmailShareButton>
          <FacebookShareButton url={shareURL}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <PinterestShareButton url={shareURL}>
            <PinterestIcon size={32} round />
          </PinterestShareButton>
          <TelegramShareButton url={shareURL}>
            <TelegramIcon size={32} round />
          </TelegramShareButton>
          <TwitterShareButton url={shareURL}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <WhatsappShareButton url={shareURL}>
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </ButtonsWrapper>
      </ShareButtonsContainer>
    </Container>
  );
}
