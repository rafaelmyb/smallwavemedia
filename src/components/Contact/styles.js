import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.black[600]};
`;

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  padding: 160px 32px;
  margin: 0 auto;

  h1 {
    font-size: 48px;   
  }

  @media (max-width: 768px) {
    padding: 80px 32px;
  }
`;

export const FormContainer = styled(motion.form).attrs(() => ({
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
}))`
  width: 100%;
  background: ${({ theme }) => theme.colors.black[500]};
  margin-top: 60px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 36px;

  @media (max-width: 1180px) {
    input {
      margin-right: 24px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 392px;
    margin-left: auto;
    margin-right: auto;

    input {
      margin-right: 0;
      max-width: 100%;

      & + input {
        margin-top: 24px;
      }
    }
  }
`;

export const AddressContainer = styled.div`
  margin-top: 80px;

  h1 {
    text-align: end;
  }
`;

export const CardContainer = styled(motion.div).attrs(() => ({
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
}))`
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  max-width: 352px;
  width: 100%;
  height: 140px;
  background: ${({ theme }) => theme.colors.black[800]};
  border-radius: 4px;
  font-size: 16px;
  font-weight: 800;
  padding: 44px 52px;
  line-height: 27px;
  text-align: center;

  &:nth-child(2) {
    padding: 38px 46px;
  }

  hr {
    max-width: 50px;
    margin: 5px auto;
  }

  a {
    & + a {
      margin-left: 30px;
    }
  }

  img {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 1180px) {
    height: 100%;

    & + div {
      margin-left: 28px;
    }
  }

  @media (max-width: 1052px) {
    &:nth-child(3) {
      padding: 44px 40px;
    }
  }

  @media (max-width: 1017px) {
    &:nth-child(3) {
      padding: 44px 72px;
    }

    a {
      &:nth-child(3) {
        margin-left: 0;
      }
    }
  }

  @media (max-width: 868px) {
    a {
      &:nth-child(2) {
        margin-left: 0;
      }
    }
  }

  @media (max-width: 768px) {
    & + div {
      margin-left: 0;
      margin-top: 28px;
    }

    &:nth-child(3) {
      display: flex;
      justify-content: space-between;
      padding: 44px 52px;

      a {
        display: flex;
      }
    }
  }
`;

export const ButtonContainer = styled.div`
  max-width: 176px;
  width: 100%;
  position: relative;

  @media (max-width: 768px) {
    margin-top: 24px;
    max-width: 100%;
  }
`;

export const SubmitMessage = styled.small`
  position: absolute;
  bottom: -24px;
  left: ${({ success }) => (success ? "-75px" : "-105px")};

  @media (min-width: 769px) and (max-width: 922px) {
    left: ${({ success }) => (success ? "-120px" : "-150px")};
  }

  @media (max-width: 768px) {
    left: ${({ success }) => (success ? "0px" : "0px")};
    bottom: -23px;
  }

  @media (max-width: 382px) {
    bottom: ${({ success }) => (success ? "-30px" : "-30px")};
  }
`;
