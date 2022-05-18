import styled from "styled-components";
import { motion } from 'framer-motion';

export const Section = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  video {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    z-index: -1;
    filter: brightness(0.8);
  }

  @media (max-width: 620px) {
    background-image: url("images/mobile_background.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;

    video {
      display: none;
    }
  }
`;

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  padding: 2rem;
  margin: 0px auto;

  position: relative;
  top: -1.5rem;

  @media (max-width: 425px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Header = styled(motion.div).attrs(() => ({
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
}))`
  width: 100%;

  span {
    margin-right: 0.5rem;

    img {
      width: 78px;
      height: 78px;
    }
  }

  @media (max-width: 620px) {
    margin-bottom: 80px;
  }

  @media (max-width: 425px) {
    text-align: center;
    margin-bottom: 80px;
  }

  @media (max-width: 378px) {
    span {
      img {
        display: none;
      }
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const TextContent = styled(motion.div).attrs(() => ({
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
}))`
  display: flex;
  height: 220px;
  flex-direction: column;
  justify-content: center;
  margin-top: 80px;

  h1 {
    max-width: 618px;
    letter-spacing: 0px;
    font-size: 48px;
    line-height: 55px;
  }

  p {
    font-size: 18px;
    color: var(--gray-100);
    margin-top: 32px;
  }

  @media (max-width: 620px) {
    text-align: center;
    margin-top: 0;
    height: 50%;

    h1 {
      font-size: 30px;
      line-height: 35px;
    }

    p {
      margin-top: 160px;
    }
  }
`;
