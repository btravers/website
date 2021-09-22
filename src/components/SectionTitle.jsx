import * as React from "react"
import PropTypes from "prop-types"

const SectionTitle = ({ value, illustration }) => (
    <div className="w-full dark flex flex-col items-center py-8">
        <img className="mx-auto h-32 w-auto" src={illustration} alt="" />
        <h3 className="text-4xl capitalize">{value}</h3>
    </div>
)

SectionTitle.propTypes = {
    value: PropTypes.string.isRequired,
    illustration: PropTypes.string.isRequired,
}

export default SectionTitle