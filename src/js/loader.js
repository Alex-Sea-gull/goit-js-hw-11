'use strict';

export function toggleLoader(isVisible) {
    const loader = document.querySelector('.wrap-loader');
    if (loader) {
        if (isVisible) {
            loader.classList.remove('hidden');
        } else {
            loader.classList.add('hidden');
        }
    }
}