import { ChangeEvent, MouseEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { parseSmfData, parseSmfDate } from '../../../helpers'
import { AppStore } from '../../../redux/store'
import { getColor, postColor } from '../../../services'
import './style/css.css'
// semaphore's lights
const lights = ['red', 'yellow', 'green']

export const Smf = () => {
    // state with actual color
    const [data, setData] = useState({ name: '', color: 'blue', time: '' })
    const { name } = useSelector((store: AppStore) => store.user)

    /**
     * call API to switch between colors
     * @param {event}: MouseEvent 
     */
    const updateColor = async (event: MouseEvent<HTMLInputElement>) => {
        const { id } = event.target as HTMLInputElement
        postColor(id, name)
    }

    /**
     * call the API by the last change
     */
    const changeColor = async (): Promise<void> => {
        const resp = await getColor(data.color)
        if (!resp.color) {
            return changeColor()
        }
        setData(parseSmfData(resp))

    }

    // call the API when color changes
    useEffect(() => {
        changeColor()
    }, [data])

    return (
        <section id="smf">
            {lights.map(light => <div id={light} key={light} style={{ filter: `brightness(${light === data.color ? 100 : 50}%)`, backgroundColor: light }} onClick={updateColor} className="light" />)}
            <br />
            <div>
                <p>Last change by {data.name ? data.name : 'Loading...'}</p>
                <p>at {data.time || ' Loading...'}</p>
            </div>
        </section>
    )
}