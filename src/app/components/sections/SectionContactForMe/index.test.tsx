import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { SectionContactForMe } from '.'

describe('component SectionContactForMe', () => { 
  it('should render button', () => { 
    const { container } = render(<SectionContactForMe />)

    const buttonElement = container.querySelector('button')
    expect(buttonElement).toBeInTheDocument()
  })

 it('validations when submitting empty form', async () => {
   render(<SectionContactForMe />)

  const buttonElement = screen.getByRole('button') 
  fireEvent.click(buttonElement)

  await waitFor(() => {
    expect(screen.getAllByText('Campo obrigatório')).toBeInTheDocument()
  })

  //infelizmente esse teste eu não consegui avançar com ele, pois ele tem um grau de dificuldade maior. Precisaria de um auxílio para destravar.

 })
})