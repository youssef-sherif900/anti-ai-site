import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function CareerPosition() {
  return (
    <div className="min-h-screen bg-background text-foreground flex  justify-between   mx-auto  py-10 px-12 ">
      <div className=" mt-[10%] w-1/2 h-full ">
        <h1 className="text-4xl font-bold mb-6">Open Positions</h1>
        <p className="mb-4">
          We at Anti.ai are always on the lookout for bright minds to join our
          team and help us in our mission. If you think you'll be a great
          addition to our team, please fill out the form below.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            You can thoroughly absorb new technology and it's impact on security
          </li>
          <li>
            You have strong problem-solving skills and ability to think
            creatively
          </li>
          <li>You are fascinated by new technical ideas</li>
          <li>
            You are detail-oriented and have excellent communication skills
          </li>
          <li>You are a team player</li>
          <li>
            You are familiar with various Machine Learning/Artificial
            Intelligence or Full Stack Web Development
          </li>
          <li>You love solving challenges and problems</li>
        </ul>
      </div>

      <form className="space-y-4 max-w-xl w-1/2 bg-gray-900 p-8 rounded-lg">
        <div>
          <label htmlFor="fullName" className="block mb-2">
            Full name
          </label>
          <Input placeholder="John Doe" required />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <Input type="email" placeholder="john@example.com" required />
        </div>
        <div>
          <label htmlFor="phone" className="block mb-2">
            Mobile number
          </label>
          <Input type="tel" placeholder="+1 (555) 000-0000" required />
        </div>
        <div>
          <label htmlFor="position" className="block mb-2">
            Desired position
          </label>
          <Input placeholder="e.g. Full Stack Developer" required />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2">
            Cover letter
          </label>
          <Textarea
            placeholder="Tell us why you're interested in this position"
            required
          />
        </div>
        <div className="relative">
          <label htmlFor="resume" className="block mb-2 text-sm font-medium text-gray-300">
            Upload Resume
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className=""
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only w-full h-full"
                    accept=".pdf,.doc,.docx"
                    required
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <input type="checkbox" id="terms" className="mr-2" required />
          <label htmlFor="terms">I accept the terms and conditions</label>
        </div>
        <Button type="submit" className="w-full">
          SUBMIT
        </Button>
      </form>
    </div>
  );
}
