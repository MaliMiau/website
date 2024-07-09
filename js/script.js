// c = carrousel
const cTriggerL = document.getElementById("trigger-left");
const cTriggerR = document.getElementById("trigger-right");
const cElement = document.getElementById("content");
let isCScrolling = false
let scrollPerPage = cElement.clientWidth * 0.8; // 80% of the container width
let activePage = Math.round(cElement.scrollLeft / scrollPerPage)

// Add Event Listeners to the Scroll Triggers (-1 = left, 1 = right)
cTriggerL.addEventListener('click', () => scrollContent(-1));
cTriggerR.addEventListener('click', () => scrollContent(1));

window.onresize, cElement.onscroll = resize

// Move the scroll to an adyacent content page
function scrollContent(direction) {
    if(isCScrolling){return} else {isCScrolling = true}
    
    // Temporally disable scroll-snap-type
    cElement.style.scrollSnapType = 'none';

    // Do the scrolling
    cElement.scrollBy(scrollPerPage * direction, 0);

    // Activate scroll-snap-type after a bit of time
    setTimeout(() => {
        cElement.style.scrollSnapType = 'x mandatory';
        isCScrolling = false
    }, 1000); // 1 second should be enough to finish the scroll
}

function resize(){
    scrollPerPage = cElement.clientWidth * 0.8; // 80% of the container width
    activePage = Math.round(cElement.scrollLeft / scrollPerPage)
    focusChanged()
} 

function focusChanged(){
    console.log(`The focused page is the ${activePage}`)
}
