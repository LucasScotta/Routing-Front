import { useEffect, useState } from "react"
import { Color } from "../../../Components"
import { randomRGB } from "../../../helpers/Palette.helper"

import './style/css.css'
export const Palette = () => {

    const [colors, setColors] = useState<string[]>([])
    const [buttonColor, setButtonColor] = useState({ backgroundColor: '', color: '' })

    const resetColors = (): void => {
        const arr = []
        while (arr.length < 8) {
            arr.push(randomRGB())
        }
        const buttonStyling = { backgroundColor: randomRGB(), color: randomRGB() }
        setButtonColor(buttonStyling)
        setColors(arr)
    }

    useEffect(() => {
        resetColors()
    }, [])

    return <section id="palette">
        <div className="palette-colors">
            {colors.map(color => {
                return (
                    <Color key={color} color={color} text="and save" />
                )
            })}
        </div>
        <input
            className="palette-submit"
            style={{ transition: 'background-color 1s ease-in', backgroundColor: buttonColor.backgroundColor, color: buttonColor.color }}
            onClick={resetColors}
            type="submit"
            value="RESET" />
    </section>
}