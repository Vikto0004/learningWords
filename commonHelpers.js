/* empty css                      */import{i as g}from"./assets/vendor-ad859c2f.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(t){if(t.ep)return;t.ep=!0;const i=r(t);fetch(t.href,i)}})();const p="43795533-00e69c3734dde476e8d836fd2",f="https://pixabay.com/api/",h=o=>{const e=new URLSearchParams({key:p,q:o,orientation:"horizontal",safesearch:!0});return fetch(`${f}?${e.toString()}`).then(r=>{if(!r.ok)throw new Error;return r.json()})};function m(){document.querySelectorAll(".add-wrap-item").forEach(e=>{let r=0;e.addEventListener("click",n=>{const t=n.target.closest(".add-wrap-img-icon-left");n.target.closest(".add-wrap-img-icon-right")?d(n,++r):t&&d(n,--r)})})}m();function d(o,e){const r=o.target.closest(".add-wrap-item"),n=r.querySelector(".form-control").value.trim();if(!n)return;const t=r.querySelector(".add-search-img"),i=r.querySelector(".add-wrap-img-icon-left"),a=r.querySelector(".add-wrap-img-icon-right");h(n).then(({hits:l})=>{if(!l.length){g.warning({message:`Will not finding picture to word ${n}`,position:"topRight"}),a.classList.add("add-wrap-img-icon-not-active"),i.classList.add("add-wrap-img-icon-not-active");return}if(e>=l.length){a.classList.add("add-wrap-img-icon-not-active");return}else a.classList.contains("add-wrap-img-icon-not-active")&&a.classList.remove("add-wrap-img-icon-not-active");e<=0?i.classList.add("add-wrap-img-icon-not-active"):i.classList.contains("add-wrap-img-icon-not-active")&&i.classList.remove("add-wrap-img-icon-not-active"),t.src=l[e].webformatURL}).catch(l=>console.log(l))}const v=o=>{let e="";for(let r=0;r<o;r++)e+=`<div class="add-wrap-item">
      <div class="add-wrap-img">
        <img class="add-search-img" src="./img/letter-w.png" alt="" />
        <button class="add-wrap-img-icon-left" type="button">
          <svg width="30px" height="30px">
            <use href="./img/sprite.svg#icon-arrow-left"></use>
          </svg>
        </button>
        <button class="add-wrap-img-icon-right" type="button">
          <svg width="30px" height="30px">
            <use href="./img/sprite.svg#icon-arrow-right"></use>
          </svg>
        </button>
      </div>
      <input
        type="text"
        name="original"
        required
        placeholder="Original"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-lg"
      /><input
        type="text"
        name="translate"
        required
        placeholder="Translate"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-lg"
      />
    </div>`;return e},s=document.querySelector(".model-create-form"),c={title:"Title",number:"00",progress:"00 / 00",time:"00.00",Original:[],Translate:[],linkOnImg:[]},u=JSON.parse(localStorage.getItem("cardInfoSave"))||[];s.addEventListener("submit",o=>{o.preventDefault();const e=s.elements.titleTask.value.trim(),r=s.elements.wordCounter.value.trim(),n=s.elements.original,t=s.elements.translate,i=s.querySelectorAll(".add-search-img");c.title=e,c.number=r,n.forEach(a=>c.Original.push(a.value.trim())),t.forEach(a=>c.Translate.push(a.value.trim())),i.forEach(a=>c.linkOnImg.push(a.src)),u.push(c),localStorage.setItem("cardInfoSave",JSON.stringify(u))});s.elements.wordCounter.addEventListener("input",o=>{const e=o.target.value,r=s.children.length-1,n=e-r;if(e>=10)s.insertAdjacentHTML("beforeend",v(n)),m();else{g.error({message:"Minimum 10 words",position:"topRight"});return}if(n<0){[...s.children].splice(n).forEach(i=>i.remove()),m();return}});s.addEventListener("click",o=>{const e=o.target,r=e.closest(".add-wrap-img-icon-left"),n=e.closest(".add-wrap-img-icon-right");e.nodeName!=="INPUT"&&!r&&!n||e.name==="original"&&(e.removeEventListener("blur",t=>d(t,0)),e.addEventListener("blur",t=>d(t,0)))});
//# sourceMappingURL=commonHelpers.js.map
