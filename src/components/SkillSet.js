import * as React from "react"
import PropTypes from "prop-types"

import Skill from "./Skill"

const SKillSet = ({ name, skills }) => (
    <div>
        <h4 className="text-lg mt-4 mb-3">{name}</h4>
        <div className="divide-y divide-gray-200 divide-solid">
            {skills.map(skill => <Skill {...skill} />)}
        </div>
    </div>
)

SKillSet.propTypes = {
    name: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(Skill.propTypes).isRequired,
}

export default SKillSet