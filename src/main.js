'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { searchImagesByQuery } from './js/pixabay-api.js';
import { creatMarkupImages, clearGallery } from './js/render-functions.js';
import { toggleLoader } from './js/loader.js';

const searchForm = document.querySelector('.js-form-container');
searchForm.addEventListener('submit', searchFoto);

function searchFoto(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const inputValue = form.elements.search.value.toLowerCase().trim();


    toggleLoader(true);

    if (!inputValue) {
        iziToast.error({
            message: 'Please enter the data in the input field',
            position: 'topRight',
            messageColor: '#ffffff',
            backgroundColor: '#EF4040',
        });
        clearGallery();
        return;
    }

    searchImagesByQuery(inputValue)
        .then(data => {
            if (!data.hits.length) {
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                    messageColor: '#ffffff',
                    backgroundColor: '#EF4040',
                });
                clearGallery();
                return {};
            }
            creatMarkupImages(data.hits);
            return data;
        })
        .catch(error => {
            console.log(error);
            clearGallery();
        })
        .finally(() => {
            toggleLoader(false);
            form.reset();
        });
}