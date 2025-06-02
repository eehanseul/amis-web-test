import React from 'react';
import { useParams } from 'react-router-dom';

const TechnologyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">기술 상세 페이지</h2>
      <p className="text-lg text-gray-700">선택한 기술: {slug}</p>
    </div>
  );
};

export default TechnologyPage;
