import React from "react";
import { delay, motion } from "framer-motion";
import { duration } from "@mui/material";

// ANTI.0 is our pioneering Anti AI Software, specifically crafted to
// combat the influence of Artificial Intelligence. This innovative
// solution is under active development by our expert team of developers.
// Designed to safeguard user autonomy, ANTI.0 offers robust protection
// against AI-driven intrusions. Stay ahead with ANTI.0, your defense
// against the growing power of AI.

// ANTI.0
// Security
// Future Proof

function ProjectDescription({title,description , tags , styles }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
      viewport={{ once: true }}
      style={styles}
      class="p-4 bg-[#060606c3] flex flex-col items-center justify-center border-2 rounded-md border-gray-400 w-[500px] absolute top-[220vh] right-[10vw]"
    >
      <h1 class="card-logo text-lg mb-3">{title}</h1>
      <p className="w-5/6 text-justify leading-7">
      {description}
      </p>
      <ul className=" flex items-center justify-between w-2/3 mt-4">
      {tags.map((tag , i)=><li key={i}>{tag}</li>)}
      </ul>
    </motion.div>
  );
}

export default ProjectDescription;
