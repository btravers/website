import * as React from "react"

import CalendarIcon from "./CalendarIcon"

function dateFormatter(date) {
    return date.toLocaleDateString("fr-FR", { year: "numeric", month: "short" })
}

const Calendar = ({ start, end }) => (
    <div className="inline-flex gap-2">
        <CalendarIcon /> 
        <span>{dateFormatter(start)} - {dateFormatter(end)}</span>
    </div>
)

export default Calendar