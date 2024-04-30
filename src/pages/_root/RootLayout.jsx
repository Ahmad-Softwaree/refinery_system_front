import { Toaster } from "@/components/ui/toaster";
import React from "react";
import { Outlet } from "react-router-dom";
import useScrollTop from "@/hooks/useScrollTop";
import useRefreshPage from "@/hooks/useRefreshPage";
import useAos from "@/hooks/useAos";

const RootLayout = () => {
  useScrollTop();
  useRefreshPage();
  useAos();
  return (
    <main className="w-full bg-primary-500">
      <Toaster />
      <section>
        <Outlet />
      </section>
    </main>
  );
};

export default RootLayout;
