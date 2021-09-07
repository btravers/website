import * as React from "react"

import SkillSet from "../components/SkillSet"
import SectionTitle from "../components/SectionTitle"
import GitHub from "../components/GitHub"

import logo from "../images/logo.svg"
import logoLarge from "../images/logo-large.svg"
import workingGuyIllustration from "../images/22.svg"
import skillsIllustration from "../images/421.svg"
import experiencesIllustration from "../images/90.svg"
import educationIllustration from "../images/94.svg"
import Experience from "../components/Experience"
import LinkedIn from "../components/LinkedIn"
import Education from "../components/Education"
import Footer from "../components/Footer"

const skillSets = [
  {
    name: "Langages",
    skills: [
      {
        name: "Java",
        mark: 3, 
      },
      {
        name: "Kotlin",
        mark: 3, 
      },
      {
        name: "JavaScript",
        mark: 3, 
      },
      {
        name: "TypeScript",
        mark: 2, 
      },
    ],
  },

  {
    name: "Backend",
    skills: [
      {
        name: "Spring Boot",
        mark: 3, 
      },
      {
        name: "Node.js",
        mark: 2, 
      },
    ],
  },

  {
    name: "Données",
    skills: [
      {
        name: "PostgreSQL",
        mark: 3, 
      },
      {
        name: "Elasticsearch",
        mark: 3, 
      },
      {
        name: "MongoDB",
        mark: 2, 
      },
      {
        name: "Apache Kafka",
        mark: 3, 
      },
      {
        name: "RabbitMQ",
        mark: 3, 
      },
    ],
  },

  {
    name: "Frontend",
    skills: [
      {
        name: "React.js",
        mark: 3, 
      },
    ],
  },

  {
    name: "Autres",
    skills: [
      {
        name: "Docker",
        mark: 3, 
      },
      {
        name: "Kubernetes",
        mark: 3, 
      },
      {
        name: "Git",
        mark: 3, 
      },
      {
        name: "Gitlab CI/CD",
        mark: 3, 
      },
      {
        name: "Keycloak",
        mark: 2, 
      },
    ],
  },
]

const experiences = [
  {
    title: "Lead développeur backend",
    company: "Ouest-France",
    location: "Rennes, France",
    period: {
      start: new Date(2018, 0),
      end: new Date(2019, 8),
    },
    description: "Ouest-France développe une plateforme pour l'hébergement des sites web du groupe SIPA dont le site principal est celui de Ouest-France. Cette nouvelle plateforme est consituée principalement de trois briques :",
    skills: ["Kotlin", "Java", "Spring Boot", "Spring Webflux", "Elasticsearch", "RabbitMQ", "PostgreSQL", "Kubernetes", "Docker", "Prometheus", "Grafana", "Kafka"],
  },
]

const education = [
  {
    school: "Institut National des Sciences Appliquées",
    title: "Diplôme d'ingénieur en informatique",
    location: "Rennes, France",
    period: {
      start: new Date(2010, 8),
      end: new Date(2015, 6),
    },
  }
]

const IndexPage = () => {
  return (
    <main>
      <title>Benoit TRAVERS</title>

      <div>
        <img className="h-8 m-6 ml-20" src={logoLarge} alt="logo" />
      </div>

      <div className="max-w-screen-xl m-auto">

        <div className="mt-32 grid grid-cols-2 items-center">
          <div>
            <img className="w-4/6" src={logo} alt="logo" />
            <h2 className="text-4xl text-primary-800 mt-2 mb-3">développeur full stack senior <br /> basé à Rennes, France</h2>
            <div className="inline-grid grid-cols-2 mt-6 mb-8 gap-5">
              <a href="https://www.linkedin.com/in/btraversfr/" target="_blank" rel="noopener noreferrer">
                <LinkedIn />
              </a>
              <a href="https://www.github.com/btravers/" target="_blank" rel="noopener noreferrer">
                <GitHub />
              </a>
            </div>
          </div>
          <img className="" src={workingGuyIllustration} alt="" />
        </div>

        <div className="text-lg mt-10 mb-20">
          <p>Avec plus de 6 ans d'expérience en développement, j'ai été amené à évoluer dans des contextes riches et variés.</p>
          <p>Du backend au frontend, j'aime répondre à des problématiques complexes, en concevant puis en développant les solutions les plus simples possible.</p>
          <p>En parallèle, je suis également formateur sur les technologies que j'utilise au quotidien : Git, React, Java, JavaScript, etc.</p>
        </div>

        <div>
          <SectionTitle value="compétences" illustration={skillsIllustration} />

          <div className="grid grid-cols-2 gap-x-20 gap-y-10">
            {skillSets.map(skillSet => <SkillSet {...skillSet} />)}
          </div>
        </div>

        <div>
          <SectionTitle value="expériences" illustration={experiencesIllustration} />

          <div>
            {experiences.map(experience => <Experience {...experience} />)}
          </div>
        </div>

        <div>
          <SectionTitle value="études" illustration={educationIllustration} />

          <div>
            {education.map(e => <Education {...e} />)}
          </div>
        </div>

        <Footer />

      </div>
      
    </main>
  )
}

export default IndexPage
