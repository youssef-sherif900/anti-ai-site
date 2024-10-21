import React from 'react'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

function SocialIcons() {

  return (
    <div className="flex space-x-6">
      <Linkedin className="w-6 h-6 text-gray-600 hover:text-blue-400" />
      <Instagram className="w-6 h-6 text-gray-600 hover:text-blue-400" />
      <Facebook className="w-6 h-6 text-gray-600 hover:text-blue-400" />
    </div>
  )
}

export default SocialIcons