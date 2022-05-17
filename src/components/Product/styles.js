import styled from "styled-components";

import { motion } from "framer-motion";

export const Section = styled.section`
  width: 100%;
  max-height: 876px;
  height: 100%;
  background: ${({ theme }) => theme.colors.black[600]};
  padding: 160px 0;

  @media (max-width: 820px) {
    max-height: 100%;
  }

  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

export const Container = styled.div`
  max-width: 1236px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export const HeaderText = styled.div`
  margin-bottom: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    max-width: 466px;
    width: 100%;
    font-size: 48px;
  }

  p {
    width: 476px;
    font-weight: 500;
    line-height: 27px;

    span {
      display: inline-block;
    }
  }

  @media (max-width: 1236px) {
    padding: 0 32px;
  }

  @media (max-width: 820px) {
    p {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    display: inline-block;
    margin-bottom: 40px;

    p {
      margin-top: 24px;
    }
  }
`;

export const Content = styled(motion.div).attrs(() => ({
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
}))`
  max-width: 1236px;
  width: 100%;
  margin: 0 auto;
`;

export const HeaderContainer = styled.div`
  display: flex;
  
  button {
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
    color: ${({ theme }) => theme.colors.light};
    background: transparent;
    max-width: 412px;
    width: 100%;
    height: 64px;
    position: relative;
    top: 1px;
    z-index: 1;
    padding: 0 8px;

    @media (max-width: 639px) {
      height: 96px;
      font-size: 16px;
    }

    @media (max-width: 412px) {
      height: 120px;
    }

    @media (max-width: 412px) {
      height: 120px;
    }
  }
`;

export const ServicesContainer = styled.div`
  width: 100%;
  max-height: 276px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 68px 78px;
  border: 1px solid ${({ theme }) => theme.colors.light};
  background: #0f0f10;

  img {
    max-width: 352px;
    width: 100%;
    height: 140px;
    border-radius: 4px;
  }

  p {
    line-height: 27px;
    font-weight: 600;
    max-width: 679px;
    text-align: left;
    margin-left: 48px;
  }

  @media (max-width: 820px) {
    display: inline-block;
    text-align: center;
    max-height: 100%;
    
    p {
      margin-left: 0;
      margin-top: 24px;
      text-align: center;
    }
  }

  @media (max-width: 510px) {
    padding: 68px 48px;
  }
`;