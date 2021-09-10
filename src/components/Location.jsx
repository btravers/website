import * as React from "react"

import LocationIcon from "./LocationIcon"

const Location = ({ value }) => (
    <div className="inline-flex gap-2">
        <LocationIcon />
        <span>{value}</span>
    </div>
)

export default Location