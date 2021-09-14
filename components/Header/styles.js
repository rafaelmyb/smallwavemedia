import styled from "styled-components";

export const MainHeader = styled.header`
  height: 5rem;
  margin: 0 auto;
  padding: 0 2rem;
  background: transparent;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 5rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const Content = styled.div`
  width: 420px;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      font-size: 1rem;
      font-weight: 700;
      color: var(--gray-100);

      transition: color 0.2s;

      &:hover {
        color: var(--gray-400);
      }
    }
  }
`;