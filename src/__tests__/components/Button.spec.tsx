import React from 'react';
import { render } from '@testing-library/react';

import Button from '../../components/Button';

describe('Button component', () => {
  it('should be able to render a button component', () => {
    const { getByText } = render(<Button type="button">Testar</Button>);

    const buttonElement = getByText('Testar');

    expect(buttonElement).toBeTruthy();
  });
});
