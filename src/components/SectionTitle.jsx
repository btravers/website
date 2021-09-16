import * as React from "react"
import PropTypes from "prop-types"

const SectionTitle = ({ value, illustration }) => (
    <div className="w-full flex flex-col items-center bg-primary-800 py-8">
        <img className="mx-auto h-32 w-auto" src={illustration} alt="" />
        <h3 className="text-4xl text-white capitalize">{value}</h3>
    </div>
)

SectionTitle.propTypes = {
    value: PropTypes.string.isRequired,
    illustration: PropTypes.string.isRequired,
}

export default SectionTitle