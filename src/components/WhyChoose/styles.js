import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.black[700]};
  padding: 160px 0;

  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 32px;
`;

export const HeaderText = styled.div`
  text-align: center;
  margin-bottom: 80px;

  h1 {
    font-size: 48px;
  }

  p {
    margin-top: 24px;
    font-weight: 500;
  }
`;

export const Content = styled.div``;

export const TrailContent = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;

  /* li:first-child {
    position: relative;

    img {
      position: absolute;
      right: -12px;
      top: -23px;
    }
  } */

  li:last-child {
    position: relative;

    &:before {
      content: "";
      position: absolute;
      z-index: 1;
      bottom: -1px;
      left: -2px;
      border-left: 3px solid #0f0f10;
      height: 50%;
    }
  }

  @media (max-width: 1299px) {
    width: 1000px;
  }

  @media (max-width: 1063px) {
    width: 860px;
  }

  @media (max-width: 920px) {
    width: 688px;
  }

  @media (max-width: 751px) {
    display: none;
  }
`;

export const LeftContainer = styled.li`
  max-width: 618px;
  width: 100%;
  height: 180px;
  border-right: 1px solid #a8a8b3;
  display: flex;
  align-items: center;

  hr {
    width: 252px;
    height: 1px;
    background: #a8a8b3;
    margin-left: 28px;
    border: none;
  }

  @media (max-width: 1299px) {
    max-width: 500px;

    hr {
      width: 150px;
    }
  }

  @media (max-width: 1063px) {
    justify-content: end;
    max-width: 430px;
  }

  @media (max-width: 920px) {
    justify-content: end;
    max-width: 344px;
  }

  @media (max-width: 751px) {
    padding: 20px 24px 20px 0;
    height: 100%;

    hr {
      display: none;
    }
  }
`;

export const RightContainer = styled.li`
  max-width: 618px;
  width: 100%;
  height: 180px;
  border-left: 1px solid #a8a8b3;
  display: flex;
  align-items: center;
  position: relative;
  left: -1px;

  hr {
    width: 252px;
    height: 1px;
    background: #a8a8b3;
    margin-right: 28px;
    border: none;
  }

  @media (max-width: 1299px) {
    max-width: 500px;

    hr {
      width: 150px;
    }
  }

  @media (max-width: 1063px) {
    max-width: 430px;
  }

  @media (max-width: 920px) {
    max-width: 344px;
  }

  @media (max-width: 751px) {
    padding: 20px 0 20px 24px;
    height: 100%;

    hr {
      display: none;
    }
  }
`;

export const Icon = styled.div`
  margin-right: 30px;

  @media (max-width: 1063px) {
    display: none;
  }
`;

export const Description = styled.div`
  max-width: 267px;
  width: 100%;
  display: flex;
  flex-direction: column;

  img {
    width: 40px;
    height: 40px;
    margin-bottom: 12px;
    display: none;
  }

  p {
    margin-top: 10px;
  }

  @media (max-width: 1063px) {
    margin-bottom: auto;

    img {
      display: block;
    }

    p {
      margin-top: 28px;
    }
  }

  @media (max-width: 751px) {
    p {
      margin-top: 16px;
    }
  }
`;

export const EmptyContainer = styled.div`
  @media (max-width: 1299px) {
    width: 500px;
  }

  @media (max-width: 1063px) {
    width: 430px;
  }

  @media (max-width: 920px) {
    width: 344px;
  }

  @media (max-width: 751px) {
    max-width: 344px;
    width: 100%;
  }
`;

export const MobileContent = styled.div`
  display: none;

  @media (max-width: 751px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;

    li:last-child {
      position: relative;

      &:before {
        content: "";
        position: absolute;
        z-index: 1;
        bottom: -1px;
        left: -2px;
        border-left: 3px solid #0f0f10;
        height: 50%;
      }
    }
  }
`;