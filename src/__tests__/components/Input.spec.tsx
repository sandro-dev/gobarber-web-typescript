import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';

import Input from '../../components/Input';

jest.mock('@unform/core', () => {
  return {
    useField: () => {
      return {
        fieldName: 'email',
        defaultValue: '',
        registerField: jest.fn(),
        error: '',
      };
    },
  };
});

describe('Input component', () => {
  it('should be able to render a input component', () => {
    const { getByPlaceholderText } = render(
      <Input name="email" placeholder="E-mail" />,
    );

    const inputElement = getByPlaceholderText('E-mail');

    expect(inputElement).toBeTruthy();
  });

  it('should highlight when user focused on', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input name="email" placeholder="E-mail" />,
    );

    const inputElement = getByPlaceholderText('E-mail');
    const containerInputElement = getByTestId('container-input');

    fireEvent.focus(inputElement);

    await waitFor(() => {
      expect(containerInputElement).toHaveStyle('border-color: #ff9900');
      expect(containerInputElement).toHaveStyle('color: #ff9900');
    });

    fireEvent.blur(inputElement);

    await waitFor(() => {
      expect(containerInputElement).not.toHaveStyle('border-color: #ff9900');
      expect(containerInputElement).not.toHaveStyle('color: #ff9900');
    });
  });
  //
});
