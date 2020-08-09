import React from "react"
import PropTypes from "prop-types"
import { Container, Content, ListOfFilters, Clear } from "./styles"
import FilterButton from "../FilterButton"

const Filters = ({ filters, remove, clearAll }) => {
  return (
    <Container>
      {filters && filters.length > 0 && (
        <Content>
          <ListOfFilters>
            {filters.length > 0 &&
              filters.map((filter) => (
                <FilterButton key={filter} remove={remove}>
                  {filter}
                </FilterButton>
              ))}
          </ListOfFilters>
          <Clear onClick={clearAll}>Clear</Clear>
        </Content>
      )}
    </Container>
  )
}
Filters.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string),
  remove: PropTypes.func,
  clearAll: PropTypes.func
}
export default Filters
