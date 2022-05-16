import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 48px 0;
  height: 140px;
  background: ${({ theme }) => theme.colors.black[800]};
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 1280px;
  width: 100%;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  small {
    font-weight: 800;
    color: ${({ theme }) => theme.colors.light};
    opacity: 75%;
    margin-right: 24px;
  }

  button {
    border: none;
    background: none;
    width: 48px;
    height: 48px;
  }
`;
