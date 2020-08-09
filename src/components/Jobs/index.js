import React from "react"
import JobCard from "../JobCard"
import { Container } from "./styles"

const Jobs = ({ jobs }) => {
  return (
    <Container>
      {jobs ? (
        jobs.map((job) => <JobCard {...job} key={job.id} />)
      ) : (
        <p>Cargando...</p>
      )}
    </Container>
  )
}
export default React.memo(Jobs)
