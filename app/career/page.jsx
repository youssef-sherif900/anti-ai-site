import Link from 'next/link';
import React from 'react'

function CareerPage() {
  const openPositions = [
    {
      title: "Video Editor",
      location: "Jaipur",
      businessArea: "Non-Tech",
      postedOn: "8/24/2024",
    },
    {
      title: "DevOps",
      location: "Jaipur",
      businessArea: "Tech",
      postedOn: "8/24/2024",
    },
    {
      title: "AI/ML",
      location: "Jaipur",
      businessArea: "Technical",
      postedOn: "9/13/2024",
    },
    {
      title: "Frontend Developer",
      location: "Jaipur",
      businessArea: "Technical",
      postedOn: "9/13/2024",
    },
    {
      title: "Full stack Developer",
      location: "Jaipur",
      businessArea: "Technical",
      postedOn: "9/13/2024",
    },
    {
      title: "HR Manager",
      location: "Jaipur",
      businessArea: "Non-Tech",
      postedOn: "8/24/2024",
    },
    {
      title: "HR Intern",
      location: "Jaipur",
      businessArea: "Non-Tech",
      postedOn: "9/15/2024",
    },
    {
      title: "Technical Team lead",
      location: "Jaipur",
      businessArea: "Technical",
      postedOn: "9/15/2024",
    },
    {
      title: "AI/ML",
      location: "Jaipur",
      businessArea: "Technical",
      postedOn: "9/15/2024",
    },
    {
      title: "Tech lead",
      location: "Jaipur",
      businessArea: "Technical",
      postedOn: "9/15/2024",
    },
    {
      title: "AI/ML INTERN",
      location: "Jaipur",
      businessArea: "Tech",
      postedOn: "9/15/2024",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Open Positions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {openPositions.map((position, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 text-black">
            <h2 className="text-xl font-bold underline mb-2">{position.title}</h2>
            <p className="mb-1"><strong>Location:</strong> {position.location}</p>
            <p className="mb-1"><strong>Business Area:</strong> {position.businessArea}</p>
            <p className="mb-4"><strong>Posted on:</strong> {position.postedOn}</p>
            <Link href="career/postion">
            <button className="bg-black text-white w-full py-2 rounded">Apply</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CareerPage