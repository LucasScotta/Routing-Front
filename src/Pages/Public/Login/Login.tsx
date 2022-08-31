import { FormEvent, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { Form } from "../../../Components"
import { logout } from "../../../helpers"
import { createUser } from "../../../redux/states/user"
import { PrivateRoutes, PublicRoutes } from "../../../Routes"
import { logByUser } from "../../../services"

export const Login = () => {
    // user's data to login
    const [data, setData] = useState({ name: '', password: '' })

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {

        // user @ loged => LogOut and refresh
        logout(dispatch)
        navigate(`/${PublicRoutes.LOGIN}`, { replace: true })
    }, [])

    /**
     * Login Function
     * @param {event}: FormEvent
     * @returns {null}
     */
    const login = async (): Promise<void> => {
        const { name, password } = data
        if (!name || !password) return
        try {
            const user = await logByUser(name, password)

            dispatch(createUser(user))

            return navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true })
        } catch (e) {
            console.log('ERROR ON Login.tsx: ', e)
        }
    }


    return <section id="login">
        <Form init={login} state={{ data, setData }} labels={['name', 'password']} submit='login' />
    </section>
}