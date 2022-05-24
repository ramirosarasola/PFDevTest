const carrousel = document.querySelector('.carrousel');
const selectorCarrousel = document.querySelectorAll(".selector");


// cuando hago click en cada color
//saber la position de ese color
//aplicar un transform translateX al carousel
//quitar la clase activo de todos los puntos
//add la clase ativo al punto que el hemos echo click


selectorCarrousel.forEach(  (eachColor, i)=>{
    selectorCarrousel[i].addEventListener('click',()=>{

        let position = i;
        let operation = position * -(100/6);

        carrousel.style.transform = `translateX(${ operation }%)`;

        selectorCarrousel.forEach((eachColor, i)=>{
            selectorCarrousel[i].classList.remove('active');
        })

        selectorCarrousel[i].classList.add('active');
    })
})

const carouselItem = document.querySelectorAll('.carrousel--item');
const sizeA = document.querySelector('.size1');
const sizeB = document.querySelector('.size2');
const sizeC = document.querySelector('.size3');
