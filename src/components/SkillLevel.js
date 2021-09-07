import * as React from "react"
import PropTypes from "prop-types"

const SkillLevel = ({ level, hilighted }) => (
    <div className={`h-1 w-10 rounded-sm ${hilighted ? "bg-gray-700" : "bg-gray-300"}`} title={level}></div>
)

SkillLevel.propTypes = {
    level: PropTypes.string.isRequired,
    hilighted: PropTypes.bool.isRequired,
}

export default SkillLevel