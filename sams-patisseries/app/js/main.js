const sats = document.querySelectorAll('.sat')

window.addEventListener('scroll', scrollAnimation)

function scrollAnimation() {
    const animationTrigger = window.innerHeight / 5 * 4

    sats.forEach(sat => {
        const satTop = sat.getBoundingClientRect().top

        if(satTop < animationTrigger) {
            sat.classList.add('show')
        } else {
            sat.classList.remove('show')
        }
    })
}