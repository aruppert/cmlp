import React from "react";
import styled from "@emotion/styled";
import artwork_cmlp_remix from "../graphics/artwork_cmlp_remix.jpg";
import ReactAudioPlayer from "react-audio-player";
import teaser from "../audio/teaser.mp3";

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

const Contact = styled.aside`
  font-size: 1.5rem;
  text-align: center;
  color: ${(props) => props.theme.colors.pri};
  & > a {
    color: ${(props) => props.theme.colors.sec};
  }
`;

export default function Start() {
  const [showConfirmation, setShowConfirmation] = React.useState(false);
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
    </Container>
  );
}
