import * as React from "react"
import PropTypes from "prop-types"

import Experience from "./Experience"

function dateFormatter(date) {
    return date.toLocaleDateString("fr-FR", { year: "numeric", month: "short" })
}

const SchoolExperience = ({ school, title, location, period: { start, end } }) => (
    <Experience 
        organisation={school}
        title={title}
        location={location}
        start={dateFormatter(start)}
        end={dateFormatter(end)}
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