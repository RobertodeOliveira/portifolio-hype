import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Anchor } from '.';

describe('Component Anchor', () => { 
  it('should render component', () => { 

    render(<Anchor variant='primary'>click here</Anchor>)

    const elementLink = screen.getByText('click here')
    expect(elementLink).toBeInTheDocument()
  })
})