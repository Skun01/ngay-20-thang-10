const carouselElem = document.querySelector('.carousel');
const carouselTrack = carouselElem.querySelector('.carousel-track');
const carouselNav = carouselElem.querySelector('.carousel-nav');

const controlSlideBtn = [...carouselElem.querySelectorAll('.carousel_btn')];
const slides = [...carouselTrack.querySelectorAll('.carousel-slide')];
const carouselNavlist = [];
const numberSlide = slides.length;

if(numberSlide) slides[0].classList.add('carousel-slide-active');
// create nav dots slide
for(let i = 0; i < numberSlide; i++){
    const divElem = document.createElement('div');
    divElem.classList.add('carousel-indicator');
    carouselNavlist.push(divElem);
    carouselNav.appendChild(divElem);
}
if(numberSlide) carouselNavlist[0].classList.add('carousel-index-active');


// cac tham so dung chung
let currSlide = 0;
let nextSlide = 1;

setInterval(runSlide, 5000);

carouselNavlist.forEach((indicator)=>{
    indicator.addEventListener('click', ()=>{
        let index = carouselNavlist.indexOf(indicator);
        nextSlide = index;
        runSlide();
    });
});

controlSlideBtn.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        let offset = [...btn.classList].includes('next-carousel') ? 1 : -1;
        let index = (currSlide + offset)%numberSlide;
        if(index < 0) index += numberSlide;
        nextSlide = index;
        runSlide(); 
    });
});

function runSlide(){
    slides[currSlide].classList.remove('carousel-slide-active');
    carouselNavlist[currSlide].classList.remove('carousel-index-active');

    slides[nextSlide].classList.add('carousel-slide-active');
    carouselNavlist[nextSlide].classList.add('carousel-index-active');

    currSlide = nextSlide;
    nextSlide = (nextSlide + 1)%numberSlide;
}

const mainPage = document.querySelector('.main-page');
const clickButton = document.querySelector('.click-me');
const audioElem = document.querySelector('.audio-music');
clickButton.addEventListener('click', ()=>{
    audioElem.play();
    mainPage.style.display="none";
});