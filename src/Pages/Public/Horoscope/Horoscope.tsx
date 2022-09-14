import { ChangeEvent, Dispatch, Fragment, useState } from "react"
import { HoroscopeData } from "../../../models"
import { GetHoroscope } from "../../../services"
import './style/css.css'
const signs: string[] = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces']
const days: string[] = ['today', 'tomorrow', 'yesterday']

export const Horoscope = () => {
    const [data, setData] = useState({ sign: 'aries', day: 'today' })
    const [msg, setMsg] = useState('')

    const [result, setResult]: [
        result: HoroscopeData | {},
        setResult: Dispatch<React.SetStateAction<{} | HoroscopeData>>
    ] = useState({})

    const search = async (): Promise<void> => {
        setMsg('Loading...')
        setResult({})
        const response = await GetHoroscope(data)
        if (!!response) {
            setResult(response)
        }
        setMsg('')
    }

    const selectSign = (e: ChangeEvent<HTMLSelectElement>): void => {
        const { target } = e
        const { value } = target
        return setData({ ...data, sign: value })
    }

    const selectDay = (e: ChangeEvent<HTMLSelectElement>): void => {
        const { target } = e
        const { value } = target
        return setData({ ...data, day: value })
    }

    return <section className="horoscope">
        <div className="horoscope-options">

            <div>
                <select onChange={selectSign}>
                    {signs.map(sign => <option value={sign} key={sign}>{sign}</option>)}
                </select>
                <select onChange={selectDay}>
                    {days.map(day => <option value={day} key={day}>{day}</option>)}
                </select>
            </div>

            <button onClick={search}>Search</button>
        </div>
        <p>{msg}</p>

        {!!Object.entries(result).length
            ? <div className="horoscope-result">
                {Object.entries(result).map(entry => {
                    const key = entry[0]
                    const value = entry[1]
                    if (typeof value === 'string') {
                        return <div className={`option ${key}`} key={key}>
                            <p>{(key.slice(0, 1).toUpperCase() + key.slice(1)).replace('_', ' ')}</p><p>{value.replace('_', ' ')}</p>
                        </div>
                    }
                })
                }
            </div>
            : <></>}
    </section >
}
