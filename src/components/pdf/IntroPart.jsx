import React from "react"

import CustomizedMDXRenderer from "../CustomizedMDXRenderer"
import useIntro from "../hooks/useIntro"

const IntroPart = () => {
    const intro = useIntro()
    return (
        <div>
            <div className="my-10 flex flex-col gap-3">
                <h1 className="text-6xl uppercase"><span className="font-bold">Benoit</span> Travers</h1>
                <h2 className="text-2xl uppercase">Développeur backend-end</h2>
            </div>
            <div className="text-gray-700">
                <CustomizedMDXRenderer>
                    {intro.body}
                </CustomizedMDXRenderer>
            </div>
        </div>
    )
}

export default IntroPart