import React from "react"
import PropTypes from "prop-types"
import {useInView} from "react-intersection-observer"

import * as styles from "./Animated.module.css"

const Animated = ({animation, children}) => {
    const {ref, inView} = useInView({
        threshold: 0,
        triggerOnce: true,
    })
    return (
        <div ref={ref} className="w-full">
            <div className={`${styles.animated} ${inView ? `${styles[animation]} block` : "hidden"} print:block`}>
                {children}
            </div>
        </div>
    )
}

Animated.propTypes = {
    animation: PropTypes.oneOf(["fadeIn", "fadeInRight", "fadeInLeft", "fadeInUp"]).isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
}

export default Animated