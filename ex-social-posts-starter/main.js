/*
Ricreiamo un feed social aggiungendo al layout di base fornito, 
il nostro javascript in cui: Creiamo il nostro array di oggetti che 
rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie 
per stampare la relativa card: nome autore, foto profilo, data in formato americano, 
testo del post, immagine (non tutti i post devono avere una immagine), numero di likes.
Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash 
(https://unsplash.it/300/300?image=<id>) Prendendo come riferimento il layout di 
esempio presente nell’html, stampiamo i post del nostro feed.
Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes.
*/


const post = [
    {
        imgUtente: 'https://unsplash.it/300/300?image=15',
        utente: 'Phil Mangione',
        tempo: '05/09/2021',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        imgPost: 'https://unsplash.it/600/300?image=171',
        miPiace: 'Mi Piace',
        piace: 'piace a',
        numeroMiPiace: 0,
        persone: 'persone',
    },
    {
        imgUtente: 'https://i.picsum.photos/id/1025/300/300.jpg?hmac=4Y_I-JXDyweKiXCJHr7qYyF8RwfblAka9dd1ooCY1fY',
        utente: 'Dino Cagnolino',
        tempo: '10/12/2021',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        imgPost: 'https://i.picsum.photos/id/281/600/300.jpg?hmac=WOWGvOOU_7C-3QDpIPw-coro7Pe4BaZGrPht2VbG5qg',
        miPiace: 'Mi Piace',
        piace: 'piace a',
        numeroMiPiace: 0,
        persone: 'persone',
    },
    {
        utente: 'Ulisse',
        tempo: '4 mesi fa',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        miPiace: 'Mi Piace',
        piace: 'piace a',
        numeroMiPiace: 0,
        persone: 'persone',
    },
    {
        imgUtente: 'https://i.picsum.photos/id/944/300/300.jpg?hmac=lHUGD_YGKUze5GyzrN6yuqmk0TuGuaQoI0fsbV-nDZY',
        utente: 'Vito Adventure',
        tempo: '4 mesi fa',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        imgPost: 'https://i.picsum.photos/id/416/600/300.jpg?hmac=aqFBkyQE8_zJEJ9bxWr-TwYR24-viV3kvoWa1XgvjbY',
        miPiace: 'Mi Piace',
        piace: 'piace a',
        numeroMiPiace: 0,
        persone: 'persone',
    },
    
];




const postContainer = document.getElementById('container');

for (let i = 0; i < post.length; i++) {
  const object = post[i];
  
  const scheda = `
  <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${object.imgUtente}" alt="">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${object.utente}</div>
                        <div class="post-meta__time">${object.tempo}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${object.text}</div>
            <div class="post__image">
                <img src="${object.imgPost}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">${object.miPiace}</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                    ${object.piace} <b id="like-counter-1" class="js-likes-counter">${object.numeroMiPiace}</b> ${object.persone}
                    </div>
                </div> 
            </div>            
        </div>
  `;
  postContainer.innerHTML += scheda;
}

