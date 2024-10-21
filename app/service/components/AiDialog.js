import React , {useState} from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'

function AiDialog() {

    const [isAIModalOpen, setIsAIModalOpen] = useState(false)


  return (
    <Dialog open={isAIModalOpen} onOpenChange={setIsAIModalOpen}>
    <DialogTrigger asChild>
      <Button className="mt-4">Read More</Button>
    </DialogTrigger>
    <DialogContent className="max-w-3xl">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold mb-4">Transform Your Business with ANTI.Ai's Cutting-Edge AI Solutions</DialogTitle>
      </DialogHeader>
      <div className="space-y-4 overflow-y-auto max-h-[70vh]">
        <p>
          Welcome to ANTI.Ai, where we leverage the power of AI to automate your business and 
          boost efficiency. Our suite of AI solutions includes advanced AI chatbots, intuitive AI voice 
          assistants, and dynamic AI sales bots, all designed to streamline your operations and 
          enhance customer interactions.
        </p>
        
        <h3 className="text-xl font-semibold">Why Choose ANTI.Ai for Your AI Solutions?</h3>
        <p>
          At ANTI.Ai, we understand the critical role that generative AI solutions and edge AI 
          solutions play in modern businesses. Our mission is to build safe AI solutions, contributing 
          to a world where AI is both secure and accessible.
        </p>
        
        <h3 className="text-xl font-semibold">Our Range of AI Services</h3>
        <ul className="list-disc pl-6">
          <li>AI Chatbots: Enhance customer service with our sophisticated AI chatbots.</li>
          <li>AI Voice Assistants: Automate and optimize communication channels.</li>
          <li>AI Sales Bots: Drive your sales and marketing efforts.</li>
        </ul>
        
        <h3 className="text-xl font-semibold">Leveraging AI for Your Business Success</h3>
        <p>Our AI solutions are crafted to address various industries and applications:</p>
        <ul className="list-disc pl-6">
          <li>AI Banking Solutions: Streamline banking operations.</li>
          <li>AI Beauty Solutions: Revolutionize the beauty industry.</li>
          <li>AI Building Solutions: Optimize construction and real estate.</li>
        </ul>
        
        <h3 className="text-xl font-semibold">Our Commitment to AI Excellence</h3>
        <p>
          Our commitment goes beyond delivering AI solutions; we aim to make AI safe for everyone. 
          Our motto, अन्ते सत्यं विजयते (Truth Prevails in the End), reflects our dedication to ethical AI practices.
        </p>
        
        <h3 className="text-xl font-semibold">Explore Our AI Solutions</h3>
        <p>
          Whether you're seeking Microsoft AI solutions, Azure AI solutions, or AWS AI solutions, 
          ANTI.Ai offers comprehensive services and expertise.
        </p>
        
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Contact Us Today</h3>
          <p>
            Join the growing number of businesses transforming their operations with ANTI.Ai's 
            advanced AI solutions. Discover how our AI solutions company can help you achieve 
            greater efficiency and success.
          </p>
          <p className="font-semibold mt-2">
            ANTI.Ai – Building the Future of AI, Safely and Effectively.
          </p>
        </div>
      </div>
    </DialogContent>
  </Dialog>
  )
}

export default AiDialog