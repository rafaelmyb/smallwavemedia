import styled from "styled-components";

export const Section = styled.section`
  max-width: 100%;
  height: 100vh;
  min-height: 820px;
  padding: 0 2rem;

  background: var(--black);
`;

export const Container = styled.div`
  max-width: 1120px;
  height: 100vh;
  min-height: 820px;
  margin: 0 auto;

  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  width: 635px;
  height: 560px;

  h1 {
    font-size: 3.5rem;
    font-weight: 800;

    margin-bottom: 3.125rem;
  }

  p {
    width: 500px;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 2.250rem;

    color: var(--gray-300);

    & + p {
      margin-top: 2.5rem;
    }
  };
`;