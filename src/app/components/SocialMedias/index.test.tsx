import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { SectionHeader } from '../sections/SectionHeader'

describe('SectionHeader', () => {
  it('Render component SectionHeader', async () => {

    const HeaderProps = {
      title: 'My Service'
    }

    render(<SectionHeader title={HeaderProps.title} />) 

    const text = await screen.getByText(HeaderProps.title)
    expect(text).toBeInTheDocument();

  })
})