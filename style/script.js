const scroll = document.querySelector('.btn');

scroll.addEventListener("click", () => scrollDown() )
    


function scrollDown(){
  window.scrollTo({ top: 960, behavior: "smooth" });

}

const gallery_see = document.querySelector('.button-see-more-gallery');
const gallery = document.querySelector('.gallery')
const exit_gallery = document.querySelector('.fa-xmark')
gallery_see.addEventListener('click', () => {

  if(gallery.style.display === "block"){
    gallery.style.display = "none"

  } else {
    gallery.style.display = "block"
  }

});

exit_gallery.addEventListener("click", () => {
  console.log("click")
  if(gallery.style.display === "block"){
     gallery.style.display = "none"
     
  }
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}; 
function fotoInDiv(){
    houseFoto.innerHTML = `
    <img src="img/home1.jpg">
    `
} 
function fotoInDiv2(){
    houseFoto.innerHTML = `
    <img src="img/433d30135147711.61e29e32097e8.jpg">
    `
}
function fotoInDiv3(){
    houseFoto.innerHTML = `
    <img src="img/435117.jpg">
     `
}
function fotoInDiv4(){
    houseFoto.innerHTML = `
    <img src="img/977866-mansions-modern-architecture-house.jpg">
     `
}
function fotoInDiv5(){
    houseFoto.innerHTML = `
    <img src="img/belz-chateau-snow-today-161116-tease.jpg">
     `
}
const plus = document.querySelector('.checkmor');


plus.addEventListener("click", () => createNewDiv())

 const test1 = document.createElement('div');
 const houseFoto = document.createElement('div');
 const houseDescr = document.createElement('div');
 const closeX = document.createElement('a')

 closeX.classList.add('close-X')
 test1.classList.add('hui');
 houseFoto.classList.add('house-foto');
 houseDescr.classList.add('house-descr');
 
 

houseDescr.innerHTML = `
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, illo? Quis minus fuga nostrum praesentium, harum, quaerat quisquam accusantium ex magnam debitis numquam asperiores iste commodi nobis optio nam sapiente?
`
closeX.innerHTML = `
<i class="fa-solid fa-xmark"></i>
`

function createNewDiv(){
const newDiv = document.createElement('div')
newDiv.classList.add('NewDiv')

document.body.appendChild(newDiv)
newDiv.appendChild(test1)
test1.appendChild(closeX)
test1.appendChild(houseFoto)
test1.appendChild(houseDescr)


closeX.addEventListener("click", () => newDiv.remove())
closeX.addEventListener("click", () => testfunction())

function testfunction(){
    document.body.style.overflow = "visible"
    
    
};

};
 


const llo = document.querySelector('.checkmor2');

llo.addEventListener("click", () => createNewDiv())

 closeX.classList.add('close-X')
 test1.classList.add('hui');
 houseFoto.classList.add('house-foto');
 houseDescr.classList.add('house-descr');
 
 
 
houseDescr.innerHTML = `
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, illo? Quis minus fuga nostrum praesentium, harum, quaerat quisquam accusantium ex magnam debitis numquam asperiores iste commodi nobis optio nam sapiente?
`
closeX.innerHTML = `
<i class="fa-solid fa-xmark"></i>
`

function createNewDiv(){
const newDiv = document.createElement('div')
newDiv.classList.add('NewDiv')
//document.body.style.overflow ="hidden"

document.body.appendChild(newDiv)
newDiv.appendChild(test1)
test1.appendChild(closeX)
test1.appendChild(houseFoto)
test1.appendChild(houseDescr)


closeX.addEventListener("click", () => newDiv.remove())
closeX.addEventListener("click", () => testfunction())

function testfunction(){
    document.body.style.overflow = "visible"
}

};
const plus3 = document.querySelector('.checkmor3');

plus3.addEventListener("click", () => createNewDiv())

 closeX.classList.add('close-X')
 test1.classList.add('hui');
 houseFoto.classList.add('house-foto');
 houseDescr.classList.add('house-descr');
 
 
 
houseDescr.innerHTML = `
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, illo? Quis minus fuga nostrum praesentium, harum, quaerat quisquam accusantium ex magnam debitis numquam asperiores iste commodi nobis optio nam sapiente?
`
closeX.innerHTML = `
<i class="fa-solid fa-xmark"></i>
`

function createNewDiv(){
const newDiv = document.createElement('div')
newDiv.classList.add('NewDiv')


document.body.appendChild(newDiv)
newDiv.appendChild(test1)
test1.appendChild(closeX)
test1.appendChild(houseFoto)
test1.appendChild(houseDescr)


closeX.addEventListener("click", () => newDiv.remove())
closeX.addEventListener("click", () => testfunction())

function testfunction(){
    document.body.style.overflow = "visible"
}

};
const plus4 = document.querySelector('.checkmor4');

plus4.addEventListener("click", () => createNewDiv())

 closeX.classList.add('close-X')
 test1.classList.add('hui');
 houseFoto.classList.add('house-foto');
 houseDescr.classList.add('house-descr');
 
 
 
houseDescr.innerHTML = `
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, illo? Quis minus fuga nostrum praesentium, harum, quaerat quisquam accusantium ex magnam debitis numquam asperiores iste commodi nobis optio nam sapiente?
`
closeX.innerHTML = `
<i class="fa-solid fa-xmark"></i>
`

function createNewDiv(){
const newDiv = document.createElement('div')
newDiv.classList.add('NewDiv')
document.body.style.overflow ="hidden"

document.body.appendChild(newDiv)
newDiv.appendChild(test1)
test1.appendChild(closeX)
test1.appendChild(houseFoto)
test1.appendChild(houseDescr)


closeX.addEventListener("click", () => newDiv.remove())
closeX.addEventListener("click", () => testfunction())

function testfunction(){
    document.body.style.overflow = "visible"
}

};
const plus5 = document.querySelector('.checkmor5');

plus5.addEventListener("click", () => createNewDiv())

 closeX.classList.add('close-X')
 test1.classList.add('hui');
 houseFoto.classList.add('house-foto');
 houseDescr.classList.add('house-descr');
 
 
 
houseDescr.innerHTML = `
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, illo? Quis minus fuga nostrum praesentium, harum, quaerat quisquam accusantium ex magnam debitis numquam asperiores iste commodi nobis optio nam sapiente?
`
closeX.innerHTML = `
<i class="fa-solid fa-xmark"></i>
`

function createNewDiv(){
const newDiv = document.createElement('div')
newDiv.classList.add('NewDiv')


document.body.appendChild(newDiv)
newDiv.appendChild(test1)
test1.appendChild(closeX)
test1.appendChild(houseFoto)
test1.appendChild(houseDescr)


closeX.addEventListener("click", () => newDiv.remove())
closeX.addEventListener("click", () => testfunction())

function testfunction(){
    document.body.style.overflow = "visible"
}

};


