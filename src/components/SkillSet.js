import * as React from "react"
import PropTypes from "prop-types"

import Skill from "./Skill"

const SKillSet = ({ name, skills }) => (
    <div>
        <h4 className="text-lg mb-1 text-neutral">{name}</h4>
        <div className="divide-y divide-gray-200 divide-solid">
            {skills.map((skill, index) => <Skill key={index} {...skill} />)}
        </div>
    </div>
)

SKillSet.propTypes = {
    name: PropTypes.string.isRequired,
    skills: PropTypes.array.isRequired,
}

export default SKillSet