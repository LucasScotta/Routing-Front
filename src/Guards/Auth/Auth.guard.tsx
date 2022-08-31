import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { AppStore } from "../../redux/store"
import { PublicRoutes } from "../../Routes"

// user @ loged => continue
// user @ not loged => go to login
export const AuthGuard = () => {
    const userState = useSelector((store: AppStore) => store.user)
    const { name } = userState
    return name ? <Outlet /> : <Navigate replace to={`/${PublicRoutes.LOGIN}`} />
}