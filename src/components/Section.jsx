import React, { useRef, useState, useEffect } from "react"
import PropTypes from "prop-types"

import Arrow from "./Arrow"

const Section = ({ dark, children }) => {
    const ref = useRef(null)

    const [anchorTarget, setAnchorTarget] = useState(null)
    
    useEffect(() => setAnchorTarget(ref.current.nextSibling), [ref.current])

    const jumpToNextSection = event => {
        event.preventDefault()
        anchorTarget.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    return (
        <div className={`min-h-screen flex flex-col items-center ${dark ? "bg-primary-800 text-white" : "bg-gray-50 text-primary-800"}`} ref={ref}>
            <div className="flex-grow w-full flex justify-items-center items-strech">
                {children}
            </div>
            <Arrow onClick={jumpToNextSection} />
        </div>
    )
}

Section.defaultProps = {
    dark: false,
}

Section.propTypes = {
    dark: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
}

export default Section