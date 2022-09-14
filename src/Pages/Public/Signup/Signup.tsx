import { FormEvent, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Form } from "../../../Components"

import { clearLocalStorage, logout, userStorageKey } from "../../../helpers"
import { resetUser } from "../../../redux/states/user"
import { PublicRoutes } from "../../../Routes"
import { CreateUser } from "../../../services"

export const Signup = () => {

    const navigate = useNavigate()
    // user's data to login
    const [msg, setMsg] = useState('')
    const [data, setData] = useState({ name: '', password: '' })
    const dispatch = useDispatch()

    useEffect(() => {

        // user @ loged => LogOut and refresh
        logout(dispatch)
    }, [])

    /**
     * Login Function
     * @param {event}: FormEvent
     * @returns {null}
     */
    const signUp = async (): Promise<void> => {
        const { name, password } = data
        if (!name || !password) return

        try {
            const signed = await CreateUser(name, password)
            if (signed.status === 201) {

                return navigate(`/${PublicRoutes.LOGIN}`)
            }

        }
        catch (e: unknown | any) {
            const data = !!e && !!e.response && e.response.data
            if (!!data) {
                return setMsg(data)
            }
        }
    }

    return <section id="sign-up">
        <Form init={signUp} state={{ data, setData }} labels={['name', 'password']} submit='Sign-up' />
        <p>{msg}</p>
    </section>
}