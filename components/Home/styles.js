import styled from "styled-components";

export const Section = styled.section`
  height: calc(100vh - 5rem);
  min-height: calc(820px - 5rem);

  padding: 0 2rem;

  video {
    width: 100%;
    height: 100vh;
    min-height: 820px;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    z-index: -1;
    filter: brightness(0.8);
  }
`;

export const Container = styled.div`
  max-width: 1120px;
  height: calc(100vh - 5rem);
  margin: 0 auto;

  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  width: 595px;
  height: 465px;
  
  h1 {
    font-size: 8.5rem;
    font-weight: 800;
    line-height: 7rem;

    margin-bottom: 2rem;

    span {
      display: flex;
      justify-content: flex-end;
    }
  }

  p {
    font-size: 1.5rem;
    font-weight: 500;

    margin-bottom: 8rem;
  }

  button {
    width: 9.375rem;
    height: 2.875rem;
    border-radius: 4px;
    border: none;

    font-weight: 700;
    color: var(--black);

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;