
const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">병원 IT 안내</h1>
        <nav className="space-x-4">
          <a href="#" className="text-gray-700 hover:text-blue-600">홈</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">IT 시스템</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">보안 정책</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">문의</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
