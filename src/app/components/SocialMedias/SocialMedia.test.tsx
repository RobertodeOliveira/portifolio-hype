import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { SectionHeader } from '../sections/SectionHeader'
import { SocialMedias } from '.'

describe('SectionHeader', () => {
  it('Render component SectionHeader', async () => {

    const HeaderProps = {
      title: 'Follow me on',
    }

    render(<SocialMedias />) 

    const text = await screen.getByText(HeaderProps.title)
    expect(text).toBeInTheDocument();

    
  })
})