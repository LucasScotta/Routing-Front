import { useEffect, useState } from "react"
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
                return <div onClick={() => navigator.clipboard.writeText(color)} className="palette-color" key={color} style={{ backgroundColor: color }}>
                    <span className="palette-rgb-text">click to copy</span>
                    {/* {!!user ? <span className="palette-rgb-text">& save</span> : <></>} */}
                </div>
            })}
        </div>
        <button className="palette-button" style={{ backgroundColor: buttonColor.backgroundColor, color: buttonColor.color }} onClick={resetColors}>Reset Colors</button>
    </section>
}