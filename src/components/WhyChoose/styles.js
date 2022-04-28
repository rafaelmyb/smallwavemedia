import styled from 'styled-components';

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

  h1 {
    font-size: 48px;
  }

  p {
    margin-top: 24px;
    font-weight: 500;
  }
`;

export const Content = styled.div``;