import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 748px;
  background: var(--gray-800);
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100%;
  padding: 4.5rem 2rem;
  margin: 0 auto;

 h1 {
   width: 100%;
 }
`;

export const Content = styled.div`
  width: 100%;
  height: 555px;

  hr {
    margin-top: 3rem;
    width: 40px;
  }
`;

export const ContainerSquad = styled.div`
  display: flex;
  justify-content: space-between;
  height: 400px;

  margin-top: 3rem;
`;

export const Squad = styled.div`
  width: 352px;
  height: 100%;

  img {
    border-radius: 4px;
    transition: filter 0.2s;
    
    &:hover {
      filter: brightness(1.2);
    }
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 2.375rem;
    width: 352px;
    margin-top: 1.75rem;
    margin-bottom: 1.275rem;
    color: var(--gray-100);
  }

  p {
    width: 348px;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.6875rem;
    color: var(--gray-300);
  }
`;