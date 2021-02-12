import { render } from '@testing-library/react';
import React from 'react';
import SignIn from '../../pages/SignIn';

jest.mock('react-router-dom', () => {
  return {
    useHistory: jest.fn(),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('SignIn page', () => {
  it('should be abble to sign in', () => {
    const { debug } = render(<SignIn />);

    debug();
  });
});
