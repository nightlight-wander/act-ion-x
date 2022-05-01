import { useLocation,Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
const RequiresAuth = ({children}) => {
  const {eToken}=useAuth();
  const location=useLocation();
  return eToken?children:<Navigate to="/login" state={{from:location}} ></Navigate>
}

export {RequiresAuth};