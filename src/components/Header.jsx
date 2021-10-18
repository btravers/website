import * as React from "react"

import logoLarge from "../images/logo-large-inverted.svg"

const Header = () => (
    <header className="container mx-auto py-6 print:hidden">
        <img className="h-8 hidden xl:block" src={logoLarge} alt=""/>
    </header>
)

export default Header