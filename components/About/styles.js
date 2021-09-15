import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 661px;

  background: var(--black);
`;

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  padding: 4.5rem 2rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
`;

export const TextContent = styled.div`
  display: flex;
  width: 100%;
  height: 450px;
  flex-direction: column;
  justify-content: center;

  p {
    width: 450px;
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 2.250rem;
    margin-top: 3.125rem;
    color: var(--gray-300);

    & + p {
      margin-top: 2rem;
    }
  };
`;