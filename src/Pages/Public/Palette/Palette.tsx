import { useEffect, useState } from "react"
import { Color } from "../../../Components"
import { randomRGB } from "../../../helpers/Palette.helper"

import './style/css.css'
export const Palette = () => {

    const [colors, setColors] = useState<string[]>([])
    const [buttonColor, setButtonColor] = useState({ backgroundColor: '', color: '' })

    const resetColors = (): void => {
        const set = new Set<string>()
        while (set.size < 8) {
            set.add(randomRGB())
        }

        const buttonStyling = { backgroundColor: randomRGB(), color: randomRGB() }

        setButtonColor(buttonStyling)
        setColors([...set.values()])
    }

    useEffect(() => {
        resetColors()
    }, [])

    return <section className="palette">
        <div className="palette-colors">
            {colors.map(color => {
                return (
                    <Color key={color} color={color} text="& save" />
                )
            })}
        </div>
        <input
            style={buttonColor}
            onClick={resetColors}
            type="submit"
            value="LUCKY!" />
    </section>
}