/** main entry */
// constants
const MAIN_CANVAS_ID = 'renderCanvas'

// assets
import '../css/full-screen.css'

// constants
const CLEAR_COLOR = '#000000'


window.onload = () => {
    // main canvas
    const main_canvas = document.getElementById(MAIN_CANVAS_ID) as HTMLCanvasElement

    // init canvas
    const dpr = window.devicePixelRatio
    const width = window.innerWidth * dpr
    const height = window.innerHeight * dpr

    main_canvas.width = width
    main_canvas.height = height

    // clear canvas
    const context = main_canvas.getContext('2d')
    context.fillStyle = CLEAR_COLOR
    context.fillRect(0, 0, width, height)

    // draw colorful rect
    context.fillStyle = '#00ffff'
    const size = 64
    context.fillRect(width / 2 - size / 2, height / 2 - size / 2,
        size, size)
}
