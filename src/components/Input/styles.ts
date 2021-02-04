import styled from 'styled-components';

export const Container = styled.div`

  & + div {
    margin-top: 8px;
  }

  background: #232129;
  width: 340px;
  height: 56px;  
  border-radius: 10px;
  color: #666360;

  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 15px;

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
