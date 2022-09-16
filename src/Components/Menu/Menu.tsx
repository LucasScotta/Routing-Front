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
            {
                !!toggle
                    ? <div className='menu-container menu-active'>
                        <button onClick={toggleMenu}>X</button>
                        <h1>Menu</h1>
                        <div className="menu-actions">
                            {
                                !!name
                                    ? <>
                                        <input type="radio" id="info" name="action" value="info" />
                                        <label htmlFor="info">Info</label>
                                        <input type="radio" id="account-magane" name="action" value="account-magane" />
                                        <label htmlFor="account-magane">Manage your account</label>
                                        <input type="radio" id="logout" name="action" value="logout" />
                                        <label htmlFor="logout">Sign-Out</label>
                                        <input type="radio" id="colors" name="action" value="colors" />
                                        <label htmlFor="colors">Saved Colors</label>
                                    </>
                                    : <>
                                        <input type="radio" id="auth" name="action" value="auth" />
                                        <label htmlFor="auth">Login</label>
                                        <input type="radio" id="register" name="action" value="register" />
                                        <label htmlFor="register">Register</label>
                                    </>
                            }
                        </div>
                        <div className="menu-sections">
                            <div>form login</div>
                            <div>form register</div>
                        </div>
                    </div>
                    : <div className='menu-container'></div>
            }

        </Portal>
    </>
}
