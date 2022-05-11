import styled from 'styled-components';

export default styled.input`
  background: ${({ theme }) => theme.colors.black[600]};
  width: ${({ width }) => width};
  height: 62px;
  border: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.light};
  padding: 0 22px;
  outline: none;
  font-size: 16px;
  font-weight: 800;

  &::placeholder {
    color: ${({ theme }) => theme.colors.light};
    opacity: 75%;
  }
`;