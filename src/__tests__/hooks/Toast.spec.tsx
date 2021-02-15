import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { render, waitFor } from '@testing-library/react';
import { useToast, ToastProvider, ToastMessage } from '../../hooks/Toast';

import ToastContainer from '../../components/ToastContainer';

const mockedAddToast = jest.fn();
const mockedRemoveToast = jest.fn();

jest.mock('../../hooks/Toast', () => {
  return {
    useToast: () => ({
      addToast: mockedAddToast,
      removeToast: mockedRemoveToast,
    }),
  };
});

describe('Toast hook', () => {
  it('should be able to show a toast message', async () => {
    const { result } = renderHook(() => useToast(), {
      wrapper: ToastProvider,
    });

    act(() =>
      result.current.addToast({
        type: 'success',
        title: 'Tested with success',
        description: 'This function test how to show toast on pages',
      }),
    );

    const messages: ToastMessage[] = [
      {
        id: 'id-123',
        type: 'success',
        title: 'success',
        description: 'The credentials are correts',
      },
      {
        id: 'id-456',
        type: 'error',
        title: 'error',
        description: 'Fails on try to authenticate. Verify the credentials',
      },
      {
        id: 'id-789',
        title: 'info',
        description: 'Just a toast information',
      },
    ];

    const { getAllByText } = render(<ToastContainer messages={messages} />);

    const toastElement = getAllByText('success');
    expect(toastElement).toBeTruthy();

    await waitFor(() => expect(mockedRemoveToast).toHaveBeenCalled(), {
      timeout: 4000,
    });

    // debug();
  });
});
