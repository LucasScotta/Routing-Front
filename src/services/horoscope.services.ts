import axios from "axios"
import { BuildUrl } from "../helpers"
import { parseHoroscopeData } from "../helpers/Horoscope.helper"
import { HoroscopeApiUrl } from "../models"
import { HoroscopeInfo } from "../models"

export const GetHoroscope = async (info: HoroscopeInfo) => {
    const { sign, day } = info
    if (!sign || !day) return
    const url = BuildUrl(HoroscopeApiUrl, `?sign=${sign}`, `&day=${day}`)
    const result = await axios.post(url)
    const { data } = result
    return parseHoroscopeData(data)
}
