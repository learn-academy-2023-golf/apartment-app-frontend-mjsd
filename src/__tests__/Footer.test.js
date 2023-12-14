import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer'
import { BrowserRouter } from 'react-router-dom'

describe("<Footer />", () => {
  it("has a copyright", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    screen.logTestingPlaygroundURL()
    const footer = screen.getByText(/&copy; 2023 | MJSD \|/i)
    expect(footer).toBeInTheDocument()
  })
})