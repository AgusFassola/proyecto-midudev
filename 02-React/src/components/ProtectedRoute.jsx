import { useAuthStore } from "../store/authStore"
import { Navigate } from "react-router"

function ProtectedRoute({children, redirectTo="/login"}) {
  const {isLoggedIn} = useAuthStore()

  if(!isLoggedIn) return <Navigate to={redirectTo} replace/>
    return children
}

export default ProtectedRoute