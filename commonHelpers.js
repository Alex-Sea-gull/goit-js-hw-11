import{S as d,i}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();function h(o){const t="https://pixabay.com/api/",n="45152929-a1340ee97784cf10d0ad70de4",s=new URLSearchParams({key:n,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${t}?${s}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).catch(console.log)}function m(o){const t=document.querySelector(".js-gallery"),n=o.map(({webformatURL:e,largeImageURL:r,tags:a,likes:f,views:u,comments:p,downloads:g})=>`
        <a href="${r}" class="gallery__link">
            <div class="photo-card">
                <img src="${e}" alt="${a}"/>
                <div class="info">
                    <p class="text-photo"><strong>Likes:</strong> ${f}</p>
                    <p class="text-photo"><strong>Views:</strong> ${u}</p>
                    <p class="text-photo"><strong>Comments:</strong> ${p}</p>
                    <p class="text-photo"><strong>Downloads:</strong> ${g}</p>
                </div>
            </div>
        </a>
    `).join("");t.innerHTML=n,new d(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.9}).refresh()}function c(){const o=document.querySelector(".gallery");o.innerHTML=""}function l(o){const t=document.querySelector(".wrap-loader");t&&(o?t.style.display="inline-block":t.style.display="none")}const y=document.querySelector(".js-form-container");y.addEventListener("submit",L);function L(o){o.preventDefault();const t=o.currentTarget,n=t.elements.search.value.toLowerCase().trim();if(l(!0),!n){i.error({message:"Please enter the data in the input field",position:"topRight",messageColor:"#ffffff",backgroundColor:"#EF4040"}),c();return}h(n).then(s=>{if(!s.hits.length){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageColor:"#ffffff",backgroundColor:"#EF4040"}),c();return}m(s.hits)}).catch(s=>{console.log(s)}).finally(()=>{l(!1)}),t.reset()}
//# sourceMappingURL=commonHelpers.js.map
