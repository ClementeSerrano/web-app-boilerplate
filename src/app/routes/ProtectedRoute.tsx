import { Navigate } from "react-router-dom";

import { WithChildren } from "../components/components.types";
import useAuth from "../hooks/useAuth";

export default function ProtectedRoute({ children }: WithChildren) {
  const auth = useAuth();

  return auth?.account ? <>{children}</> : <Navigate to="/register" />;
}
