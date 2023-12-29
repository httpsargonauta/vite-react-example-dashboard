import { Navigate, Outlet } from 'react-router-dom';
import { checkPermissions } from '../functions/_functions';

export const ProtectedRoute = ({ children, redirectTo = '/' }) => {
  let isAllowed = checkPermissions();

  if (!isAllowed) {
    return <Navigate to={redirectTo} />;
  } else return children ? children : <Outlet />;
};
