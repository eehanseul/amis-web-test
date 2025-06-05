import React, { useState } from "react";
import TechnologyCardList from "../components/TechnologyCardList";
import { technologies } from "../data/technologyData";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = Array.from(new Set(technologies.map((t) => t.category)));

  const filteredTechnologies = selectedCategory
    ? technologies.filter((tech) => tech.category === selectedCategory)
    : technologies;

  return (
    <main>
      <section className="text-center py-20 bg-blue-50">
        <h1 className="text-4xl font-bold text-blue-800">병원 IT 기술 안내</h1>
        <p className="mt-4 text-gray-600">
          환자의 편의성과 의료진의 업무 효율을 높이는 다양한 기술을 소개합니다.
        </p>
      </section>

      <section className="flex flex-col-reverse lg:flex-row gap-8 max-w-7xl mx-auto px-4 py-12">
        <div className="flex-1">
          <TechnologyCardList technologies={filteredTechnologies} />
        </div>

        <aside className="w-full lg:w-60 sticky top-20 h-fit">
          <div className="bg-white shadow rounded-lg p-4 border">
            <h2 className="text-lg font-semibold mb-3 text-gray-700">
              카테고리
            </h2>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-sm ${
                    selectedCategory === null
                      ? "bg-blue-500 text-white"
                      : "text-blue-700 hover:bg-blue-100"
                  }`}
                >
                  ALL
                </button>
              </li>
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => setSelectedCategory(cat)}
                    className={`block w-full text-left px-3 py-2 rounded-md text-sm ${
                      selectedCategory === cat
                        ? "bg-blue-500 text-white"
                        : "text-blue-700 hover:bg-blue-100"
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>       
      </section>
    </main>
  );
};

export default HomePage;
