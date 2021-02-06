import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiLock, FiMail } from 'react-icons/fi';
import * as Yup from 'yup';

import { useAuth } from '../../contexts/AuthContext';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import logoImg from '../../assets/logo-gobarber.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Content, BackgroundImage } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const Signin: React.FC = () => {

  const formRef = useRef<FormHandles>(null);

  const { user, signIn } = useAuth();
  console.log(user);
  

  const handleSubmit = useCallback(async (data: SignInFormData) => {    
    try {
      formRef.current?.setErrors({});
      
      const schema = Yup.object().shape({
        email: Yup.string().required('O email é obrigatório').email('Insira um email válido'),
        password: Yup.string().required('A senha é obrigatória')
      });
  
      await schema.validate(data, { abortEarly: false});
      
      signIn({
        email: data.email, 
        password: data.password
      });

    } catch (err) {      
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
      
      console.log(errors);    
    }


  }, [signIn]);

  return (
    <Container>
      <Content>        
        <img src={logoImg} alt="logo"/>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu login</h1>

          <Input name="email" type="text" icon={FiMail} placeholder="E-mail"/>
          <Input name="password" type="password" icon={FiLock} placeholder="Senha"/>          
          <Button type="submit">Entrar</Button>
          
          <a href="/forgot">Esqueci minha senha</a>

        </Form>

        <a href="/signup">
          <FiLogIn size={16} />
          Criar conta
        </a>

      </Content>

      <BackgroundImage />

    </Container>
  );
}

export default Signin;