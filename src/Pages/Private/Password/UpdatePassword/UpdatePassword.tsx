import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form } from "../../../../Components";
import { AppStore } from "../../../../redux/store";
import { PrivateRoutes, PublicRoutes } from "../../../../Routes";
import { SetNewPassword } from "../../../../services";

export const UpdatePassword = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [data, setData] = useState({ password: '', newPassword: '' })
    const userState = useSelector((store: AppStore) => store.user)
    const { name } = userState

    /**
     * Update Function
     * @param {event}: FormEvent
     * @returns {null}
     */
    const ChangePassword = async (): Promise<void> => {
        const { password, newPassword } = data
        if (!password || !newPassword) return
        if (password === newPassword) return //error paswords iguales

        try {
            const resp = await SetNewPassword(name, password, newPassword)
            const { status } = resp
            if (status === 204) {
                return navigate(`/${PrivateRoutes.LOGOUT}`, { replace: true })
            }

        } catch (e) {
            console.log('ERROR ON UpdatePassword.tsx: ', e)
        }
    }

    return (<>
        <h2>Change Password</h2>
        <Form init={ChangePassword} state={{ data, setData }} labels={['password', 'newPassword']} submit="Change Password" />
    </>
    )
}