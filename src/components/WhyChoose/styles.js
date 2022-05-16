import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  max-height: 1217px;
  height: 100%;
  background: ${({ theme }) => theme.colors.black[700]};
  padding: 160px 0;
`;

export const Container = styled.div`
  max-width: 1236px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export const HeaderText = styled.div`
  text-align: center;
  margin-bottom: 80px;

  h1 {
    font-size: 48px;
  }

  p {
    margin-top: 24px;
    font-weight: 500;
  }
`;

export const Content = styled.div``;

export const TrailContent = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;

  /* li:first-child {
    position: relative;

    img {
      position: absolute;
      right: -12px;
      top: -23px;
    }
  } */

  li:last-child {
    position: relative;
    
    &:before {
      content: "";
      position: absolute;
      z-index: 1;
      bottom: -1px;
      left: -2px;
      border-left: 3px solid #0F0F10;
      height: 50%;
    }
  }
`;

export const LeftContainer = styled.li`
  max-width: 618px;
  width: 100%;
  height: 180px;
  border-right: 1px solid #a8a8b3;
  display: flex;
  align-items: center;

  hr {
    width: 252px;
    height: 1px;
    background: #a8a8b3;
    margin-left: 28px;
    border: none;
  }
`;

export const RightContainer = styled.li`
  max-width: 618px;
  width: 100%;
  height: 180px;
  border-left: 1px solid #a8a8b3;
  display: flex;
  align-items: center;
  position: relative;
  left: -1px;

  hr {
    width: 252px;
    height: 1px;
    background: #a8a8b3;
    margin-right: 28px;
    border: none;
  }
`;

export const Icon = styled.div`
  margin-right: 30px;
  /* position: relative; */
`;

export const Description = styled.div`
  width: 267px;

  p {
    margin-top: 10px;
  }
`;

export const EmptyContainer = styled.div``;
