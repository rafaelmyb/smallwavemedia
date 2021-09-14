import styled from "styled-components";

export const Section = styled.section`
  max-width: 100%;
  height: 700px;
  padding: 0 2rem;

  background: var(--gray-800);
`;

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  padding: 4.5rem 2rem;
  height: 700px;
  margin: 0 auto;
  
  display: flex;
  align-items: center;

 h1 {
   font-size: 2.875rem;
   font-weight: 800;
   line-height: 3.4375rem;
   width: 450px;
   margin-top: 1rem;
 }
`;

export const Content = styled.div`
  width: 1280px;
  height: 600px;
`;

export const ContainerSquad = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 3rem;
`;

export const Squad = styled.div`
  width: 352px;
  height: 420px;

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
  }

  p {
    width: 348px;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.6875rem;
    color: var(--gray-300);
  }
`;