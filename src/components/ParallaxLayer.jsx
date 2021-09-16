import * as React from "react"
import PropTypes from "prop-types"

import { parallaxLayer, parallaxLayerBase, parallaxLayerBack, parallaxLayerDeep } from "./ParallaxLayer.module.css"

const parallaxLevels = [parallaxLayerBase, parallaxLayerBack, parallaxLayerDeep]

const ParallaxLayer = ({ level, children }) => (
    <div className={`${parallaxLayer} ${parallaxLevels[level]}`}>
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