import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { CardWork } from './index';

describe('SectionHeader',() => {
  it('render the Component', async () => {

    const CardWorkPropsValues = {
      text: "Coffee Delivery",
      href: "https://github.com/RobertodeOliveira/coffee-delivery",
      image: "/image/edguard.svg"
    }

    render(
      <CardWork
        text={CardWorkPropsValues.text}
        href={CardWorkPropsValues.href}
        image={CardWorkPropsValues.image} 
      />
    );

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', CardWorkPropsValues.href);

    const text = screen.getByText(CardWorkPropsValues.text);
    expect(text).toBeInTheDocument();

    const image = await screen.findByTestId("card-image");
    expect(image).toHaveAttribute('src', CardWorkPropsValues.image);
  });
});