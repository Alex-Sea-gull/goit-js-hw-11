import{S as p,i as a}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function d(s){const r="https://pixabay.com/api/",n="45152929-a1340ee97784cf10d0ad70de4",o=new URLSearchParams({key:n,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${r}?${o}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).catch(console.log)}function m(s){const r=document.querySelector(".js-gallery"),n=s.map(({webformatURL:e,largeImageURL:t,tags:i,likes:l,views:u,comments:f,downloads:g})=>`
        <a href="${t}" class="gallery__link">
            <div class="photo-card">
                <img src="${e}" alt="${i}"/>
                <div class="info">
                    <p><strong>Likes:</strong> ${l}</p>
                    <p><strong>Views:</strong> ${u}</p>
                    <p><strong>Comments:</strong> ${f}</p>
                    <p><strong>Downloads:</strong> ${g}</p>
                </div>
            </div>
        </a>
    `).join("");r.insertAdjacentHTML("beforeend",n),new p(".gallery a").refresh()}function c(){const s=document.querySelector(".gallery");s.innerHTML=""}const h=document.querySelector(".js-form-container");h.addEventListener("submit",y);function y(s){s.preventDefault();const r=s.currentTarget,n=r.elements.search.value.toLowerCase().trim();if(!n){a.error({message:"Please enter the data in the input field",position:"topRight"}),c();return}d(n).then(o=>{if(!o.hits.length){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c();return}m(o.hits)}).catch(o=>{console.log(o)}),r.reset()}
//# sourceMappingURL=commonHelpers.js.map
