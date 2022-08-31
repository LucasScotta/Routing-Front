import { Navigate, Route, Routes } from "react-router-dom";
import { Home, Horoscope, Login, Signup, Smf } from "../../Pages";
import { PrivateRoutes, PublicRoutes } from "../../Routes";
import { Private } from "../Private";

//Public Router
export const Public = () => (
    <Routes>
        <Route path={PublicRoutes.PUBLIC} element={<Navigate to={PublicRoutes.HOME} />} />
        <Route path={PublicRoutes.HOME} element={<Home />} />
        <Route path={PublicRoutes.SIGNUP} element={<Signup />} />
        <Route path={PublicRoutes.SMF} element={<Smf />} />
        <Route path={PublicRoutes.LOGIN} element={<Login />} />
        <Route path={PublicRoutes.HOROSCOPE} element={<Horoscope />} />
        <Route path={PrivateRoutes.LOGOUT} element={<Navigate replace to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.LOGOUT}`} />} />
        <Route path="*" element={<Navigate to={PublicRoutes.PUBLIC} />} />
    </Routes>
)