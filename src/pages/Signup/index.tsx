import React, { useCallback, useRef } from 'react';
import { FiLock, FiMail, FiUser, FiArrowLeft } from 'react-icons/fi';
import * as Yup from 'yup';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import logoImg from '../../assets/logo-gobarber.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Content, BackgroundImage } from './styles';

const Signup: React.FC = () => {

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {    
    try {
      formRef.current?.setErrors({});
      
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        email: Yup.string().required('O email é obrigatório').email('Insira um email válido'),
        password: Yup.string().min(6, 'No mínimo 6 caracteres')
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
      
      <BackgroundImage />

      <Content>        
        <img src={logoImg} alt="logo"/>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

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