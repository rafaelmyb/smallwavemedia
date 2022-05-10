import styled from "styled-components";

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.black[600]};
  width: 100%;
  position: relative;

  &::after {
    content: "";
    height: 1px;
    max-width: 1236px;
    width: 100%;
    background: ${({ theme }) => theme.colors.light};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
`;

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  padding: 160px 32px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const AsideText = styled.div`
  font-size: 48px;
  font-weight: 800;
  width: 420px;
`;

export const TextHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  margin-bottom: 16px;

  img {
    width: 28px;
    height: 28px;
    margin-right: 16px;
  }
`;

export const CardTeam = styled.div`
  width: 720px;
  height: 312px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;

  img {
    width: 204px;
    height: 312px;
    border-radius: 4px;
  }
`;

export const CardDescription = styled.div`
  position: absolute;

  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0 12px;
  margin-bottom: 12px;

  span {
    p {
      font-weight: 800;
      font-size: 16px;
    }

    small {
      color: ${({ theme }) => theme.colors.light};
      opacity: 75%;
      font-weight: 600;
    }
  }

  a {
    display: flex;

    img {
      width: 30px;
      height: 30px;
    }
  }
`;
