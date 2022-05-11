import styled from "styled-components";

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.black[600]};
`;

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  padding: 160px 32px;
  margin: 0 auto;

  h1 {
    font-size: 48px;
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  background: ${({ theme }) => theme.colors.black[500]};
  margin-top: 60px;
  height: 128px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 36px;
`;

export const AddressContainer = styled.div`
  margin-top: 80px;

  h1 {
    text-align: end;
  }
`;

export const CardContainer = styled.div`
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Card = styled.div`
  max-width: 352px;
  height: 140px;
  width: 100%;
  background: ${({ theme }) => theme.colors.black[800]};
  border-radius: 4px;
  font-size: 16px;
  font-weight: 800;
  padding: 44px 52px;
  line-height: 27px;
  text-align: center;

  &:nth-child(2) {
    padding: 38px 48px;
  }

  hr {
    width: 50px;
    margin: 5px auto;
  }

  a {
    & + a {
      margin-left: 30px;
    }
  }

  img {
    width: 50px;
    height: 50px;
  }
`;
