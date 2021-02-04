import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`

  width: 340px;
  height: 56px;
  background: #FF9000;
  border-radius: 10px;
  margin-top: 16px;
  transition: 0.2s background-color;

  &:hover {
    background: ${shade(0.3, '#FF9900')};
  }
  
`;
