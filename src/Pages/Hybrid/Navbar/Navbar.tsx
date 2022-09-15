import { useSelector } from 'react-redux'
import { DropDown } from '../../../Components'
import { AppStore } from '../../../redux/store'
import { PrivateRoutes, PublicRoutes } from '../../../Routes'
import './style/css.css'
export const Navbar = () => {
    const userState = useSelector((store: AppStore) => store.user)
    const { name } = userState

    return (
        <header>
            <nav className="navbar">
                <ul className="sections">
                    <li><a href={`/${PublicRoutes.HOME}`}>Home</a></li>
                    <li><a href={`/${PublicRoutes.PALETTE}`}>Palette</a></li>
                    <li><a href={`/${PublicRoutes.SMF}`}>Semaphore</a></li>
                    <li><a href={`/${PublicRoutes.HOROSCOPE}`}>Horoscope</a></li>
                </ul>
                {!!name
                    ? <DropDown
                        name={name}
                        menu={
                            [{ path: `/${PrivateRoutes.PRIVATE}/${PrivateRoutes.PROFILE}`, text: PrivateRoutes.PROFILE },
                            { path: `/${PrivateRoutes.LOGOUT}`, text: PrivateRoutes.LOGOUT }]}
                    />
                    : <DropDown name={name} menu={
                        [{ path: `/${PublicRoutes.LOGIN}`, text: PublicRoutes.LOGIN },
                        { path: `/${PublicRoutes.SIGNUP}`, text: PublicRoutes.SIGNUP }]} />}
            </nav>
        </header>
    )
}
