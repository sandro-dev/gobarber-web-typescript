import React, { useCallback, useRef, useState } from 'react';
import { FiLock, FiMail, FiUser, FiArrowLeft } from 'react-icons/fi';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import logoImg from '../../assets/logo-gobarber.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content, BackgroundImage } from './styles';

const Signup: React.FC = () => {

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback((data: Object) => {
    console.log(data);    
  }, []);

  return (
    <Container>
      
      <BackgroundImage />

      <Content>        
        <img src={logoImg} alt="logo"/>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu login</h1>

          <Input name="name" type="text" icon={FiUser} placeholder="Nome"/>
          <Input name="email" type="email" icon={FiMail} placeholder="E-mail"/>
          <Input name="password" type="password" icon={FiLock} placeholder="Senha"/>          
          
          <Button type="submit">Cadastrar</Button>
          
          <a href="/signin">
            <FiArrowLeft size={20} />
            Voltar para o login
          </a>

        </Form>

        

      </Content>      

    </Container>
  );
}

export default Signup;