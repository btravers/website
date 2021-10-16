import * as React from "react"
import me from "../images/me.jpg"

const Portrait = () => (
    <img
        className="object-cover rounded-full w-60 h-60 xl:rounded-none xl:h-auto xl:w-auto xl:max-w-xs"
        src={me}
        alt="me"
    />
)

export default Portrait