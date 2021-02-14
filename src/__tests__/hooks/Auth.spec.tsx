import { renderHook } from '@testing-library/react-hooks';

import MockAdapter from 'axios-mock-adapter';
import { act } from 'react-test-renderer';
import { useAuth, AuthProvider } from '../../hooks/Auth';

import api from '../../services/api';

const apiMock = new MockAdapter(api);

describe('Auth hook', () => {
  it('should be able to sign in', async () => {
    const apiResponse = {
      user: {
        id: 'id-123',
        name: 'Sandro Santos',
        email: 'sandro@sandro.dev',
      },
      token: 'token-123',
    };

    apiMock.onPost('sessions').reply(200, apiResponse);
    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

    const { result, waitForNextUpdate } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    result.current.signIn({
      email: 'sandro@sandro.dev',
      password: '123456',
    });

    await waitForNextUpdate();

    expect(setItemSpy).toHaveBeenCalledWith(
      '@GoBarber:token',
      apiResponse.token,
    );

    expect(setItemSpy).toHaveBeenCalledWith(
      '@GoBarber:user',
      JSON.stringify(apiResponse.user),
    );

    expect(result.current.user.email).toEqual('sandro@sandro.dev');
  });

  it('should restore saved data from storage when auth inits', async () => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(key => {
      switch (key) {
        case '@GoBarber:token':
          return 'token-123';
        case '@GoBarber:user':
          return JSON.stringify({
            id: 'id-123',
            name: 'Sandro Santos',
            email: 'sandro@sandro.dev',
          });
        default:
          return null;
      }
    });

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    expect(result.current.user.email).toEqual('sandro@sandro.dev');
  });

  it('should be able to sign out', async () => {
    const apiResponse = {
      user: {
        id: 'id-123',
        name: 'Sandro Santos',
        email: 'sandro@sandro.dev',
      },
      token: 'token-123',
    };

    apiMock.onPost('sessions').reply(200, apiResponse);

    const { result, waitForNextUpdate } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    const removeItemSpy = jest.spyOn(Storage.prototype, 'removeItem');

    result.current.signIn({
      email: 'sandro@sandro.dev',
      password: '123456',
    });

    act(() => {
      result.current.signOut();
    });

    await waitForNextUpdate();

    expect(removeItemSpy).toHaveBeenCalledTimes(2);
  });
});
