const headerElem = document.querySelector('.header-hide');
const scrollOffset = 100;
let prevScrollpos = window.pageYOffset;
window.addEventListener('scroll', () => {
    if (window.pageYOffset > scrollOffset) {
        let currentScrollpos = window.pageYOffset;

        if (prevScrollpos > currentScrollpos) {
            headerElem.style.top = '0'; 
        } else {
            headerElem.style.top = '-35%';
        }

        prevScrollpos = currentScrollpos;
    }
});