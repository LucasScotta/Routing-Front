import { useSelector } from 'react-redux'
import { AppStore } from '../../../redux/store'
import { PublicRoutes } from '../../../Routes'
import './style/css.css'

export const Home = () => {
    const userState = useSelector((store: AppStore) => store.user)
    const { name } = userState

    return <section className="home">
        <h1>Welcome{!!name && ' ' +name}!</h1>
        <p>This page is hosted on netlify and Heroku, developed with React-Routing, Redux and TypeScript. I hope you enjoy it</p>
        <p>Special thanks to <a href="https://aztro.sameerkumar.website/">Aztro</a> for its Horoscope's API</p>
        <div className="home-actions">
            <p>Sections</p>
            <ul>
                <li><a href={`/${PublicRoutes.LOGIN}/`}>Login</a></li>
                <li><a href={`/${PublicRoutes.SIGNUP}/`}>Signin</a></li>
                <li><a href={`/${PublicRoutes.SMF}`}>Semafore</a></li>
                <li><a href={`/${PublicRoutes.HOROSCOPE}`}>Horoscope</a></li>
            </ul>
        </div>
    </section>
}