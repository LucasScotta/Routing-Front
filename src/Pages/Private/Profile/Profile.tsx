import { useSelector } from "react-redux"
import { Color } from "../../../Components"

import './style/css.css'
import { AppStore } from "../../../redux/store"
import { DeleteByPassword, UpdatePassword } from "../Password"
import { PublicRoutes } from "../../../Routes"

export const Profile = () => {

    const userState = useSelector((store: AppStore) => store.user)
    const { name, createdAt, colors } = userState

    return (
        <section className="profile">
            <section className="profile-data">
                <h2>Profile</h2>
                <div>name: {name}
                </div>
                <div>
                    Member since: {new Date(createdAt).toLocaleString()}
                </div>
            </section>
            <UpdatePassword />
            <DeleteByPassword />
            <section>
                <h2>saved Colors</h2>
                {
                    colors!!
                        ? <div className="profile-palette">
                            {colors.map(color => <Color key={color} color={color} />)}
                        </div>
                        : <>You have no saved colors yet, <a href={`/${PublicRoutes.PALETTE}`}>Pick one</a></>
                }
            </section>
        </section>
    )
}