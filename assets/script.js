const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let activeSlide = 0;

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const p = document.querySelector("#banner p")
const images = document.querySelector(".banner-img");


const addDots = () => {
	const dots = document.querySelector(".dots");
	for (let i=0; i<slides.length; i++) {
		const div = document.createElement("div");
		dots.appendChild(div);
		div.classList.add("dot");
	}
	
}

const carroussel = (currentSlide) => {
	const allDots = document.querySelectorAll(".dot");
	allDots.forEach ((el)=> {
		if (el.classList.contains("dot_selected")) {
			el.classList.remove("dot_selected")
		}
	})
	allDots[currentSlide].classList.add("dot_selected");
	images.src = slides[currentSlide].image;
	p.innerHTML = slides[currentSlide].tagLine
};

addDots();
carroussel(activeSlide);


arrowLeft.addEventListener ("click", () => {
	(activeSlide === 0 ? activeSlide = 3 : activeSlide -= 1);
	carroussel(activeSlide);	
});
arrowRight.addEventListener ("click", () => {
	(activeSlide === 3 ? activeSlide = 0 : activeSlide += 1);
	carroussel(activeSlide);
});



