import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form } from "../../../../Components";
import { AppStore } from "../../../../redux/store";
import { PrivateRoutes } from "../../../../Routes";
import { DeleteAccountByPassword, SetNewPassword } from "../../../../services";

export const DeleteByPassword = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({ password: '' })
    const userState = useSelector((store: AppStore) => store.user)
    const { name } = userState


    /**
     * Update Function
     * @param {event}: FormEvent
     * @returns {null}
     */
    const DeleteAccount = async (): Promise<void> => {
        const { password } = data
        if (!password) return

        try {
            const resp = await DeleteAccountByPassword(name, password)
            const { status } = resp
            if (status === 204) {
                return navigate(`/${PrivateRoutes.LOGOUT}`, { replace: true })
            }

        } catch (e) {
            console.log('ERROR ON UpdatePassword.tsx: ', e)
        }
    }

    return (<>
        <h2>Delete Account</h2>
        <Form init={DeleteAccount} state={{ data, setData }} labels={['password']} submit="Delete Account" />
        <p>This action is irreversible</p>
    </>
    )
}