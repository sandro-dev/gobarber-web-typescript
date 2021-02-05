import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`

  & + div {
    margin-top: 8px;
  }

  background: #232129;
  width: 340px;
  height: 56px;  
  border-radius: 10px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 15px;

  border: 2px solid #232129;
  color: #666360;

  ${(props) => props.isFocused && css`
    color: #ff9900;
    border-color: #ff9900;
  `}

  ${(props) => props.isFilled && css`
    color: #ff9900;
  `}
  
  svg { margin-right: 8px; }

  input {
    flex: 1;
    margin-left: 5px;
    height: 90%;
    color: #666360;
    background: transparent;
    font-size: 16px;

    &::placeholder {
      color: #666360;
      font-size: 16px;
    }


  }
  
`;
