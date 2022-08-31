import { Route, Routes } from "react-router-dom";
import { AuthGuard } from "../Guards";
import { PrivateRoutes, PublicRoutes } from "../Routes";
import { Private } from "./Private";
import { Public } from "./Public";

// Principal Router
export const Router = () => (
    <Routes>
        <Route element={<AuthGuard />}>
            <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
        </Route>
        <Route path="/*" element={<Public />} />
    </Routes>
)