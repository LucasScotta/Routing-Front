import { PublicRoutes } from '../../Routes'
import { Menu } from '../Menu'
import './style/css.css'

export const Navbar = () => {
    return (
        <header>
            <nav className="navbar">
                <ul className="sections">
                    <li><a href={PublicRoutes.PUBLIC}>Home</a></li>
                    <li><a href={PublicRoutes.PALETTE}>Palette</a></li>
                    <li><a href={PublicRoutes.SMF}>Semaphore</a></li>
                    <li><a href={PublicRoutes.HOROSCOPE}>Horoscope</a></li>
                </ul>

                <Menu />

            </nav>
        </header>
    )
}
