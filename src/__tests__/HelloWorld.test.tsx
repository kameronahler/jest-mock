import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HelloWorld from '../HelloWorld';

describe('<HelloWorld>', () => {
  it('renders heading', () => {
    render(<HelloWorld />);
    screen.debug();
    const subject = screen.getByRole('heading');
    expect(subject).toBeInTheDocument();
  });
});
