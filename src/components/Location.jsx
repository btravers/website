import React from "react"
import PropTypes from "prop-types"

import LocationIcon from "./icons/LocationIcon"

const Location = ({value}) => (
    <div className="inline-flex gap-2 items-center">
        <span className="print:hidden">
            <LocationIcon/>
        </span>
        <span>{value}</span>
    </div>
)

Location.propTypes = {
    value: PropTypes.string.isRequired,
}

export default Location