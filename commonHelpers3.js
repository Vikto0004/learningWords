import{a as c}from"./assets/render-functions-eea66af9.js";/* empty css                      */import{i}from"./assets/vendor-ad859c2f.js";const o=document.querySelector(".wrap-taskes"),d=document.querySelector(".wrap-title"),e=JSON.parse(localStorage.getItem("cardInfoSave"))||[];e.length?o.insertAdjacentHTML("beforeend",c(e)):d.classList.add("is-open");o.addEventListener("click",s=>{const t=s.target.closest(".card-btn-delete");if(t){const r=t.closest(".modal-content"),a=r.querySelector(".fw-bold").textContent,n=e.filter(({title:l})=>l!==a);localStorage.setItem("cardInfoSave",JSON.stringify(n)),r.remove(),i.info({message:`Card ${a} was deleted`,position:"topRight"})}});
//# sourceMappingURL=commonHelpers3.js.map
