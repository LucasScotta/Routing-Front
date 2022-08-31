import { HoroscopeData } from "../models"

interface HoroscopeResponse {
    color: string
    compatibility: string
    current_date: string
    date_range: string
    description: string
    lucky_number: string
    mood: string
}

export const parseHoroscopeData = (response: HoroscopeResponse): HoroscopeData => {
    const { color, compatibility, description, lucky_number, mood } = response
    return { color, compatibility, lucky_number, mood, description }
}