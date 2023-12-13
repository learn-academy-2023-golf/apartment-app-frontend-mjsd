import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';
import { BrowserRouter } from 'react-router-dom'

describe("<Home />", () => {
  it("renders a greeting", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )

    screen.logTestingPlaygroundURL()

    const home = screen.getByText("Welcome to MJSD Apartments!")
    expect(home).toBeInTheDocument()
  })

  it("has a heading", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )

    screen.logTestingPlaygroundURL()

    const home = screen.getByRole("heading", {
        name: /Welcome to MJSD Apartments!/i
    })
  })
})