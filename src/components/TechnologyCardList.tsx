// src/components/TechnologyCardList.tsx
import React from "react";
import { Link } from "react-router-dom";

const technologies = [
  {
    title: "전자차트(EMR)",
    description:
      "의료진이 환자의 진료기록을 전산으로 관리하고 빠르게 열람할 수 있도록 지원합니다.",
    link: "/technology/emr",
  },
  {
    title: "스마트 예약 시스템",
    description:
      "환자가 모바일로 진료 예약을 하고 대기시간을 실시간 확인할 수 있는 시스템입니다.",
    link: "/technology/reservation",
  },
  {
    title: "의료기기 연동",
    description:
      "병원 내 다양한 의료기기의 데이터를 실시간으로 수집하고 전자차트에 자동 기록합니다.",
    link: "/technology/device",
  },
  {
    title: "환자 모니터링 시스템",
    description:
      "환자의 생체신호를 실시간으로 모니터링하여 이상 징후를 빠르게 감지합니다.",
    link: "/technology/monitoring",
  },
];

const TechnologyCardList: React.FC = () => {
  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 py-12 px-4 max-w-6xl mx-auto">
      {technologies.map((tech) => (
        <Link
          to={tech.link}
          key={tech.title}
          className="block bg-white shadow-md hover:shadow-xl transition rounded-2xl border border-gray-200 p-6"
        >
          <h3 className="text-xl font-semibold text-blue-600">{tech.title}</h3>
          <p className="text-gray-700 mt-2">{tech.description}</p>
        </Link>
      ))}
    </section>
  );
};

export default TechnologyCardList;
