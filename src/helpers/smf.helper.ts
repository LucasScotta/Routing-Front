interface SmfResponse {
    name: string
    color: string
    time: number
    times: number
}

interface SmfData {
    name: string
    color: string
    time: string
    times: number
}

export const parseSmfData = (response: SmfResponse): SmfData => {
    const { time } = response
    return { ...response, time: parseSmfDate(time) }
}

export const parseSmfDate = (time: number) => {
    return new Date(time).toLocaleString()
}