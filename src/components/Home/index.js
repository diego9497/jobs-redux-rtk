import React from "react"
import Layout from "../Layout"
import Jobs from "../../containers/Jobs"
import Filters from "../../containers/Filters"

const Index = () => {
  return (
    <Layout>
      <Filters />
      <Jobs />
    </Layout>
  )
}
export default Index
