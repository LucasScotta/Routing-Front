import { Navigate, Route, Routes } from "react-router-dom";
import { Profile, Logout } from "../../Pages";
import { PrivateRoutes, PublicRoutes } from "../../Routes";

// Private Router
export const Private = () => (
    <Routes>
        <Route path="/" element={<Navigate to={PrivateRoutes.PROFILE} />} />
        <Route path={PrivateRoutes.PROFILE} element={<Profile />} />
        <Route path={PrivateRoutes.LOGOUT} element={<Logout />} />
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
)