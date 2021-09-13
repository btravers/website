import * as React from "react"
import PropTypes from "prop-types"

const SectionTitle = ({ value, illustration }) => (
    <div className="w-full flex flex-col items-center mb-8">
        <img className="mx-auto max-w-xs w-full" src={illustration} alt="" />
        <h3 className="text-4xl text-primary-800 capitalize -mt-3">{value}</h3>
    </div>
)

SectionTitle.propTypes = {
    value: PropTypes.string.isRequired,
    illustration: PropTypes.string.isRequired,
}

export default SectionTitle