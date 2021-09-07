import * as React from "react"
import PropTypes from "prop-types"

const SectionTitle = ({ value, illustration }) => (
    <div className="w-full flex flex-col items-center mt-12 mb-8">
        <img className="w-1/4" src={illustration} alt="" />
        <h3 className="text-2xl text-primary-800 capitalize -mt-3">{value}</h3>
    </div>
)

SectionTitle.propTypes = {
    value: PropTypes.string.isRequired,
}

export default SectionTitle