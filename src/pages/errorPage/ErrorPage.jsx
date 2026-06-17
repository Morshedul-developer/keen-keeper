import { Link } from "react-router";
import { FiAlertTriangle } from "react-icons/fi";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] px-4">
      <div className="text-center max-w-md bg-white p-10 rounded-2xl shadow-sm border border-[#E2E8F0]">
        
        <div className="flex justify-center mb-4 text-red-500">
          <FiAlertTriangle size={60} />
        </div>

        <h1 className="text-6xl font-bold text-[#1F2937]">404</h1>

        <h2 className="text-2xl font-semibold mt-2 text-[#244D3F]">
          Page Not Found
        </h2>

        <p className="text-[#64748B] mt-3 text-sm">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-[#244D3F] text-white rounded-lg hover:bg-[#1f3d33] transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;