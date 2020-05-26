import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


it('Loads up the home page correctly', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Home Page/i);
  expect(linkElement).toHaveTextContent("Home Page");
});

it('Does not display the About About on load', () => {
  const {queryByText} = render(<App />);
  const shouldNotExist = queryByText(/About Page/i);
  expect(shouldNotExist).not.toBeInTheDocument();
})
