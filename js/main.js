// custom main js file build by JeanDoe

const body = document.body;
const themeBtn = document.getElementById('theme-btn');

if(themeBtn){
    themeBtn.addEventListener('click', () => {
        body.classList.toggle('dark');
    })
}

const header = document.querySelector('.header');

window.addEventListener('scroll', () =>{
    header.classList.toggle('active', scrollY > 0);
})