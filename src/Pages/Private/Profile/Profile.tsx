import { useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { AppStore } from "../../../redux/store"
import { PrivateRoutes } from "../../../Routes"
import { DeleteUser } from "../../../services"
import { DeleteByPassword, UpdatePassword } from "../Password"

export const Profile = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userState = useSelector((store: AppStore) => store.user)
    const { name, createdAt } = userState
    const [data, setData] = useState({ name, password: '' })
    const Logout = () => {

        navigate(`/${PrivateRoutes.LOGOUT}`, { replace: true })
    }
    const Delete = async () => {
        try {
            const resp = await DeleteUser(name, data.password)
            const { status } = resp
            if (status === 204) {
                Logout()
            }
        }
        catch (e) {
            console.log('ERROR ON Profile.tsx: ', e)
        }
    }

    return (
        <><section id="profile">
            <section>
                <h2>Profile</h2>
                <div>name: {name}
                </div>
                <div>
                    Member since: {new Date(createdAt).toLocaleString()}
                </div>
            </section>
            <section className="section-form">
                <UpdatePassword />
            </section>
            <section className="section-form">
                <DeleteByPassword />
            </section>
        </section>
        </>
    )
}