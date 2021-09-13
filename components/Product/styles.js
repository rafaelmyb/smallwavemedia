import styled from "styled-components";

export const Section = styled.section`
  max-width: 100%;
  height: 100vh;
  min-height: 820px;
  padding: 0 2rem;

  background: var(--gray-800);
`;

export const Container = styled.div`
  max-width: 1120px;
  height: 100vh;
  min-height: 820px;
  margin: 0 auto;
  
  display: flex;
  align-items: center;

 h1 {
   font-size: 3.5rem;
   font-weight: 800;
   max-width: 1120px;
   width: 600px;
 }
`;

export const Content = styled.div`
  width: 1120px;
  height: 600px;
  margin-top: 2rem;
`;

export const ContainerSquad = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 4rem;
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
    font-size: 1.750rem;
    font-weight: 800;
    width: 352px;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
  }

  p {
    width: 348px;
    font-weight: 500;
    line-height: 1.6875rem;
    color: var(--gray-300);
  }
`;