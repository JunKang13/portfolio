import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
      <>
        <div className='flex flex-row flex-wrap justify-center gap-10'>
          {technologies.map((technology) => (
              <div className='w-28 h-28' key={technology.name}>
                <BallCanvas icon={technology.icon}/>
              </div>
          ))}

        </div>

        <div className="mt-10 p-5 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-bold text-white">Other Skills</h3>
            <div className="grid grid-cols-4 gap-4 mt-3 text-white">
                <div>Azure</div>
                <div>AWS</div>
                <div>Bootstrap</div>
                <div>Docker</div>
                <div>Django</div>
                <div>FastAPI</div>
                <div>FireBase</div>
                <div>Flask</div>
                <div>Flutter</div>
                <div>GCP</div>
                <div>Git</div>
                <div>Grafana</div>
                <div>GraphQL</div>
                <div>Kubernetes</div>
                <div>Next.js</div>
                <div>PostgreSQL</div>
                <div>Prisma</div>
                <div>Prometheus</div>
                <div>Redis</div>
                <div>Tailwind CSS</div>

            </div>
        </div>
      </>

  );
};

export default SectionWrapper(Tech, "");
