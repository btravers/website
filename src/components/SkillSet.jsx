import * as React from "react"
import PropTypes from "prop-types"

import Skill from "./Skill"

const SKillSet = ({ name, skills }) => (
    <div>
        <h4 className="text-lg mb-1 text-gray-500">{name}</h4>
        <div className="divide-y divide-gray-200 divide-solid">
            {skills.sort(({ mark: m1 }, { mark: m2 }) => m2 - m1).map(({ name: skill, mark }) => <Skill key={skill} name={skill} mark={mark} />)}
        </div>
    </div>
)

SKillSet.propTypes = {
    name: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        mark: PropTypes.oneOf([1, 2, 3]).isRequired,
    })).isRequired,
}

export default SKillSet