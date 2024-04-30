import Fallback from "@/pages/Fallback";
import { useGetCurrentUser } from "@/react-query/query/auth.query";
import { Navigate } from "react-router-dom";

export default function HighManagerRouterProvider({ Component }) {
  const { isLoading, data } = useGetCurrentUser();
  let roles = ["high_manager"];
  if (isLoading) return <Fallback />;
  if (!data && !isLoading) return <Navigate to={`/login`} />;
  if (data && !roles.includes(data?.role)) return <Navigate to={`/`} />;
  return <Component />;
}
