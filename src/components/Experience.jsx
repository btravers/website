import * as React from "react"
import PropTypes from "prop-types"
import { MDXProvider } from "@mdx-js/react"

import Location from "./Location"
import Calendar from "./Calendar"

/* eslint-disable react/jsx-props-no-spreading, jsx-a11y/heading-has-content */
const ul = props => <ul className="list-disc list-inside pl-8" {...props} />
const li = props => <li className="my-2" {...props} />
const p = props => <p className="my-2" {...props} />
const h3 = props => <h3 className="text-lg mt-3 mb-2" {...props} />
/* eslint-enable react/jsx-props-no-spreading, jsx-a11y/heading-has-content */

const components = { ul, li, p, h3 }

const Experience = ({ organisation, title, location, start, end, children }) => (
    <MDXProvider components={components}>
        <div>
            <div className="text-xl text-primary-800 font-bold my-1">{organisation}</div>
            <div className="text-lg text-primary-800 my-1">{title}</div>
            <div className="inline-flex gap-10 text-neutral">
                <Location value={location} />
                <Calendar start={start} end={end} />
            </div>
            {children}
        </div>
    </MDXProvider>
)

Experience.defaultProps = {
    children: null,
}

Experience.propTypes = {
    organisation: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
}

export default Experience