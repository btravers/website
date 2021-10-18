import React from "react"

import CustomizedMDXRenderer from "../CustomizedMDXRenderer"
import useIntro from "../hooks/useIntro"

const IntroPart = () => {
    const intro = useIntro()
    return (
        <div className="text-gray-700">
            <CustomizedMDXRenderer>
                {intro.body}
            </CustomizedMDXRenderer>
        </div>
    )
}

export default IntroPart