const cPages = document.getElementsByClassName('content-page')
const cPSections = document.getElementsByClassName('content-page-section')

for (const section of cPSections) {
    // Split the string by "-"
    const [rX, rY] = section.getAttribute('rows').split("-");
    const [cX, cY] = section.getAttribute('columns').split("-");
    section.style.gridRow = `${rX} / ${rY-1+2}`
    section.style.gridColumn = `${cX} / ${cY-1+2}`
}

for (const page of cPages) {
    // Split the string by "x"
    const [x, y] = page.getAttribute('grid').split("x");
    page.style.gridTemplateRows = `repeat(${x}, 1fr)`
    page.style.gridTemplateColumns  = `repeat(${y}, 1fr)`
}