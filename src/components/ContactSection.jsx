import React from "react"
import PropTypes from "prop-types"

import LocationIcon from "./icons/LocationIcon"
import AtIcon from "./icons/AtIcon"
import GlobeIcon from "./icons/GlobeIcon"
import PhoneIcon from "./icons/PhoneIcon"
import Section from "./Section"

const ContactSubPart = ({icon, value}) => (
    <div className="flex gap-2 items-center my-2">
        <div className="flex-none">{icon}</div>
        <div className="text-lg">{value}</div>
    </div>
)

ContactSubPart.propTypes = {
    icon: PropTypes.node.isRequired,
    value: PropTypes.string.isRequired,
}

const ContactSection = () => (
    <Section title={{value: "contact"}}>
        <div>
            <ContactSubPart
                icon={<LocationIcon/>}
                value={String.fromCharCode(50, 57, 32, 114, 117, 101, 32, 80, 46, 32, 86, 97, 114, 105, 110, 32, 100, 101, 32, 108, 97, 32, 66, 114, 117, 110, 101, 108, 105, 0x00E8, 114, 101, 44, 32, 82, 101, 110, 110, 101, 115, 32, 40, 70, 114, 97, 110, 99, 101, 41)}
            />
            <ContactSubPart
                icon={<PhoneIcon/>}
                value={String.fromCharCode(48, 55, 54, 48, 54, 48, 50, 49, 52, 52)}
            />
            <ContactSubPart
                icon={<AtIcon/>}
                value={String.fromCharCode(98, 116, 114, 97, 118, 101, 114, 115, 46, 112, 114, 111, 64, 103, 109, 97, 105, 108, 46, 99, 111, 109)}
            />
            <ContactSubPart icon={<GlobeIcon/>} value="https://btravers.fr"/>
        </div>
    </Section>
)

export default ContactSection