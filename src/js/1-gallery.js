'use strict';
import images from './images.js';
import simpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

const ulElem = document.querySelector(".gallery");
   
  function imageTemplate({ preview, original, description }) {
    return `<li class="gallery-item">
    <a class="gallery-link" href="${original}">
      <img
        class="gallery-image"
        src="${preview}"
        alt="${description}"
        title="${description}"
      />
    </a>
  </li>`;
  }
  
  function imagesTemplate(arr) {
    return arr.map(imageTemplate).join("");
  }
  ulElem.innerHTML = imagesTemplate(images);
  ulElem.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target === e.currentTarget) return;
    const options = {
        captionDelay: 250,  
    }
    const lightbox = new simpleLightbox('.gallery a', options);
    
  });