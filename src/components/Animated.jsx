import React from "react"
import PropTypes from "prop-types"
import {useInView} from "react-intersection-observer"

import "animate.css"

const Animated = ({animation, children}) => {
    const {ref, inView} = useInView({
        threshold: 0,
        triggerOnce: true,
    })
    return (
        <div ref={ref} className="w-full">
            <div className={`animate__animated ${inView ? `animate__${animation} block` : "hidden"} print:block`}>
                {children}
            </div>
        </div>
    )
}

Animated.propTypes = {
    animation: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
}

export default Animated