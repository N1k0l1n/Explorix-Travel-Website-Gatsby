import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import Video from "../assets//pexels_videos_2053856 (1080p).mp4";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline />
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <HeroH1>Unreal Destinations</HeroH1>
          <HeroP>Out of this world</HeroP>
          <Button primary="true" round="true" to="/trips">
            Travel Now
          </Button>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;
  color: #fff;
`;

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh -80px);
  max-height: 100%;
  padding: 0rem calc((100vw -1300px) / 2);
`;

const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: #fff;
  line-height: 1.1;
  font-weight: bold;
`;

const HeroH1 = styled.h1`
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  font-size: clamp(1.5rem, 6vw, 4rem);
  padding: 0 1rem;
`;

const HeroP = styled.p`
  margin-bottom: 2rem;
  font-size: clamp(1rem, 3vw, 3rem);
  font-weight: 400;
`;
