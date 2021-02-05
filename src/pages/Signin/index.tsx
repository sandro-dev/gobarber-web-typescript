import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiLock, FiMail } from 'react-icons/fi';
import * as Yup from 'yup';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import logoImg from '../../assets/logo-gobarber.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Content, BackgroundImage } from './styles';

const Signin: React.FC = () => {

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {    
    try {
      formRef.current?.setErrors({});
      
      const schema = Yup.object().shape({
        email: Yup.string().required('O email é obrigatório').email('Insira um email válido'),
        password: Yup.string().required('A senha é obrigatória')
      });
  
      await schema.validate(data, { abortEarly: false});
    } catch (err) {      
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
      
      console.log(errors);    
    }


  }, []);

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