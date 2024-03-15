import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import Footer from '..'
import { expect } from 'vitest'

describe('<Footer />', () => {
  it('should render correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    )
    expect(screen.getByAltText('EFOOD'))

    expect(container.firstChild).toMatchSnapshot()
  })
})