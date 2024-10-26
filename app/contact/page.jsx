import React from 'react'
import ContactForm from './component/ContactForm'
import SocialIcons from './component/socialIcons'

function ContactPage() {
  return (
    <div className="flex justify-between p-16 items-center h-screen text-white ">
      <div className="w-1/3 pr-8">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="mb-8 text-pretty">
          We're dedicated to safeguarding the future of humanity through ethical and responsible AI
          development. If you share our vision or have any inquiries, we'd love to hear from you.
        </p>
        <SocialIcons />
      </div>
      <div className="w-1/2">
        <ContactForm />
      </div>
    </div>
  )
}

export default ContactPage