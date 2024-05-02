import Login from "@/pages/_root/Login";
import RootLayout from "@/pages/_root/RootLayout";
import Home from "@/pages/_user/Home";
import Profile from "@/pages/_user/Profile";
import UserLayout from "@/pages/_user/UserLayout";
import Error from "@/pages/Error";
import NotFound from "@/pages/NotFound";
import RootRouterProvider from "@/provider/RootRouterProvider";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import EmployeeRouterProvider from "@/provider/EmployeeRouterProvider";
import ManagerRouterProvider from "@/provider/ManagerRouterProvider";
import Employees from "@/pages/_user/Employees";
import Machines from "@/pages/_user/Machines";
import Oils from "@/pages/_user/Oils";
import Storages from "@/pages/_user/Storages";
import Orders from "@/pages/_user/Order";
import Deliveries from "@/pages/_user/Deliveries";
import Departments from "@/pages/_user/Departments";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <>
        {/* Root Routes */}

        <Route
          errorElement={<Error />}
          path="/"
          element={<RootRouterProvider Component={RootLayout} />}>
          <Route path="login" errorElement={<Error />} element={<Login />} />
        </Route>
      </>

      <>
        <Route
          errorElement={<Error />}
          path="/"
          element={<EmployeeRouterProvider Component={UserLayout} />}>
          <Route index errorElement={<Error />} element={<Home />} />
          <Route
            path="profile"
            errorElement={<Error />}
            element={<Profile />}
          />
          <Route path="oils" errorElement={<Error />} element={<Oils />} />{" "}
          <Route
            path="storages"
            errorElement={<Error />}
            element={<Storages />}
          />{" "}
          <Route path="orders" errorElement={<Error />} element={<Orders />} />{" "}
          <Route
            path="deliveries"
            errorElement={<Error />}
            element={<Deliveries />}
          />
        </Route>
      </>
      <>
        <Route
          errorElement={<Error />}
          path="/"
          element={<ManagerRouterProvider Component={UserLayout} />}>
          <Route
            path="employees"
            errorElement={<Error />}
            element={<Employees />}
          />
          <Route
            path="departments"
            errorElement={<Error />}
            element={<Departments />}
          />
          <Route
            path="machines"
            errorElement={<Error />}
            element={<Machines />}
          />
        </Route>
      </>

      <Route path="*" element={<NotFound />} errorElement={<Error />} />
    </>
  )
);

export default router;
