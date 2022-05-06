// Descrizione:
// Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
// Bonus:
// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
// 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
// Consigli del giorno:
// - regola d'oro: riciclare ovunque possibile! Questo significa che per la parte di markup possiamo recuperare html e css dell'esercizio svolto qualche giorno fa: è già tutto pronto!
// - il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l'esercizio si riduce a poche righe 


Vue.config.devtools = true;

const app = new Vue(
    {
        el: "#root",
        data:{
            sliderItems:[
                {
                    image:"img/01.jpg",
                    title:"Svezia",
                    text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
                },
                {
                    image:"img/02.jpg",
                    title:"Svizzera",
                    text:"Lorem ipsum.",
                },
                {
                    image:"img/03.jpg",
                    title:"Gran Bretagna",
                    text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
                },
                {
                    image:"img/04.jpg",
                    title:"Germania",
                    text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.",
                },
                {
                    image:"img/05.jpg",
                    title:"Paradise",
                    text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.",
                }
            ],
            currentSlide:"0",

                methods:{
                                }
        }
    },   
);


// const images = [
//     'img/01.jpg',
//     'img/02.jpg',
//     'img/03.jpg',
//     'img/04.jpg',
//     'img/05.jpg'
// ];

// const title = [
//     'Svezia',
//     'Svizzera',
//     'Gran Bretagna',
//     'Germania',
//     'Paradise'
// ];

// const text = [
//     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
//     'Lorem ipsum',
//     'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
//     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
//     'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
// ];

// // 1. Uniamo i 3 array di sopra in un array di oggetti
// const data = [];

// for (let i = 0; i < images.length; i++) {
//     data.push({
//         image: images[i],
//         title: title[i],
//         text : text[i]
//     });
// }

// console.log(data);

// const itemsContainer  = document.querySelector('.items');
// const thumbsContainer = document.getElementsByClassName('thumbs')[0]; // document.querySelector('.thumbs')
// let currentSlide      = 0; // ci posizioniamo sulla prima slide

// createItems();
// createThumbnails();

// // Slide precedente
// document.querySelector('.prev').addEventListener('click', function() {

//     // se sono alla prima, mi posiziono sull'ultima
//     if (currentSlide == 0) {
//         currentSlide = data.length - 1; // ultima
//     } else {
//         currentSlide--; // precedente
//     }

//     console.log('Prev', currentSlide);
//     changeActive(currentSlide);
// });

// // Slide successiva
// document.querySelector('.next').addEventListener('click', function() {

//     // se sono all'ultima, mi posiziono sulla prima
//     if (currentSlide == data.length - 1) {
//         currentSlide = 0; // prima
//     } else {
//         currentSlide++; // successiva
//     }

//     console.log('Next', currentSlide);
//     changeActive(currentSlide);
// });

// function changeActive(index) {

//     // togliamo la classe active dall'item
//     document.querySelector('.item.active').classList.remove('active');
//     document.querySelector('.thumb.active').classList.remove('active');

//     // aggiungiamo la classe active all'item corrente
//     document.querySelectorAll('.item')[index].classList.add('active');
//     document.querySelectorAll('.thumb')[index].classList.add('active');
// }

// // creiamo le slides
// function createItems() {
//     for (let i = 0; i < data.length; i++) {
//         let elem = data[i];

//         // aggiungiamo la classe active alla prima slide (currentSlide = 0)
//         let firstActive = '';
//         if (i == currentSlide) {
//             firstActive = 'active';
//         }

//         itemsContainer.innerHTML +=
//         `<div class="item ${firstActive}">
//             <img src="${elem.image}" alt="${elem.title}">
//             <div class="text">
//                 <h3>${elem.title}</h3>
//                 <p>${elem.text}</p>
//             </div>
//         </div>`;  
//     }
// }

// // creiamo le thumbnails
// function createThumbnails() {

//     for (let i = 0; i < data.length; i++) {
//         let elem = data[i];

//         // aggiungiamo la classe active alla prima thumbnail (currentSlide = 0)
//         let firstActive = '';
//         if (i == currentSlide) {
//             firstActive = 'active';
//         }

//         thumbsContainer.innerHTML +=
//             `<div class="thumb ${firstActive}">
//                 <img src="${elem.image}" alt="${elem.title}">
//             </div>`;
//     }
// }