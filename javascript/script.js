const headerElem = document.querySelector('.header-hide'); 
let prevScrollpos = window.scrollY;
window.addEventListener('scroll', () => {
        const currentScrollpos = window.scrollY;

        if (currentScrollpos > prevScrollpos) {
            headerElem.style.top = '-30%';
        } else {
            headerElem.style.top = '10px';
        }

        prevScrollpos = currentScrollpos;

    }
);