import Login from "@/pages/_root/Login";
import RootLayout from "@/pages/_root/RootLayout";
import Home from "@/pages/_user/Home";
import Managers from "@/pages/_user/Managers";
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
import HighManagerRouterProvider from "@/provider/HighManagerRouterProvider";
import EmployeeRouterProvider from "@/provider/EmployeeRouterProvider";
import ManagerRouterProvider from "@/provider/ManagerRouterProvider";
import Employees from "@/pages/_user/Employees";
import Pets from "@/pages/_user/Pets";
import Products from "@/pages/_user/Products";
import Veterinaries from "@/pages/_user/Veterinaries";
import VeterinarianRouterProvider from "@/provider/VeterinarianRouterProvider";
import Clinic from "@/pages/_user/Clinic";
import Customers from "@/pages/_user/Customers";
import Shop from "@/pages/_user/Shop";
import AllRouterProvider from "@/provider/AllRouterProvider";
import PetsReceipts from "@/pages/_user/PetsReceipts";
import ProductsReceipts from "@/pages/_user/ProductReceipts";

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
          <Route path="pets" errorElement={<Error />} element={<Pets />} />
          <Route
            path="products"
            errorElement={<Error />}
            element={<Products />}
          />
          <Route
            path="veterinarians"
            errorElement={<Error />}
            element={<Veterinaries />}
          />
          <Route
            path="customers"
            errorElement={<Error />}
            element={<Customers />}
          />{" "}
          <Route
            path="shop/:customer_id"
            errorElement={<Error />}
            element={<Shop />}
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
        </Route>
      </>
      <>
        <Route
          errorElement={<Error />}
          path="/"
          element={<AllRouterProvider Component={UserLayout} />}>
          <Route index errorElement={<Error />} element={<Home />} />
          <Route
            path="profile"
            errorElement={<Error />}
            element={<Profile />}
          />
        </Route>
      </>
      <>
        <Route
          errorElement={<Error />}
          path="/"
          element={<VeterinarianRouterProvider Component={UserLayout} />}>
          <Route path="clinic" errorElement={<Error />} element={<Clinic />} />
        </Route>
      </>
      <>
        <Route
          errorElement={<Error />}
          path="/"
          element={<HighManagerRouterProvider Component={UserLayout} />}>
          <Route
            path="managers"
            errorElement={<Error />}
            element={<Managers />}
          />
          <Route
            path="pet_receipts"
            errorElement={<Error />}
            element={<PetsReceipts />}
          />
          <Route
            path="product_receipts"
            errorElement={<Error />}
            element={<ProductsReceipts />}
          />
        </Route>
      </>

      <Route path="*" element={<NotFound />} errorElement={<Error />} />
    </>
  )
);

export default router;
