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
      description: 
`
Ouest-France développe une plateforme pour l'hébergement des sites web du groupe SIPA dont le site principal est celui de Ouest-France. 

Cette nouvelle plateforme est consituée principalement de trois briques :

* le CMS agnostique faisant l'orchestration des requêtes entrantes,
* les Block Providers fournissant des blocs de contenu à utiliser sur la plateforme. Le principal est le Block Providers Editorial, il est responsable de tous les contenus éditoriaux du groupe SIPA (articles, taxonomie et médias),
* le Page-Builder utilisé pour configurer les blocs dans les pages des sites web.
  
### Mission et tâches principales :
  
* Preuve de concept : Génération statique des contenus éditoriaux du groupe SIPA à afficher sur la plateforme.
  * Conception et développement d'un système réactif capable de construire toutes les vues matérialisées représentant les listes d'articles du site Ouest-France lors de la création / modification / suppression de contenus éditoriaux (Kafka, Kafka Streams, Java).
* Développement du Block Provider Editorial.
  * Architecture micro-service, CQRS, vue matérialisée, dénormalisation de la données optimisée pour les lectures (Kotlin, Spring Boot, Webflux, Elasticsearch, RabbitMQ, JUnit),
  * Configuration des déploiements Helm des applicatifs, Intégration continue, déploiement continu en environnement de qualification (Docker, Kubernetes, Helm, Gitlab CI/CD, Selenium),
  * Monitoring des applicatifs en environnement de qualification et de production (Spring Boot Actuator, Micrometer, Spring Boot Admin, Prometheus, Grafana, EFK),
  * Optimisation des temps de réponse et des consommations CPU / mémoire des applicatifs.
`,
      skills: ["Kotlin", "Java", "Spring Boot", "Spring Webflux", "Elasticsearch", "RabbitMQ", "PostgreSQL", "Kubernetes", "Docker", "Prometheus", "Grafana", "Kafka"],
    },

    {
      title: "Développeur full stack",
      company: "Cinquième de Couv", 
      location: "Rennes, France",
      period: {
        start: new Date(2016, 3),
        end: new Date(2017, 0),
      },
      description: 
`
Cinquième de Couv est une application de conception et d'édition de documents publicitaires (magazines, dépliants, ...) destinée au grand public.

L'application est décomposée en 3 modules techniques :

* Application publique de conception et d'édition de documents,
* Génération PDF haute qualité pour le service d'impression,
* Interface d'administratioon et de conception de modèles de documents.

### Mission et tâches principales :

* Conception et développement du produit Cinquième de Couv en environnement agile,
* Développement du frontend avec React.js / Redux, 
* Développement d'une API REST en Java / Spring Boot utilisant une base de données MongoDB,
* Développement de micro services techniques en Node.js.
`,
      skills: ["Java", "Spring Boot", "Apache Camel", "JWT", "MongoDB", "JavaScript", "Node.js", "React.js", "Redux", "Docker"],
    },
]

const ExperiencesSection = () => (
    <Section title={{ value: "expériences", illustration }}>
        <div className="flex flex-col gap-12">
            {experiences.map((experience, index) => <Experience key={index} {...experience} />)}
        </div>
    </Section>
)

export default ExperiencesSection