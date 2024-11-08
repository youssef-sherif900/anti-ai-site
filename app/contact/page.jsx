import React from 'react'
import ContactForm from './component/ContactForm'
import SocialIcons from './component/socialIcons'

function ContactPage() {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between p-4 md:p-16 items-center h-auto md:h-screen text-white bg-[#020202]">
      <div className="w-full md:w-1/3 pr-0 md:pr-8 mb-8 md:mb-0 mt-12 md:mt-0 text-center lg:text-left">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="mb-8 text-pretty">
          We're dedicated to safeguarding the future of humanity through ethical and responsible AI
          development. If you share our vision or have any inquiries, we'd love to hear from you.
        </p>
        <SocialIcons />
      </div>
      <div className="w-full md:w-1/2">
        <ContactForm />
      </div>
    </div>
  )
}

export default ContactPage
