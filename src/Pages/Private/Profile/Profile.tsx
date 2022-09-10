import { useSelector } from "react-redux"
import { Color } from "../../../Components"

import './style/css.css'
import { AppStore } from "../../../redux/store"
import { DeleteByPassword, UpdatePassword } from "../Password"

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
            <section className="profile-palette">
                {colors!! ? colors.map(color => <Color key={color} color={color} />) : <></>}
            </section>
        </section>
    )
}