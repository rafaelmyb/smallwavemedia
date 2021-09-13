import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 5rem;
  margin: 0 auto;
  padding: 0 2rem;
  background: transparent;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 600px;
  position: relative;
  left: -1.5rem;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      font-size: 1rem;
      font-weight: 700;
      text-transform: uppercase;

      transition: color 0.2s;

      &:hover {
        color: var(--gray-500);
      }
    }
  }
`;