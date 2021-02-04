import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo-gobarber.svg';
import signinBackground from '../../assets/signin-background.svg';

import { Container, Content, BackgroundImage } from './styles';

const Signin: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo"/>
        <form action="">
          <h1>Faça seu login</h1>
          <input type="email" placeholder="E-mail"/>
          <input type="password" placeholder="Senha"/>
          <button type="submit">Entrar</button>
        </form>
        <button type="button">Esqueci minha senha</button>
        <a href="/signup">
          <FiLogIn size={16} />
          Criar conta
        </a>
      </Content>
      <BackgroundImage>
        <img src={signinBackground} alt="Background"/>
      </BackgroundImage>
    </Container>
  );
}

export default Signin;