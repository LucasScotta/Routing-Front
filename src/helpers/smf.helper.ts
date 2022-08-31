interface SmfResponse {
    name: string
    color: string
}

interface SmfData {
    name: string
    color: string
    time: number
}

export const parseSmfData = (response: SmfResponse): SmfData => {
    return {...response, time: Date.now()}
}

export const parseSmfDate = (time: number) => {
    return new Date(time).toLocaleString()
}