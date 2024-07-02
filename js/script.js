// c = carrousel
const cTriggerL = document.getElementById("trigger-left");
const cTriggerR = document.getElementById("trigger-right");
const cElement = document.getElementsByClassName("content")[0];

let isScrolling = false

// Add Event Listeners to the Scroll Triggers
cTriggerL.addEventListener('click', throttle(() => scrollContent('left'), 1000));
cTriggerR.addEventListener('click', throttle(() => scrollContent('right'), 1000));

// Move the scroll to an adyacent content page
function scrollContent(direction) {
    if(isScrolling){return}
    isScrolling = true
    // Temporally disable scroll-snap-type
    cElement.style.scrollSnapType = 'none';

    // Set the amount for the scroll to move
    const scrollAmount = cElement.clientWidth * 0.8; // 80% of the container width
    if (direction === 'left') {
        cElement.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    } else if (direction === 'right') {
        cElement.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
    // Activate scroll-snap-type after a bit of time
    setTimeout(() => {
        cElement.style.scrollSnapType = 'x mandatory';
        isScrolling = false
    }, 1000); // 1 second should be enough to finish the scroll
}

//function to limit the amount of triggers, reducing it to one per second
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}