import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App name="Пронин Виктор" job="Web-разработчик" phone=" +7(977)832-73-68" email=" exppro1@gmail.com" />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
