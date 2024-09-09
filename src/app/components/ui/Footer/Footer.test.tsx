import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Footer } from '.'

describe('component Footer', () => {
  it('should render component Footer', () => {
    render(<Footer />);

    const anchorElement = screen.getByRole('link');
    expect(anchorElement).toBeInTheDocument();

    const imageElement = screen.getByRole('img');
    expect(imageElement).toBeInTheDocument();

    // const text = screen.findByText(/Made with ♥ by Roberto and Hypesoft/i);
    // expect(text).toBeDefined();

    // const spanElement = screen.getByText('Hypesoft');
    // expect(spanElement.tagName).toBe('SPAN')
    const text = screen.getByTestId('text-footer');
    expect(text).toBeInTheDocument();
  })  
})