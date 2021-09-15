import styled from "styled-components";

export const Section = styled.header`
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
`;

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  padding: 2rem;
  margin: 0px auto;

  position: relative;
  top: -1.5rem;
`;

export const Header = styled.div`
  width: 100%;

  span {
    margin-right: .5rem;

    img {
      width: 78px;
      height: 78px;
    }
  }
`;

export const TextContent = styled.div`
  display: flex;
  height: 220px;
  flex-direction: column;
  justify-content: center;
  margin-top: 5rem;

  h1 {
    max-width: 576px;
    letter-spacing: -0.04em;
  }

  p {
    font-size: 1.125rem;
    color: var(--gray-100);
    margin-top: 2rem;
  }
`;