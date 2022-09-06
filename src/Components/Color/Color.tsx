import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { updateUser } from '../../redux/states/user'
import { AppStore } from '../../redux/store'
import './style/css.css'

export const Color = ({ color, text }: { color: string, text?: string }) => {
    const dispatch = useDispatch()
    const userState = useSelector((store: AppStore) => store.user)

    const copy = () => navigator.clipboard.writeText(color)
    const saveColor = (color: string) => {
        copy()

        const colors = new Set(userState.colors)

        if (colors.has(color)) return
        colors.add(color)

        dispatch(updateUser({ colors: [...userState.colors, color] }))
    }
    return (
        <div
            onClick={() => saveColor(color)}
            className="palette-color"
            key={color}
            style={{ backgroundColor: color }}>
            <span className="palette-rgb-text">
                <p>click to copy</p>
                <p>{!!text ? <span>& save</span> : <></>}</p>
            </span>
        </div>
    )
}