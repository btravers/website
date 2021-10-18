import React, {useRef, useState, useEffect} from "react"
import PropTypes from "prop-types"

import ArrowDownIcon from "./icons/ArrowDownIcon"

const SectionTitle = ({value, illustration}) => (
    <div className="w-full dark flex flex-col items-center py-8 mb-10 print:items-start print:py-0 print:my-2">
        <img className="mx-auto h-32 w-auto print:hidden" src={illustration} alt=""/>
        <h3 className="text-4xl capitalize print:text-2xl print:uppercase">{value}</h3>
    </div>
)

SectionTitle.propTypes = {
    value: PropTypes.string.isRequired,
    illustration: PropTypes.string.isRequired,
}

const Section = ({title, dark, hideNextButton, children}) => {
    const ref = useRef(null)

    const [anchorTarget, setAnchorTarget] = useState(null)

    useEffect(() => setAnchorTarget(ref.current.nextSibling), [ref.current])

    const jumpToNextSection = event => {
        event.preventDefault()
        anchorTarget.scrollIntoView({behavior: "smooth", block: "start"})
    }

    return (
        <div className={`min-h-screen flex flex-col items-center ${dark ? "dark" : ""} print:min-h-0`} ref={ref}>
            <div className="flex-grow w-full flex flex-col print:divide-y-2 print:divide-current print:w-full">
                {title && <SectionTitle value={title.value} illustration={title.illustration}/>}
                <div className={`flex-grow flex w-full container mx-auto px-5 print:px-0 ${title ? "py-8" : ""}`}>
                    {children}
                </div>
            </div>
            {
                hideNextButton ||
                <button
                    type="button"
                    className="cursor-pointer w-full flex justify-center print:hidden"
                    onClick={jumpToNextSection}
                    aria-label="jump to next section"
                >
                    <span className="animate-bounce pt-10">
                        <ArrowDownIcon/>
                    </span>
                </button>
            }
        </div>
    )
}

Section.defaultProps = {
    title: null,
    dark: false,
    hideNextButton: false,
}

Section.propTypes = {
    title: PropTypes.shape({
        value: PropTypes.string.isRequired,
        illustration: PropTypes.string.isRequired,
    }),
    dark: PropTypes.bool,
    hideNextButton: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
}

export default Section