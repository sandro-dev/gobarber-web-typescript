import React, { useCallback, useRef } from 'react';
import { FiLock, FiMail, FiUser, FiArrowLeft } from 'react-icons/fi';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { useToast } from '../../hooks/Toast';

import logoImg from '../../assets/logo-gobarber.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import getValidationErrors from '../../utils/getValidationErrors';

import api from '../../services/api';

import {
  Container,
  Content,
  AnimationContiner,
  BackgroundImage,
} from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('O nome é obrigatório'),
          email: Yup.string()
            .required('O email é obrigatório')
            .email('Insira um email válido'),
          password: Yup.string().min(6, 'No mínimo 6 caracteres'),
        });

        await schema.validate(data, { abortEarly: false });

        await api.post('/users', {
          name: data.name,
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description:
            'Ocorreu um erro ao tentar realizar o cadastro, verifique as informações',
        });

        return;
      }

      addToast({
        type: 'success',
        title: 'Cadastro realizado',
        description: 'Cadastro foi realizado com sucesso!',
      });
    },
    [addToast],
  );

  return (
    <Container>
      <BackgroundImage />

      <Content>
        <AnimationContiner>
          <img src={logoImg} alt="logo" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>

            <Input name="name" type="text" icon={FiUser} placeholder="Nome" />
            <Input
              name="email"
              type="email"
              icon={FiMail}
              placeholder="E-mail"
            />
            <Input
              name="password"
              type="password"
              icon={FiLock}
              placeholder="Senha"
            />

            <Button type="submit">Cadastrar</Button>

            <Link to="/">
              <FiArrowLeft size={20} />
              Voltar para o login
            </Link>
          </Form>
        </AnimationContiner>
      </Content>
    </Container>
  );
};

export default SignUp;
