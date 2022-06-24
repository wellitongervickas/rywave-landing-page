import type { FC } from 'react'

interface ContactForm {
	className?: string
}

const ContactForm: FC<ContactForm> = ({ className }) => <form></form>

export default ContactForm
