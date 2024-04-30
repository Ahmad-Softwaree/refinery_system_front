import { Toaster } from "@/components/ui/toaster";
import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import { Outlet } from "react-router-dom";
import useScrollTop from "@/hooks/useScrollTop";
import useRefreshPage from "@/hooks/useRefreshPage";
import useAos from "@/hooks/useAos";
import Modals from "../Layout/Modals";

const UserLayout = () => {
  useScrollTop();
  useRefreshPage();
  useAos();
  return (
    <main className="w-full bg-primary-500">
      <Toaster />
      <Modals />
      <Header />
      <section>
        <Outlet />
      </section>
      <Footer />
    </main>
  );
};

export default UserLayout;
