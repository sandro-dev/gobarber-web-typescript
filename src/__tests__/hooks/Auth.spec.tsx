import { renderHook } from '@testing-library/react-hooks';

import MockAdapter from 'axios-mock-adapter';
import { useAuth, AuthProvider } from '../../hooks/Auth';

import api from '../../services/api';

const apiMock = new MockAdapter(api);

describe('Auth hook', () => {
  it('should be able to sign in', async () => {
    apiMock.onPost('sessions').reply(200, {
      user: {
        id: 'id-123',
        name: 'Sandro Santos',
        email: 'sandro@sandro.dev',
      },
      token: 'token-123',
    });

    const { result, waitForNextUpdate } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    result.current.signIn({
      email: 'sandro@sandro.dev',
      password: '123456',
    });

    await waitForNextUpdate();

    expect(result.current.user.email).toEqual('sandro@sandro.dev');
  });
});
