import styled from 'styled-components';
import { shade } from 'polished';

import signinBackground from '../../assets/signin-background.svg';

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
  }

  a {
    margin-top: 16px;
    text-align: center;
    color: #f4ede8;
    text-decoration: none;
    background: transparent;
    transition: 0.2s color;
    &:hover {
      color: ${shade(0.3, '#F4EDE8')};
    }
  }

  > a {
    margin-top: 16px;
    color: #ff9000;
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
  background: url(${signinBackground});
  flex: 1;
  object-fit: cover;
`;
