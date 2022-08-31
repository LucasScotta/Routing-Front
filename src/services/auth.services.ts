import axios, { AxiosPromise, AxiosResponseHeaders } from 'axios'
import { BuildUrl } from '../helpers'
import { ApiBaseUrl, ApiEndPoints } from '../models'

// call the API to login
export const logByUser = async (name: string, password: string) => {
    const url = BuildUrl(ApiBaseUrl, ApiEndPoints.LOGIN)
    const response = await axios.post(url, { name, password })

    const { data } = response
    return data
}

export const CreateUser = async (name: string, password: string) => {
    const url = BuildUrl(ApiBaseUrl, ApiEndPoints.USERS)

    const response = await axios.post(url, { name, password })
    const { data, status } = response
    return { data, status }
}

export const DeleteUser = async (name = '', password = '') => {
    const url = BuildUrl(ApiBaseUrl, ApiEndPoints.USERS)

    const response = await axios.delete(url, { data: { name, password } })
    return response
}

export const SetNewPassword = async (name: string, password: string, newPassword: string) => {
    const url = BuildUrl(ApiBaseUrl, ApiEndPoints.USERS)
    const response = await axios.put(url, { name, password, newPassword })

    return response
}

export const DeleteAccountByPassword = async (name: string, password: string) => {
    const url = BuildUrl(ApiBaseUrl, ApiEndPoints.USERS)
    const response = await axios.delete(url, { data: { name, password } })

    return response
}