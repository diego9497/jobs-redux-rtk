import React, { useCallback } from "react"
import Badge from "../Badge"
import {
  Card,
  Logo,
  CompanyBadge,
  Info,
  Title,
  CompanyContainer,
  Resume
} from "./styles"
import { addFilter } from "../../features/filters/filtersSlice"
import { useSelector, useDispatch } from "react-redux"

/**
 * @typedef {Object} Job
 * @property {string} company Nombre de la empresa
 * @property {string} logo
 * @property {string} featured
 * @property {string} new
 * @property {string} role
 * @property {string} level
 * @property {string} postedAt
 * @property {string} contract
 * @property {string} location
 * @property {string[]} languages
 * @property {string} tools
 */

/**
 * @param {Job} props
 */
const JobCard = (props) => {
  const {
    company,
    logo,
    featured,
    new: isNew,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools
  } = props
  const filters = useSelector((state) => state.filters)
  const dispatch = useDispatch()

  const clickAddFilter = useCallback((filter) => {
    const i = filters.indexOf(filter)
    if (i !== -1) {
      return null
    }
    const newFilters = [...filters, filter]
    dispatch(addFilter(newFilters))
  })

  return (
    <Card>
      <Info>
        <Logo src={logo} alt={company} />
        <div>
          <CompanyContainer>
            <h3>{company}</h3>
            {isNew && <CompanyBadge className="light">NEW!</CompanyBadge>}
            {featured && <CompanyBadge className="dark">FEATURED</CompanyBadge>}
          </CompanyContainer>
          <Title>{position}</Title>
          <Resume>
            <span>{postedAt}</span>
            <span>{contract}</span>
            <span>{location}</span>
          </Resume>
        </div>
      </Info>
      <div>
        <Badge
          onClick={() => {
            clickAddFilter(role)
          }}
        >
          {role}
        </Badge>
        <Badge
          onClick={() => {
            clickAddFilter(level)
          }}
        >
          {level}
        </Badge>
        {languages &&
          languages.map((language) => (
            <Badge
              onClick={() => {
                clickAddFilter(language)
              }}
              key={language}
            >
              {language}
            </Badge>
          ))}
        {tools &&
          tools.map((tool) => (
            <Badge
              onClick={() => {
                clickAddFilter(tool)
              }}
              key={tool}
            >
              {tool}
            </Badge>
          ))}
      </div>
    </Card>
  )
}
export default React.memo(JobCard)
