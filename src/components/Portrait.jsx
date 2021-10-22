import * as React from "react"

import me from "../images/me.webp"

const Portrait = () => (
    <img
        className="object-cover rounded-full shadow-lg w-60 h-60 bg-gradient-to-tr from-secondary-800 via-secondary-600 to-secondary-400 xl:h-80 xl:w-80"
        src={me}
        alt="me"
    />
)

export default Portrait