import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

describe("<App /", () => {
  it("renders a greeting", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )

    const greeting = screen.getByText("Welcome to MJSD Apartments!")
    expect(greeting).toBeInTheDocument()
  })

  it("has a heading", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )

    const heading = screen.getByRole('heading', {
      name: /Welcome to MJSD Apartments!/i
    })
  })
})