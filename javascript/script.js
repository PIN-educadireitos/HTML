const headerElem = document.querySelector('.header-hide');
const scrollOffset = 0;
let prevScrollpos = window.scrollY;
window.addEventListener('scroll', () => {
        if (scrollOffset == window.scrollY){
            headerElem.style.top = '40px';
        } 
        else if (window.scrollY > scrollOffset) {
            let currentScrollpos = window.scrollY;
            if (prevScrollpos > currentScrollpos) {
                headerElem.style.top = '10px';

        } else {
            headerElem.style.top = '-100%';

        }

        prevScrollpos = currentScrollpos;
    }
});