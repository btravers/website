import * as React from "react"

import me from "../images/me.webp"

const Portrait = () => (
    <img
        className="object-cover rounded-full shadow-lg w-60 h-60 bg-gradient-to-tr from-color-2-1200 via-color-2-900 to-color-2-600 xl:h-80 xl:w-80"
        src={me}
        alt="me"
    />
)

export default Portrait