import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{a as d,b as m}from"./assets/render-functions-42960d18.js";import{i as p}from"./assets/vendor-ad859c2f.js";const n=document.querySelector(".wrap-taskes"),S=document.querySelector(".wrap-title"),g=document.querySelector(".taskes-container"),e=JSON.parse(localStorage.getItem("cardInfoSave"))||[];e.length?n.insertAdjacentHTML("beforeend",d(e)):S.classList.add("is-open");n.addEventListener("click",t=>{const l=t.target.closest(".card-btn-delete"),o=t.target.closest(".modal-content"),a=o.querySelector(".fw-bold").textContent;if(l){const r=e.filter(({title:s})=>s!==a);localStorage.setItem("cardInfoSave",JSON.stringify(r)),o.remove(),p.info({message:`Card ${a} was deleted`,position:"topRight"})}else if(t.target.textContent.trim()==="Start!"){const r=e.filter(({title:i})=>i===a),{mode:s,language:c,time:f}=JSON.parse(localStorage.getItem("settingsTaskSave"));g.innerHTML=m(...r,c)}});
//# sourceMappingURL=commonHelpers3.js.map
