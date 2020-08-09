import React from "react"
import PropTypes from "prop-types"
import { Button } from "./styles"

const Badge = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>
}

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}
export default Badge
