import Fallback from "@/pages/Fallback";
import { useGetCurrentUser } from "@/react-query/query/auth.query";
import { Navigate } from "react-router-dom";

export default function RootRouterProvider({ Component }) {
  const { isPending, data } = useGetCurrentUser();

  if (isPending) return <Fallback />;
  if (data && !isPending) return <Navigate to={`/`} />;
  return <Component />;
}
