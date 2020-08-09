import React, { useState, useEffect, useCallback } from "react"
import JobsComponent from "../components/Jobs"
import data from "../../data.json"
import { useSelector } from "react-redux"

const Jobs = (props) => {
  const filters = useSelector((state) => state.filters)
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    setJobs(filterData(filters))
  }, [filters])

  const filterData = useCallback(() => {
    let newData = data
    if (filters.length === 0) {
      return data
    } else {
      for (let i = 0; i < filters.length; i++) {
        newData = [...filterInData(newData, filters[i])]
      }
    }
    return newData
  }, [filters])

  const filterInData = useCallback((dataFiltered, filter) => {
    return dataFiltered.filter((job) => {
      const inLevel = job.level === filter
      const inRole = job.role === filter
      const inLang =
        job.languages && job.languages.some((lang) => lang === filter)
      const inTool = job.tools && job.tools.some((tool) => tool === filter)
      return inLevel || inRole || inLang || inTool
    })
  })

  return <JobsComponent jobs={jobs} />
}
export default Jobs
