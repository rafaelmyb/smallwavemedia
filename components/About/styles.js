import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 661px;
  padding: 0 2rem;

  background: var(--black);
`;

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  padding: 4.5rem 2rem;
  height: 620px;
  margin: 0 auto;

  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  width: 635px;
  height: 450px;

  h1 {
    font-size: 2.875rem;
    font-weight: 800;

    margin-bottom: 3.125rem;
  }

  p {
    width: 450px;
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 2.250rem;

    color: var(--gray-300);

    & + p {
      margin-top: 2rem;
    }
  };
`;