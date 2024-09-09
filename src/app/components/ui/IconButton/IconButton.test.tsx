import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { IconButton } from "."

const ButtonProps = {
  children: 'icon-test',
  href: '/teste-link'
}

describe('render iconButton', () => {
  it('should render component IconButton', () => {

    render(<IconButton href={ButtonProps.href}>{ButtonProps.children}</IconButton>)
    
    const buttonElement = screen.getByTestId("icon-button");
    expect(buttonElement).toBeInTheDocument()
  })
})