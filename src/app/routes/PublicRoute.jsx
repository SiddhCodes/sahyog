import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

export const PublicRoute = () => {
  const { employee, isLoading } = useSelector((state) => state.auth);

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-[#F5F5F5]">
        <p>Loading...</p>
      </div>
    );
  }

  if (employee) {
    return <Navigate to="/home" replace />;
  }

  return <Outlet />;
};
