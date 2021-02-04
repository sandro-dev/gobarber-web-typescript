import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-self: stretch;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 700px;
  flex: 1;

  img {
    margin-top: 80px;
  }

  form {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      margin-bottom: 24px;
      font-size: 24px;
    }

    input {
      background: #232129;
      width: 340px;
      height: 56px;
      padding: 0 16px;

      border-radius: 10px;
      color: #666360;

      &::placeholder {
        color: #666360;
      }

      & + input {
        margin-top: 8px;
      }
    }

    button {
      width: 340px;
      height: 56px;
      background: #FF9000;
      border-radius: 10px;
      margin-top: 16px;
      transition: 0.2s background-color;

      &:hover {
        background: ${shade(0.3, '#FF9900')};
      }
    }

  }

  > button {
    margin-top: 16px;
    text-align: center;
    color: #F4EDE8;
    background: transparent;
    transition: 0.2s color;
    &:hover {
      color: ${shade(0.3, '#F4EDE8')};
    }
  }

  > a {    
    margin-top: 16px;
    color: #FF9000;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 8px;
    }

    transition: 0.2s color;
    &:hover {
      color: ${shade(0.3, '#FF9900')};
    }
  }
  
`;
export const BackgroundImage = styled.div`
  display: flex;

  img {
    object-fit: cover;
    flex: 1;
  }
`;
