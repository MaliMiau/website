const cPages = document.getElementsByClassName('content-page')
const cPSections = document.getElementsByClassName('content-page-section')



export function desktopPage(){

    for (const page of cPages) {
        // Split the string by "x"
        const [x, y] = page.getAttribute('grid').split("x");
        page.style.gridTemplateRows = `repeat(${x}, 1fr)`
        page.style.gridTemplateColumns  = `repeat(${y}, 1fr)`
    }
    
    for (const section of cPSections) {
        // Split the string by "-"
        const [rX, rY] = section.getAttribute('rows').split("-").map(value => parseInt(value, 10));
        const [cX, cY] = section.getAttribute('cols').split("-").map(value => parseInt(value, 10));
        section.style.gridRow = `${rX} / ${rY+1}`
        section.style.gridColumn = `${cX} / ${cY+1}`
    }
}
export function mobilePage(){
    for (const page of cPages) {
        var height = 0
        var position = 1
        for(const section of page.children){
            var heightS = section.getAttribute('mobh')
            var positionS = section.getAttribute('mobp')
            if(heightS === null){
                const [rX, rY] = section.getAttribute('rows').split("-").map(value => parseInt(value, 10));;
                height += rY - rX + 1       
                heightS = rY - rX + 1
            }
            else{
                height += heightS
            }
            if(positionS != null){
                position = positionS
            }
            section.style.gridRow = `${position} / ${position + heightS}`
            position += heightS
            section.style.gridColumn = `1/2`
        }
        const gridHeight = height
        page.style.gridTemplateRows = `repeat(${gridHeight}, 1fr)`
        page.style.gridTemplateColumns  = `repeat(1, 1fr)`
    }
}    