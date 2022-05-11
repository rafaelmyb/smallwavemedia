import styled from 'styled-components';

export default styled.button`
  max-width: 176px;
  width: 100%;
  height: 62px;
  border: none;
  background: ${({ theme }) => theme.colors.light};
  font-size: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black[600]};
  border-radius: 4px;
  transition: filter 0.2s ease-in;

  &:hover {
    filter: brightness(0.8);
  }

  &[disabled] {
    cursor: default;

    &:hover {
      filter: none;
    }
  }
`;
