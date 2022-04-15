import styled from "styled-components";

// interface ButtonStateProps {
//   buttonstate: string;
// }

export const Section = styled.section`
  width: 100%;
  max-height: 876px;
  height: 100%;
  background: ${({ theme }) => theme.colors.black[600]};
  padding: 160px 0;
`;

export const Container = styled.div`
  max-width: 1236px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export const HeaderText = styled.div`
  margin-bottom: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    width: 466px;
  }

  p {
    width: 476px;
    line-height: 27px;

    span {
      display: inline-block;
    }
  }
`;

export const Content = styled.div`
  max-width: 1236px;
  width: 100%;
  margin: 0 auto;
`;

export const HeaderContainer = styled.div`
  
  button {
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
    color: ${({ theme }) => theme.colors.light};
    background: transparent;
    width: 412px;
    height: 64px;
    position: relative;
    top: 1px;
    z-index: 1;
  }
`;

export const ServicesContainer = styled.div`
  width: 100%;
  max-height: 276px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 68px 78px;
  border: 1px solid ${({ theme }) => theme.colors.light};
  background: #0f0f10;

  img {
    width: 352px;
    height: 140px;
    border-radius: 4px;
  }

  p {
    line-height: 27px;
    font-weight: 600;
    width: 679px;
    text-align: left;
    margin-left: 48px;
  }
`;