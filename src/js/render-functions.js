'use strict';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export function creatMarkupImages(images) {
    const gallery = document.querySelector('.js-gallery');
    const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <a href="${largeImageURL}" class="gallery__link">
            <div class="photo-card">
                <img src="${webformatURL}" alt="${tags}"/>
                <div class="info">
                    <p><strong>Likes:</strong> ${likes}</p>
                    <p><strong>Views:</strong> ${views}</p>
                    <p><strong>Comments:</strong> ${comments}</p>
                    <p><strong>Downloads:</strong> ${downloads}</p>
                </div>
            </div>
        </a>
    `).join('');

    gallery.innerHTML = markup;

    const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
        overlayOpacity: 0.9,
    });
    lightbox.refresh();
}

export function clearGallery() {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = '';
}

