import { createSlice } from "@reduxjs/toolkit"

const filtersSlice = createSlice({
  name: "filters",
  initialState: [],
  reducers: {
    addFilter(state, action) {
      return action.payload
    },
    removeFilter: {
      reducer(state, action) {
        const newFilters = state.filter((el) => el !== action.payload)
        return newFilters
      }
    },
    clearFilters: {
      reducer() {
        return []
      }
    }
  }
})

export const { addFilter, removeFilter, clearFilters } = filtersSlice.actions

export default filtersSlice.reducer
