/** main entry */
// imports

// constants
const HEADER_ID = 'id_header'


window.onload = () => {
    // test
    const header_el = document.getElementById(HEADER_ID) as HTMLHeadElement
    header_el.innerText = 'Hello webpack!'
}
