import * as React from "react"

import Section from "./Section"
import Experience from "./Experience"

import illustration from "../images/90.svg"

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

const ExperiencesSection = () => (
    <Section title={{ value: "expériences", illustration }}>
        <div>
            {experiences.map(experience => <Experience {...experience} />)}
        </div>
    </Section>
)

export default ExperiencesSection