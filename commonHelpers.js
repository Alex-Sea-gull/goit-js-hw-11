import{S as g,i as a}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();function m(o){const t="https://pixabay.com/api/",n="45152929-a1340ee97784cf10d0ad70de4",s=new URLSearchParams({key:n,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${t}?${s}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).catch(console.log)}function h(o){const t=document.querySelector(".js-gallery"),n=o.map(({webformatURL:e,largeImageURL:r,tags:i,likes:u,views:d,comments:f,downloads:p})=>`
        <a href="${r}" class="gallery__link">
            <div class="photo-card">
                <img src="${e}" alt="${i}"/>
                <div class="info">
                    <p><strong>Likes:</strong> ${u}</p>
                    <p><strong>Views:</strong> ${d}</p>
                    <p><strong>Comments:</strong> ${f}</p>
                    <p><strong>Downloads:</strong> ${p}</p>
                </div>
            </div>
        </a>
    `).join("");t.innerHTML=n,new g(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.9}).refresh()}function c(){const o=document.querySelector(".gallery");o.innerHTML=""}function l(o){const t=document.querySelector(".wrap-loader");t&&(o?t.classList.remove("hidden"):t.classList.add("hidden"))}const y=document.querySelector(".js-form-container");y.addEventListener("submit",L);function L(o){o.preventDefault();const t=o.currentTarget,n=t.elements.search.value.toLowerCase().trim();if(!n){a.error({message:"Please enter the data in the input field",position:"topRight"}),c();return}l(!0),m(n).then(s=>{if(!s.hits.length){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c();return}h(s.hits)}).catch(s=>{console.log(s),l(!1)}),t.reset()}
//# sourceMappingURL=commonHelpers.js.map