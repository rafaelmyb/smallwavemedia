import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 755px;
  background: ${({ theme }) => theme.colors.black[700]};
  background-image: url("images/logo_background.svg");
  background-repeat: no-repeat;
  background-position: 100% 100%;
  background-size: 645px 400px;

  @media (min-width: 1441px) {
    background-image: url("images/logo_background_widescreen.svg");
    background-size: 980px 400px;
  }

  @media (max-width: 1200px) {
    background-size: 550px 342px;
  }

  @media (max-width: 1024px) {
    background-size: 450px 280px;
  }

  @media (max-width: 767px) {
    background-size: 373px 232px;
  }

  @media (max-width: 620px) {
    background-size: 340px 210px;
  }

  @media (max-width: 393px) {
    background-size: 273px 171px;
  }
`;

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  padding: 160px 32px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    padding: 80px 32px;
  }
`;

export const TextContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;

  h1 {
    text-align: center;
  }

  p {
    max-width: 445px;
    width: 100%;
    font-size: 18px;
    font-weight: 600;
    line-height: 27px;
    margin-top: 80px;
    color: var(--gray-300);

    & + p {
      margin-top: 28.5px;
    }
  }

  @media (max-width: 767px) {
    h1 {
      text-align: left;
      max-width: 300px;
      width: 100%;
    }

    p {
      margin-top: 40px;
    }
  }

  @media (max-width: 620px) {
    p {
      font-size: 16px;

      & + p {
        margin-top: 24px;
      }
    }
  }
`;