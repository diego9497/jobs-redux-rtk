import React from "react"
import { Container } from "./styles"

const FilterButton = ({ children, remove }) => {
  return (
    <Container>
      <span>{children}</span>
      <button onClick={() => remove(children)}>X</button>
    </Container>
  )
}
export default FilterButton
