import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiLock, FiMail } from 'react-icons/fi';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import logoImg from '../../assets/logo-gobarber.svg';
import signinBackground from '../../assets/signin-background.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content, BackgroundImage } from './styles';

const Signin: React.FC = () => {

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback((data: Object) => {
    console.log(data);    
  }, []);

  return (
    <Container>
      <Content>        
        <img src={logoImg} alt="logo"/>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu login</h1>

          <Input name="email" type="email" icon={FiMail} placeholder="E-mail"/>
          <Input name="password" type="password" icon={FiLock} placeholder="Senha"/>          
          <Button type="submit">Entrar</Button>
          
          <a href="/forgot">Esqueci minha senha</a>

        </Form>

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