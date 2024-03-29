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
    const [data, setData] = useState({ name: '', color: 'blue', time: '', times: -1 })
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
        <section>
            <div className="smf">
                {lights.map(light => (
                <div className="light" key={light}><div
                    id={light}
                    style={{ filter: `brightness(${light === data.color ? 100 : 35}%)`, backgroundColor: light }}
                    onClick={updateColor}
                    className="light"
                    /></div>))}
            </div>
            <div className="smf-text">
                <p>Last change by {data.name ? data.name : 'Loading...'}</p>
                <p>at {data.time || ' Loading...'}</p>
                <p>total changes: {data.times >= 0 ? data.times : 'Loading...'}</p>
            </div>
        </section>
    )
}