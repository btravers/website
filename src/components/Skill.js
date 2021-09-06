import * as React from "react"
import PropTypes from "prop-types"

import SkillLevel from "./SkillLevel"

const Skill = ({ name, mark, wanted }) => (
    <div className="grid grid-cols-3 pt-2 pb-2">
        <div className="text-lg">{name}</div>
        <div></div>
        <div className="grid grid-cols-3 gap-px">
            <SkillLevel level="Débutant" hilighted={mark>0} />
            <SkillLevel level="Intermédiaire" hilighted={mark>1} />
            <SkillLevel level="Confirmé" hilighted={mark>2} />
        </div>
    </div>
)

Skill.propTypes = {
    name: PropTypes.string.isRequired,
    mark: PropTypes.oneOf([1, 2, 3]).isRequired,
    wanted: PropTypes.bool.isRequired,
}

export default Skill