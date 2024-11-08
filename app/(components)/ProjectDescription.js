import React from "react";
import { delay, motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// ANTI.0 is our pioneering Anti AI Software, specifically crafted to
// combat the influence of Artificial Intelligence. This innovative
// solution is under active development by our expert team of developers.
// Designed to safeguard user autonomy, ANTI.0 offers robust protection
// against AI-driven intrusions. Stay ahead with ANTI.0, your defense
// against the growing power of AI.

// ANTI.0
// Security
// Future Proof

function ProjectDescription({ title, description, tags, className, image }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
      class={`${className} lg:p-4 bg-[#060606c3] flex md:flex-row flex-col items-center justify-center lg:w-full border-2 rounded-md border-gray-400`}
    >
      <Image src={image} alt="logo" width={100} height={50} className="w-full md:w-1/2 aspect-[2/1] object-cover" />
      <div className="flex flex-col items-center justify-center p-3 md:w-1/2">
        <h1 className="card-logo text-lg mb-3">{title}</h1>
        <p className="w-full lg:w-5/6 text-justify leading-7 line-clamp-2 lg:line-clamp-none">
          {description}
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <p variant="outline" className="mt-2 block lg:hidden text-blue-800 ">Read More...</p>
          </DialogTrigger>
          <DialogContent className=" bg-black">
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>
                {description}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <ul className="flex items-center justify-between lg:w-2/3 w-full mt-4">
          {tags.map((tag, i) => <li key={i}>{tag}</li>)}
        </ul>
      </div>
    </motion.div>
  );
}

export default ProjectDescription;
