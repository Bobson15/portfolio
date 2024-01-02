// SEKRETY
typed_word=""
document.addEventListener('keypress', function(event){
    typed_word=typed_word+event.key
    if (typed_word==="rick"){
        window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
    }
})


//TŁUMACZ
function tlumacz(){
    window.location.href = './english.html';
}
function tlumaczpl(){
    window.location.href = './index.html';
}


// ZMIENIANIE SEKCJI O MNIE
const tablinks = document.getElementsByClassName('tab-links');
const tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add('active-link')
    document.getElementById(tabname).classList.add("active-tab");
}


// GALERIA KRITY
let currentImageIndex = 0;
const images=[
      './img/galeria/candy flip.png',
      './img/galeria/pijekawe.png',
      './img/galeria/bryska.png',
      './img/galeria/szpaku ddzppm.png',
      './img/galeria/sunflower.png',
      './img/galeria/tarcho terror.png'
];
function openLightbox(index){
    currentImageIndex = index;
    updateLightboxImage();
    document.getElementById('lightbox').style.display = 'flex';
}
function closeLightbox(){
    document.getElementById('lightbox').style.display = 'none';
}
function changeImage(direction){
    currentImageIndex += direction;
    if (currentImageIndex < 0){
        currentImageIndex = images.length - 1;
    }else if(currentImageIndex >= images.length){
        currentImageIndex = 0;
    }
    updateLightboxImage();
}
function updateLightboxImage(){
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = images[currentImageIndex];
}