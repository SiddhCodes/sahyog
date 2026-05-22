import { createBrowserRouter, RouterProvider } from "react-router";
import { AuthLayout } from "../layouts/AuthLayout";
import { MainLayout } from "../layouts/MainLayout";
import { HomePage } from "../../features/MainLayout/ui/pages/HomePage";
import { Signin } from "../../features/auth/ui/pages/Signin";
import { Signup } from "../../features/auth/ui/pages/Signup";

export const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          index: true,
          element: <Signin />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
      ],
    },
    {
      path: "/home",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};
