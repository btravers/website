import * as React from "react"
import PropTypes from "prop-types"

const SectionTitle = ({ value }) => (
    <h3 className="text-2xl capitalize mt-8 mb-2">{value}</h3>
)

SectionTitle.propTypes = {
    value: PropTypes.string.isRequired,
}

export default SectionTitle