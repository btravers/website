import * as React from "react"
import PropTypes from "prop-types"

const FooterRef = ({ href, children }) => (
    <a className="underline" href={href} target="_blank" rel="noopener noreferrer">{children}</a>
)

FooterRef.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
}

const Footer = () => (
    <footer className="flex flex-col items-center gap-1 px-5 py-12 w-full bg-primary-800 text-white">
        <div>Handcrafted with ❤️ by me</div>
        <div>Using <FooterRef href="https://www.gatsbyjs.com/">Gatsby</FooterRef> + <FooterRef href="https://tailwindcss.com/">tailwindcss</FooterRef></div>
        <div>Source code on <FooterRef href="https://www.github.com/btravers/website/">GitHub</FooterRef></div>
    </footer>
)

export default Footer