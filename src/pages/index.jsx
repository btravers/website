import * as React from "react"

import SEO from "../components/SEO"
import Hero from "../components/Hero"
import IntroSection from "../components/IntroSection"
import SkillsSection from "../components/SkillsSection"
import ProfessionalExperiencesSection from "../components/ProfessionalExperiencesSection"
import SchoolExperiencesSection from "../components/SchoolExperiencesSection"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

import Page from "../components/pdf/Page"
import Portrait from "../components/Portrait"
import PdfContact from "../components/pdf/ContactPart"
import EducationPart from "../components/pdf/EducationPart"
import PdfIntro from "../components/pdf/IntroPart"
import WorkExperiencePart from "../components/pdf/WorkExperiencePart"
import SkillsPart from "../components/pdf/SkillsPart"

const IndexPage = () => (
    <main>
        <SEO/>
        <div className="bg-grey-50 text-primary-800 print:hidden">
            <Hero/>
            <IntroSection/>
            <SkillsSection/>
            <ProfessionalExperiencesSection/>
            <SchoolExperiencesSection/>
            <Contact/>
            <Footer/>
        </div>
        <div className="hidden print:block">
            <Page first>
                <div className="grid grid-cols-3 items-stretch h-full">
                    <div className="flex flex-col gap-6 pl-16 dark">
                        <div className="my-16">
                            <Portrait/>
                        </div>
                        <PdfContact/>
                        <EducationPart/>
                        <SkillsPart/>
                    </div>
                    <div className="col-span-2 flex flex-col gap-16 text-primary-800 px-12">
                        <PdfIntro/>
                        <WorkExperiencePart offset={0} size={3}/>
                    </div>
                </div>
            </Page>
            <Page margin>
                <WorkExperiencePart offset={3} size={3}/>
            </Page>
            <Page margin>
                <WorkExperiencePart offset={6}/>
            </Page>
        </div>
    </main>
)

export default IndexPage
