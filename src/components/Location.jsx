import * as React from "react"
import PropTypes from "prop-types"

import LocationIcon from "./LocationIcon"

const Location = ({ value }) => (
    <div className="inline-flex gap-2">
        <LocationIcon />
        <span>{value}</span>
    </div>
)

Location.propTypes = {
    value: PropTypes.string.isRequired,
}

export default Location