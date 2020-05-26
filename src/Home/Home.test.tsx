import React from 'react';
import { render } from '@testing-library/react';
import Home from "./Home";


describe('Home Page', () => {

  it('should contain genre dropdown', () => {
    const { getByTestId } = render(<Home />);
    const linkElement = getByTestId("genre-dropdown");
    expect(linkElement).toBeDefined();
  });

})


