export const randomRGB = () => {
    const random = () => Math.floor(Math.random() * 256)

    const rgb = `rgb(${random()},${random()},${random()})`
    return rgb
}