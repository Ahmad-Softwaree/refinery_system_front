import Fallback from "@/pages/Fallback";
import { useGetCurrentUser } from "@/react-query/query/auth.query";
import { Navigate } from "react-router-dom";

export default function VeterinarianRouterProvider({ Component }) {
  const { isLoading, data } = useGetCurrentUser();
  let roles = ["employee", "manager", "high_manager", "veterinary"];
  if (isLoading) return <Fallback />;
  if (!data && !isLoading) return <Navigate to={`/`} />;
  if (data && !roles.includes(data?.role)) return <Navigate to={`/`} />;
  return <Component />;
}
