import { Outlet } from "react-router";

export const AuthLayout = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#F5F5F5]">
      <Outlet />
    </div>
  );
};
