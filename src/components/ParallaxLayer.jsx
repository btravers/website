import * as React from "react"
import PropTypes from "prop-types"

const parallaxLevels = ["parallax__layer--base", "parallax__layer--back", "parallax__layer--deep"]

const ParallaxLayer = ({ level, children }) => (
    <div className={`parallax__layer ${parallaxLevels[level]}`}>
        {children}
    </div>
)

ParallaxLayer.propTypes = {
    level: PropTypes.number.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
}

export default ParallaxLayer