// c = carrousel
const cTriggerL = document.getElementById("trigger-left");
const cTriggerR = document.getElementById("trigger-right");
const cElement = document.getElementsByClassName("content")[0];
let isCScrolling = false

// Add Event Listeners to the Scroll Triggers (-1 = left, 1 = right)
cTriggerL.addEventListener('click', () => scrollContent(-1));
cTriggerR.addEventListener('click', () => scrollContent(1));

// Move the scroll to an adyacent content page
function scrollContent(direction) {
    if(isCScrolling){return} else {isCScrolling = true}
    // Set the amount for the scroll to move
    const scrollAmount = cElement.clientWidth * 0.8; // 80% of the container width
    
    // Temporally disable scroll-snap-type
    cElement.style.scrollSnapType = 'none';

    // Do the scrolling
    cElement.scrollBy(scrollAmount * direction, 0);

    // Activate scroll-snap-type after a bit of time
    setTimeout(() => {
        cElement.style.scrollSnapType = 'x mandatory';
        isCScrolling = false
    }, 1000); // 1 second should be enough to finish the scroll
}