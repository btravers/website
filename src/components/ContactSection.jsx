import React from "react"
import PropTypes from "prop-types"

import Section from "./Section";

import illustration from "../images/43.svg"

const Input = ({label, type, name}) => (
    <div className="max-w-5xl mx-auto flex flex-col w-full">
        <label className="capitalize font-light" htmlFor={name}>{label}</label>
        <input
            className="rounded mt-2 mb-6 py-2 px-4 text-primary-800 focus:outline-none"
            type={type}
            name={name}
            id={name}
            required
        />
    </div>
)

Input.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

const TextArea = ({label, name}) => (
    <div className="flex flex-col w-full">
        <label className="capitalize font-light" htmlFor={name}>{label}</label>
        <textarea
            className="rounded mt-2 mb-6 py-2 px-4 h-56 text-primary-800 focus:outline-none"
            name={name}
            id={name}
            required
        />
    </div>
)

TextArea.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

const ContactSection = () => (
    <Section title={{value: "Me contacter", illustration}} dark hideNextButton>
        <form
            className="max-w-4xl w-full mx-auto px-5 flex flex-col gap-5 items-center"
            method="post"
            action="https://getform.io/f/96ec8850-3156-47da-9b22-cd5eee9ddf7d"
        >
            <Input label="email" type="email" name="email"/>
            <Input label="nom" type="text" name="name"/>
            <TextArea label="message" type="text" name="message"/>
            <div className="flex gap-3 justify-end w-full">
                <button className="btn bg-secondary text-white" type="submit">Envoyer</button>
                <input className="btn border border-white bg-primary-800 text-white" type="reset" value="Annuler"/>
            </div>
        </form>
    </Section>
)

export default ContactSection