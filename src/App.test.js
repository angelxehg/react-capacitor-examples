import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

test('renders title', () => {
  render(<App />);
  // const linkElement = screen.getByText(/React + Capacitor Examples/i);
  // expect(linkElement).toBeInTheDocument();
});
