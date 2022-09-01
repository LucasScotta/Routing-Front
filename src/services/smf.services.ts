import axios from 'axios'
import { BuildUrl } from '../helpers'
import { ApiBaseUrl, ApiEndPoints } from '../models'

// call the API to get last change
export const getColor = async (light: string = ''): Promise<{ name: string, color: string, time: number }> => {
    const url = BuildUrl(ApiBaseUrl, ApiEndPoints.SMF)
    const fullUrl = BuildUrl(url, `?color=${light}`)
    const resp = await axios.get(fullUrl)
    return resp.data
}

// call the API to change color
export const postColor = async (color: string, name: string) => {
    const url = `${ApiBaseUrl}${ApiEndPoints.SMF}`
    await axios.post(url, { color, name })
}