import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiLock, FiMail } from 'react-icons/fi';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { useAuth } from '../../hooks/Auth';
import { useToast } from '../../hooks/Toast';

import logoImg from '../../assets/logo-gobarber.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import getValidationErrors from '../../utils/getValidationErrors';

import {
  Container,
  Content,
  AnimationContiner,
  BackgroundImage,
} from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('O email é obrigatório')
            .email('Insira um email válido'),
          password: Yup.string().required('A senha é obrigatória'),
        });

        await schema.validate(data, { abortEarly: false });

        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description:
            'Ocorreu um erro ao fazer login, verifique as credenciais',
        });
      }
    },
    [signIn, addToast],
  );

  return (
    <Container>
      <Content>
        <AnimationContiner>
          <img src={logoImg} alt="logo" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu login</h1>

            <Input
              name="email"
              type="text"
              icon={FiMail}
              placeholder="E-mail"
            />
            <Input
              name="password"
              type="password"
              icon={FiLock}
              placeholder="Senha"
            />
            <Button type="submit">Entrar</Button>

            <a href="/forgot">Esqueci minha senha</a>
          </Form>

          <Link to="/signup">
            <FiLogIn size={16} />
            Criar conta
          </Link>
        </AnimationContiner>
      </Content>

      <BackgroundImage />
    </Container>
  );
};

export default SignIn;
