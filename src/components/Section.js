import * as React from "react"

const Section = ({ children }) => (
    <div className="z-10 my-10 p-5 backdrop-filter backdrop-blur-sm">
        {children}
    </div>
)

export default Section