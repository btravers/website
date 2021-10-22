import * as React from "react"

import me from "../images/me.png"

const Portrait = () => (
    <img
        className="object-cover rounded-full shadow-lg w-60 h-60 bg-primary-200 xl:rounded-none xl:h-auto xl:w-auto xl:max-w-xs"
        src={me}
        alt="me"
    />
)

export default Portrait