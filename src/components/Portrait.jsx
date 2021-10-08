import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Portrait = () => (
    <StaticImage 
        className="rounded-full h-60 w-60 xl:rounded-none xl:h-auto xl:w-auto xl:max-w-xs" 
        src="../../images/me.jpg" 
        placeholder="blurred" 
        layout="constrained" 
        alt="me" 
    />
)

export default Portrait