import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { AppStore } from '../../redux/store'
import { Portal } from '../Portal'
import './style/css.css'

export const Menu = () => {
    const userState = useSelector((store: AppStore) => store.user)
    const { name } = userState

    const [toggle, setToggle] = useState(false)
    const toggleMenu = () => setToggle(!toggle)

    return <>
        <span className="svg" onClick={toggleMenu} />
        <Portal showPortal={toggle}>
            <div className="menu-container">
                <button onClick={toggleMenu}>X</button>
                <h1>Menu</h1>
                <ul>
                    {
                        name
                            ? <>
                                <li>Profile</li>
                                <li>Change Password</li>
                                <li>Delete Account</li>
                                <li>Colors</li>
                            </>
                            : <>
                                <li>Login</li>
                                <li>SignUp</li>
                            </>
                    }
                </ul>
            </div>
        </Portal>
    </>
}