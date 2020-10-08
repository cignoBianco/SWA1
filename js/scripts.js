let header = document.querySelector('header');
let scrollBtn = document.querySelector('#scroll img');
let home = document.querySelector('#home');

scrollBtn.addEventListener('click', () => { window.scrollTo({top: 0, behavior: 'smooth'}); });

window.onscroll = (e) => {
    header.classList = window.pageYOffset > header.offsetHeight ? 'scrolledHeader' : '';
    scrollBtn.style.display = window.pageYOffset > home.offsetHeight  ? 'inline' : 'none';
};

let slider = document.querySelector('article section:nth-of-type(6) > div:last-of-type > div:first-of-type');
let pagination = document.querySelectorAll('.pagination span');
pagination.forEach((el, ind) => {
   
    el.addEventListener('click', () => {
        if (ind == 1) {
            slider.style.transform = 'translate(-400px, 0)';
            el.className = 'active';
            pagination[0].className = '';
            pagination[2].className = '';
        } else if (ind == 2) {
            slider.style.transform = 'translate(-600px, 0)';
            el.className = 'active';
            pagination[0].className = '';
            pagination[1].className = '';
        } else {
            slider.style.transform = 'translate(0, 0)';
            el.className = 'active';
            pagination[1].className = '';
            pagination[2].className = '';
        }
    });
});