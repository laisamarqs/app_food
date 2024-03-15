import '@testing-library/jest-dom'
import { screen } from '@testing-library/dom'
import { render } from '@testing-library/react'

import Tag from '..'
import { expect } from 'vitest'

describe('<Tag />', () => {
  it('should be render with the text "destaque"', () => {
    const { container } = render(<Tag text="destaque" />)

    expect(screen.findByRole('tag-container', { name: /destaque/i }))
    expect(container.firstChild).toMatchSnapshot()
  })
})