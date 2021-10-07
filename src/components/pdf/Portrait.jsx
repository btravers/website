import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Portrait = () => (
    <StaticImage className="rounded-full my-16 h-60 w-60" src="../../images/me.jpg" placeholder="blurred" layout="constrained" alt="me" />
)

export default Portrait