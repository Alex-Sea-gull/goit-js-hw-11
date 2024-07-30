'use strict';

export function toggleLoader(isVisible) {
    const loader = document.querySelector('.wrap-loader');
    if (loader) {
        if (isVisible) {
            loader.style.display = 'inline-block';
        } else {
            loader.style.display = 'none';
        }
    }
}