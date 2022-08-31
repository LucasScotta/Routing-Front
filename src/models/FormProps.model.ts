
export interface FormProps {
    init: Function
    state: State
    labels: string[]
    submit: string
}


export interface State {
    data: Data
    setData: Function
}

export interface Data {
    name?: string
    password?: string
    newPassword?: string
    sign?: string
}