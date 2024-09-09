import '@testing-library/jest-dom'
import { SectionCompanies } from '.'
import { render, screen } from '@testing-library/react'

describe('SectionCompanies components', () => {

  const sectionCompanies = {
    text: 'I have 2 years of professional',
    href: 'https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Aorganization%3A91073868&keywords=Allian%C3%A7a&origin=ENTITY_SEARCH_HOME_HISTORY&sid=6w*'
  }

  it('shoud render section', () => {

    render(<SectionCompanies />)

    const headingElement = screen.getByTestId('heading');
    expect(headingElement).toBeInTheDocument();
  })
})