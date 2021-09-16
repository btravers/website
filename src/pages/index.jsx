import * as React from "react"

import SEO from "../components/SEO"
import Hero from "../components/Hero"
import Intro from "../components/Intro"
import SkillsSection from "../components/SkillsSection"
import ProfessionalExperiencesSection from "../components/ProfessionalExperiencesSection"
import SchoolExperiencesSection from "../components/SchoolExperiencesSection"
import Footer from "../components/Footer"

const IndexPage = () => (
    <main className="parallax bg-gray-50">
      <SEO />
          
      <Hero />
      <Intro />
      <SkillsSection />
      <ProfessionalExperiencesSection />
      <SchoolExperiencesSection />
      <Footer />
    </main>
  )

export default IndexPage
