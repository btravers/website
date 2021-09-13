import * as React from "react"
import PropTypes from "prop-types"

import Location from "./Location"
import Calendar from "./Calendar"

const Experience = ({ organisation, title, location, period: { start, end }, children }) => (
    <div>
        <div className="text-xl text-primary-800 font-bold my-1">{organisation}</div>
        <div className="text-lg text-primary-800 my-1">{title}</div>
        <div className="inline-flex gap-10 text-neutral">
            <Location value={location} />
            <Calendar start={start} end={end} />
        </div>
        {children}
    </div>
)

Experience.defaultProps = {
    children: null,
}

Experience.propTypes = {
    organisation: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    period: PropTypes.shape({
        start: PropTypes.instanceOf(Date).isRequired,
        end: PropTypes.instanceOf(Date).isRequired,
    }).isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
}

export default Experience