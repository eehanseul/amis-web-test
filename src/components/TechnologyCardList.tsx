// src/components/TechnologyCardList.tsx
import React from "react";
import { Link } from "react-router-dom";

interface Technology {
  title: string;
  description: string;
  link: string;
  category: string;
}

interface Props {
  technologies: Technology[];
}


const TechnologyCardList: React.FC<Props> = ({technologies}) => {
  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 py-12 px-4 max-w-6xl mx-auto">
      {technologies.map((tech) => (
        <Link
          to={tech.link}
          key={tech.title}
          className="card"
        >
          <h3 className="card-title">{tech.title}</h3>
          <p className="card-description">{tech.description}</p>
        </Link>
      ))}
    </section>
  );
}

export default TechnologyCardList;
