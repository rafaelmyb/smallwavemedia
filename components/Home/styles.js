import styled from "styled-components";

export const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2rem;

  video {
    width: 100%;
    height: calc(100vh + 5rem);
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
  top: -4.5rem;
`;

export const Header = styled.div`
  max-width: 1280px;
  width: 100%;
`;

export const TextContent = styled.div`
  display: flex;
  width: 100%;
  height: 230px;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 5rem;
  margin-top: 5rem;

  h1 {
    max-width: 576px;
    font-size: 2.875rem;
    font-weight: 800;
    line-height: 3.4375rem;
    letter-spacing: -0.04em;
  }

  p {
    font-size: 1.225rem;
    font-weight: 500;

    margin-top: 1rem;
  }

  button {
    width: 9.375rem;
    height: 2.875rem;
    border-radius: 20px;
    border: none;

    font-weight: 700;
    color: var(--black);

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;