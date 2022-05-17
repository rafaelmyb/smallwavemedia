import styled from "styled-components";
import { motion } from 'framer-motion';

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.black[600]};
  width: 100%;
  position: relative;

  &::after {
    content: "";
    height: 1px;
    max-width: 1236px;
    width: calc(100% - 64px);
    background: ${({ theme }) => theme.colors.light};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
`;

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  padding: 160px 32px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 1032px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    padding: 80px 32px;
  }

  @media (max-width: 722px) {
    height: 100%;
  }
`;

export const AsideText = styled(motion.div).attrs(() => ({
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
}))`
  font-size: 48px;
  font-weight: 800;
  width: 420px;
  margin-right: 24px;

  @media (max-width: 1032px) {
    max-width: 720px;
    width: 100%;
    text-align: center;
    margin: 0 auto 80px auto;
  }
`;

export const TextHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  margin-bottom: 16px;

  img {
    width: 28px;
    height: 28px;
    margin-right: 16px;
  }
`;

export const CardTeam = styled.div`
  width: 720px;
  height: 312px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1032px) {
    margin: 0 auto;
    max-width: 720px;
    width: 100%;
  }

  @media (max-width: 722px) {
    flex-wrap: wrap;
    height: 100%;
    width: 450px;
  }

  @media (max-width: 514px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Card = styled(motion.div).attrs(() => ({
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
}))`
  position: relative;
  display: flex;
  align-items: flex-end;
  
  & + div {
    margin-left: 24px;
  }

  img {
    width: 204px;
    height: 312px;
    border-radius: 4px;
  }

  @media (max-width: 722px) {
    &:nth-child(3) {
      margin: 48px auto 0 auto;
    }
  }

  @media (max-width: 514px) {
    &:nth-child(2) {
      margin: 48px 0 0 0;
    }
  }
`;

export const CardDescription = styled.div`
  position: absolute;

  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0 12px;
  margin-bottom: 12px;

  span {
    p {
      font-weight: 800;
      font-size: 16px;
    }

    small {
      color: ${({ theme }) => theme.colors.light};
      opacity: 75%;
      font-weight: 600;
    }
  }

  a {
    display: flex;

    img {
      width: 30px;
      height: 30px;
    }
  }
`;
