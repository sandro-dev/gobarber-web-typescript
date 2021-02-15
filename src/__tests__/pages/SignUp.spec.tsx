import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';

import MockAdapter from 'axios-mock-adapter';
import SignUp from '../../pages/SignUp';
import api from '../../services/api';

const apiMock = new MockAdapter(api);

const mockedHistoryPush = jest.fn();
const mockedAddToast = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

jest.mock('../../hooks/Toast', () => {
  return {
    useToast: () => ({
      addToast: mockedAddToast,
    }),
  };
});

describe('SignUp Page', () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear();
  });

  it('should be able to sign up', async () => {
    apiMock.onPost('users').reply(200, {
      name: 'Sandro Santos',
      email: 'sandro@sandro.dev',
      id: 'user-123',
    });

    const { getByPlaceholderText, getByText } = render(<SignUp />);

    const inputName = getByPlaceholderText('Nome');
    const inputEmail = getByPlaceholderText('E-mail');
    const inputPassword = getByPlaceholderText('Senha');

    fireEvent.change(inputName, { target: { value: 'Sandro Santos' } });
    fireEvent.change(inputEmail, { target: { value: 'sandro@sandro.dev' } });
    fireEvent.change(inputPassword, { target: { value: '123456' } });

    const buttonElement = getByText('Cadastrar');
    fireEvent.click(buttonElement);

    await waitFor(() => expect(mockedHistoryPush).toHaveBeenCalledWith('/'));
  });

  it('should NOT be able to sign up with invalid data', async () => {
    apiMock.onPost('users').reply(200, {
      name: 'Sandro Santos',
      email: 'not-valid@email',
      id: 'user-123',
    });

    const { getByPlaceholderText, getByText } = render(<SignUp />);

    const inputName = getByPlaceholderText('Nome');
    const inputEmail = getByPlaceholderText('E-mail');
    const inputPassword = getByPlaceholderText('Senha');

    fireEvent.change(inputName, { target: { value: 'Sandro Santos' } });
    fireEvent.change(inputEmail, { target: { value: 'not-valid@email' } });
    fireEvent.change(inputPassword, { target: { value: '123456' } });

    const buttonElement = getByText('Cadastrar');
    fireEvent.click(buttonElement);

    await waitFor(() =>
      expect(mockedAddToast).toBeCalledWith(
        expect.objectContaining({
          type: 'error',
        }),
      ),
    );
  });
});
