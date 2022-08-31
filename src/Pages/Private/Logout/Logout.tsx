import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { clearLocalStorage, logout, userStorageKey } from "../../../helpers"
import { resetUser } from "../../../redux/states/user"
import { PublicRoutes } from "../../../Routes"

/**
 * 
 * @returns {JSX.Element}: LOGOUT
 */
export const Logout = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const Logout = () => {
        logout(dispatch)
    }
    useEffect(() => {
        Logout()
        navigate(PublicRoutes.HOME, { replace: true })
    })
    return <></>
}