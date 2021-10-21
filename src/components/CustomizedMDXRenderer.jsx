import React from "react"
import PropTypes from "prop-types"
import {MDXProvider} from "@mdx-js/react"
import {MDXRenderer} from "gatsby-plugin-mdx"

/* eslint-disable react/jsx-props-no-spreading, jsx-a11y/heading-has-content */
const ul = props => <ul className="list-disc list-inside pl-8 print:pl-5" {...props} />
const li = props => <li className="my-2 print:my-1" {...props} />
const p = props => <p className="my-2 print:my-1" {...props} />
const h3 = props => <h3 className="mt-4 mb-2 print:mt-2 print:mb-1" {...props} />
/* eslint-enable react/jsx-props-no-spreading, jsx-a11y/heading-has-content */

const components = {ul, li, p, h3}

const CustomizedMDXRenderer = ({children}) => (
    <MDXProvider components={components}>
        <MDXRenderer>{children}</MDXRenderer>
    </MDXProvider>
)

CustomizedMDXRenderer.propTypes = {
    children: PropTypes.string.isRequired,
}

export default CustomizedMDXRenderer
