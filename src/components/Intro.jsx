import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Section from "./Section"

const Intro = () => (
    <Section>
        <div className="container max-w-6xl xl:divide-x-2 grid gap-8 xl:grid-cols-3 items-center mx-auto my-10 px-5">
            <StaticImage className="mx-auto rounded-full h-60 w-60 xl:rounded-none xl:h-auto xl:w-auto xl:max-w-xs" src="../images/me.jpg" placeholder="blurred" layout="constrained" alt="me" />
            <div className="xl:col-span-2 flex flex-col gap-6 text-lg xl:pl-8">
                <p>Avec plus de 6 ans d&apos;expérience en développement logiciel, j&apos;ai été amené à évoluer dans des contextes riches et variés :</p>
                <ul className="list-disc list-inside pl-8 -mt-6">
                    <li className="my-2">étude de faisabilité à travers la réalisation de PoC pour le compte Ouest-France,</li>
                    <li className="my-2">réalisation complète d&apos;une solution SaaS partant d&apos;une feuille blanche et répondant au besoin exprimé par Cinquième de Couv,</li>
                    <li className="my-2">développement puis maintient en condition opérationnelle d&apos;applications soumises à de forts traffics pour le compte de Ouest-France.</li>
                </ul>
                <p>Du backend au frontend, j&apos;aime répondre à des problématiques complexes, en concevant puis en développant les solutions les plus simples possible.</p>
                <p>En parallèle, je suis également formateur sur les technologies que j&apos;utilise au quotidien : Git, React, Java, JavaScript, etc.</p>
                <p>Aujourd&apos;hui, après plus de 6 années passées dans le monde du service, je propose mes services en tant que développeur freelance sur la région rennaise et à Paris.</p>
            </div>
        </div>
    </Section>
)

export default Intro