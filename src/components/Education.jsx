import * as React from "react"
import PropTypes from "prop-types"

import Location from "./Location"
import Calendar from "./Calendar"

const Education = ({ school, title, location, period }) => (
    <div>
        <div className="text-xl text-primary-800 font-bold my-1">{school}</div>
        <div className="text-lg text-primary-800 my-1">{title}</div>
        <div className="inline-flex gap-10 text-neutral">
            <Location value={location} />
            <Calendar {...period} />
        </div>
    </div>
)

Education.propTypes = {
    title: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    period: PropTypes.shape({
        start: PropTypes.instanceOf(Date).isRequired,
        end: PropTypes.instanceOf(Date).isRequired,
    }).isRequired,
}


export default Education