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
                <img src="https://raw.githubusercontent.com/aliyelma/practicas-frontend/main/navbar/logo%20para%20web-fi18988281.png" alt="logo" className="logo" />
                <ul className="nav__links">
                    <li><a href={`/${PublicRoutes.HOME}`}>Home</a></li>
                    <li><a href={`/${PublicRoutes.PALETTE}`}>Palette</a></li>
                    <li><a href={`/${PublicRoutes.SMF}`}>Semaphore</a></li>
                    <li><a href={`/${PublicRoutes.HOROSCOPE}`}>Horoscope</a></li>
                    {!!name ?
                        <>
                            <li><a href="/private/profile">profile</a></li>
                        </> : <>
                            <li><a href={PublicRoutes.SIGNUP}>sign-up</a></li>
                        </>}
                </ul>
                <div>
                    {!!name
                        ? <>
                            Welcome
                            <DropDown
                                name={name}
                                menu={
                                    [{ path: `/${PrivateRoutes.PRIVATE}/${PrivateRoutes.PROFILE}`, text: PrivateRoutes.PROFILE },
                                    { path: `/${PrivateRoutes.LOGOUT}`, text: PrivateRoutes.LOGOUT }]}
                            />
                        </>
                        : <DropDown name={name} menu={
                            [{ path: `/${PublicRoutes.LOGIN}`, text: PublicRoutes.LOGIN },
                            { path: `/${PublicRoutes.SIGNUP}`, text: PublicRoutes.SIGNUP }]} />}
                </div>
            </nav>
        </header>
    )
}

/*
<nav class="navbar">
        <img src="./logo para web-fi18988281.png" alt="logo" class="logo">
        <ul class="nav__links">
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">About</a></li>
        </ul>
        <a href="#" class="cta"><button>Contact</button></a>
    </nav>
*/