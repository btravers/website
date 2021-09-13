import * as React from "react"
import PropTypes from "prop-types"

import Experience from "./Experience"

const SchoolExperience = ({ school, title, location, period }) => (
    <Experience 
        organisation={school}
        title={title}
        location={location}
        period={period}
    />
)

SchoolExperience.propTypes = {
    title: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    period: PropTypes.shape({
        start: PropTypes.instanceOf(Date).isRequired,
        end: PropTypes.instanceOf(Date).isRequired,
    }).isRequired,
}

export default SchoolExperience