import * as React from "react"

const parallaxLevels = ["parallax__layer--base", "parallax__layer--back", "parallax__layer--deep"]

const ParallaxLayer = ({ level, children }) => (
    <div className={`parallax__layer ${parallaxLevels[level]}`}>
        {children}
    </div>
)

export default ParallaxLayer