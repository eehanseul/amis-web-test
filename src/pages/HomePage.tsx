import React from "react";
import TechnologyCardList from "../components/TechnologyCardList";

const HomePage: React.FC = () => {
  return (
    <main>
      <section className="text-center py-20 bg-blue-50">
        <h1 className="text-4xl font-bold text-blue-800">병원 IT 기술 안내</h1>
        <p className="mt-4 text-gray-600">
          환자의 편의성과 의료진의 업무 효율을 높이는 다양한 기술을 소개합니다.
        </p>
      </section>
      <TechnologyCardList />
    </main>
  );
};

export default HomePage;
