import { ChangeEvent, Dispatch, useState } from "react"
import { HoroscopeData } from "../../../models"
import { GetHoroscope } from "../../../services"
import './style/css.css'
const signs: string[] = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces']
const days: string[] = ['today', 'tomorrow', 'yesterday']

export const Horoscope = () => {
    const [data, setData] = useState({ sign: 'aries', day: 'today' })

    const [result, setResult]: [
        result: HoroscopeData | {},
        setResult: Dispatch<React.SetStateAction<{} | HoroscopeData>>
    ] = useState({})

    const search = async (): Promise<void> => {
        const response = await GetHoroscope(data)
        if (!!response) {
            setResult(response)
        }
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
    const showResults = () => {
        const entries = Object.entries(result)
        if (!!entries.length) {
            return entries.map(entry => {
                const key = entry[0]
                const value = entry[1]
                if (typeof value === 'string') {
                    return <p key={key}>{key.slice(0,1).toUpperCase() + key.slice(1)}: {value}</p>
                }
            })
        }
        return <></>
    }

    return <section id="horoscope">
        <div>
            <select className="horoscope-selection" onChange={selectSign}>
                {signs.map(sign => <option value={sign} key={sign}>{sign}</option>)}
            </select>
            <select className="horoscope-selection" onChange={selectDay}>
                {days.map(day => <option value={day} key={day}>{day}</option>)}
            </select>
            <button onClick={search}>Search</button>
            <div className="horoscope-result">
                {showResults()}
            </div>
        </div>
    </section>
}