import React from "react";
import styled from "@emotion/styled";
import cover_west_end_rosa from "../graphics/cover_west_end_rosa_1024.jpg";
import ReactAudioPlayer from "react-audio-player";
import teaser from "../audio/teaser2.mp3";
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
import patreonText from "../graphics/patreon-text.png";
import bandcampLogo from "../graphics/bandcamp-logo.png";
import ContactIcons from "../components/ContactIcons";
import StreamingIcons from "../components/StreamingIcons";

const Container = styled.div`
  height: 100%;
  width: 325px;
  margin: auto;
  display: flex;
  flex-flow: column nowrap;
  @media only screen and (min-height: 1000px) {
    justify-content: center;
  }
  align-items: center;
`;

const Artwork = styled.img`
  border: none;
  background-size: cover;
  width: 100%;
  margin: 1.5rem 0 0;
`;

const ReactAudioPlayerStyled = styled(ReactAudioPlayer)`
  margin: 2.4rem;
  width: 325px;
`;

const Text = styled.p`
  text-transform: uppercase;
  font-weight: 200;
  font-size: 1.2rem;
  text-align: center;
  margin: 2.4rem 0 0.9rem;
  color: ${(props) => props.theme.colors.pri};
  & > a {
    color: ${(props) => props.theme.colors.sec};
    font-weight: 400;
  }
`;

const StreamText = styled(Text)`
  margin: 0;
`;

const Credit = styled.aside`
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 150;
  text-align: center;
  margin: 1.5rem 0 0.9rem;
  color: ${(props) => props.theme.colors.pri};
  & > a {
    color: ${(props) => props.theme.colors.sec};
    font-weight: 400;
  }
`;

const ShareButtonsContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0.7rem;
`;

const ShareText = styled.aside`
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: 150;
  margin: 0.4rem;
  color: ${(props) => props.theme.colors.pri};
`;

const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

const FundingWrapper = styled("div")`
  display: flex;
  width: 100%;
  margin: 0 0 0.5rem;
`;

const PatreonWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid #fe424e;
  border-radius: 5px;
  box-shadow: 0px 0px 15px -3px rgba(240, 240, 240, 0.83);
  padding: 0.3rem 0.5rem 0.2rem;
  margin: 0 0.5rem;
`;

const Patreon = styled("img")`
  height: 1.5rem;
`;

const BandcampWrapper = styled(PatreonWrapper)`
  border: 4px solid rgb(71, 121, 134);
  background: rgb(240, 240, 240, 0.9);
  padding: 0;
`;

const Bandcamp = styled("img")`
  height: 2.5rem;
`;

export default function Start() {
  const shareURL = "https://www.choirsband.com/";
  return (
    <Container>
      <Artwork src={cover_west_end_rosa} alt="Artwork of the remix" />
      <ReactAudioPlayerStyled src={teaser} controls>
        Your browser does not support the
        <code>audio</code> element.
      </ReactAudioPlayerStyled>
      <StreamText>.stream us</StreamText>
      <StreamingIcons />
      <Text>.get in touch</Text>
      <ContactIcons />
      <Text>.support us</Text>
      <FundingWrapper>
        <PatreonWrapper>
          <a
            href="https://www.patreon.com/bePatron?u=41221468"
            target="_blank"
            rel="noreferrer"
          >
            <Patreon src={patreonText} alt="Patreon Text" />
          </a>
        </PatreonWrapper>
        <BandcampWrapper>
          <a href="https://cmlp.bandcamp.com/" target="_blank" rel="noreferrer">
            <Bandcamp src={bandcampLogo} />
          </a>
        </BandcampWrapper>
      </FundingWrapper>
      <Credit>
        .Original Song by{" "}
        <a target="_blank" rel="noreferrer" href="https://www.choirsband.com/">
          Choirs
        </a>
      </Credit>
      <ShareButtonsContainer>
        <ShareText>.Share this site</ShareText>
        <ButtonsWrapper>
          <EmailShareButton url={shareURL}>
            <EmailIcon size={32} round />
          </EmailShareButton>
          <TwitterShareButton url={shareURL}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <FacebookShareButton url={shareURL}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <WhatsappShareButton url={shareURL}>
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
          <TelegramShareButton url={shareURL}>
            <TelegramIcon size={32} round />
          </TelegramShareButton>
          <PinterestShareButton url={shareURL}>
            <PinterestIcon size={32} round />
          </PinterestShareButton>
        </ButtonsWrapper>
      </ShareButtonsContainer>
    </Container>
  );
}
