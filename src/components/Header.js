import * as React from "react"

import logoLarge from "../images/logo-large.svg"

const Header = () => (
    <header className="z-10 mx-auto">
        <img className="h-8 my-6 mx-32 hidden xl:block" src={logoLarge} alt="" />
    </header>
)

export default Header