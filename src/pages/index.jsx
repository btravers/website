import * as React from "react"

import SEO from "../components/seo"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Intro from "../components/Intro"
import SkillsSection from "../components/SkillsSection"
import ProfessionalExperiencesSection from "../components/ProfessionalExperiencesSection"
import SchoolExperiencesSection from "../components/SchoolExperiencesSection"
import Footer from "../components/Footer"
import ParallaxBackground from "../components/ParallaxBackground"

const IndexPage = () => (
    <main className="parallax bg-gray-50">
      <SEO />

      <div className="z-10 h-screen">
          <Header />
          <Hero />
      </div>

      <div className="z-10 max-w-screen-lg m-auto flex flex-col">

        <Intro />

        <SkillsSection />
        <ProfessionalExperiencesSection />
        <SchoolExperiencesSection />

      </div>

      <Footer />

      <ParallaxBackground />
      
    </main>
  )

export default IndexPage
