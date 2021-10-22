import React from "react"

import TitleSection from "./TitleSection"
import IntroSection from "./IntroSection"
import SkillsSection from "./SkillsSection"
import WorkExperienceSection from "./WorkExperienceSection"
import EducationSection from "./EducationSection"
import ContactFormSection from "./ContactFormSection"
import Footer from "./Footer"

const WebLayout = () => (
    <div className="bg-grey-50 text-primary-800 overflow-x-hidden print:hidden">
        <TitleSection/>
        <IntroSection/>
        <SkillsSection/>
        <WorkExperienceSection/>
        <EducationSection/>
        <ContactFormSection/>
        <Footer/>
    </div>
)

export default WebLayout