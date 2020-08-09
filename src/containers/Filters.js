import FilterComponent from "components/Filters"
import { connect } from "react-redux"
import { clearFilters, removeFilter } from "../features/filters/filtersSlice"

const Filter = ({ filters, clearFilters, removeFilter }) => {
  const clearAll = () => {
    clearFilters()
  }
  const remove = (filter) => {
    removeFilter(filter)
  }

  return (
    <FilterComponent filters={filters} clearAll={clearAll} remove={remove} />
  )
}

const mapDispatchToProps = {
  clearFilters,
  removeFilter
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
