import { render, screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';
import { BrowserRouter } from 'react-router-dom'

describe("<NotFound />", () => {
  it("renders a greeting", () => {
    render(
      <BrowserRouter>
        <NotFound/>
      </BrowserRouter>
    )

    screen.logTestingPlaygroundURL()

    const notfound= screen.getByText("Oops!")
    expect(notfound).toBeInTheDocument()
  })
})