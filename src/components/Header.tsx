import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">병원 IT 안내</h1>
        <nav className="space-x-6">
          <a
            href="#technologies"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            기술 소개
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            문의하기
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
