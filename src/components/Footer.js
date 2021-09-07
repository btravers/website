import * as React from "react"

const FooterRef = ({ href, children }) => (
    <a className="underline" href={href} target="_blank" rel="noopener noreferrer">{children}</a>
)

const Footer = () => (
    <footer className="flex flex-col items-center gap-1 mt-10 py-5 w-full text-primary-800">
        <div>Handcrafted with ❤️ by me</div>
        <div>Using <FooterRef href="https://www.gatsbyjs.com/">Gatsby</FooterRef> + <FooterRef href="https://tailwindcss.com/">tailwindcss</FooterRef></div>
        <div>Source code on <FooterRef href="https://www.github.com/btravers/website/">GitHub</FooterRef></div>
    </footer>
)

export default Footer