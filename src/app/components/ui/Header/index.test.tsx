import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Header } from '.'

describe("Componente Header", () => {
  it('Should render links Header', () => {
    render( <Header /> )

    const aboutLink = screen.getByText('About');
    const servicestLink = screen.getByText('Services');
    const worksLink = screen.getByText('Works');
    const contactLink = screen.getByText('Contact');

    expect(aboutLink).toBeInTheDocument();
    expect(servicestLink).toBeInTheDocument();
    expect(worksLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();

    expect(aboutLink).toHaveAttribute('href', '/#section-about');
    expect(servicestLink).toHaveAttribute('href', '/#section-services');
    expect(worksLink).toHaveAttribute('href', '/#section-works');
    expect(contactLink).toHaveAttribute('href', '/#section-contact');
  })

  it('should correct estructure Header', () => {
    render( <Header /> )

    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(4)
  })

})