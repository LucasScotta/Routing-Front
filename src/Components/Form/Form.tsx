import { FormEvent } from "react"
import { FormProps } from "../../models"
import './style/css.css'

export const Form = ({ init, state, labels, submit }: FormProps) => {

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        init(event)
    }

    /**
     * handleChange to update data on state
     * @param {event}: FormEvent
     * @returns {null}
     */
    const handleChange = (event: FormEvent<HTMLFormElement>): void => {
        const { id, value } = event.target as HTMLInputElement
        return state.setData({ ...state.data, [id]: value })
    }

    return <div className="form-container">
        <form onSubmit={handleSubmit} onChange={handleChange}>
            <div className="section-inputs">
                {labels.map(label => <label key={label} htmlFor={label}>
                    <input required id={label} type={label === 'password' || label === 'newPassword' ? 'password' : 'text'} name={label} placeholder={label} className="required-inputs" />
                </label>)}
            </div>
            <button type="submit" className="submit-btn">{submit}</button>
        </form>
    </div>
}

