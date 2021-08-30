/** main entry */
// constants
const MAIN_CANVAS_ID = 'renderCanvas'

// assets
import '../css/full-screen.css'
const webpack_img = require('../images/webpack.png').default

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

    // draw image
    const size = 512
    const image = new Image()

    image.src = webpack_img
    image.width = size
    image.height = size

    image.onload = () => {
        context.drawImage(image, width / 2 - size / 2, height / 2 - size / 2)
    }
}
