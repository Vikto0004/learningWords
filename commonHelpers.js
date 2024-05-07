import{i as u}from"./assets/vendor-ad859c2f.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();const w=document.querySelector(".btn-create"),x=document.querySelector(".model-create-close"),C=document.querySelector("#wordCounter"),h=document.querySelector("#titleTask"),p=document.querySelector(".model-create-list"),d=document.querySelector(".model-create-form"),f=document.querySelector(".wrap-taskes"),O=document.querySelector(".task-container"),b=document.querySelector(".task-title"),I=document.querySelectorAll("#wordCounterTask"),g=document.querySelector(".js-backgrop-model-create"),N=document.querySelector(".js-backgrop-qustione"),E=document.querySelector(".task"),c={elWrap:document.querySelector(".qustione-wrap"),elDropChoose:document.querySelector(".drop-warp-choose span"),elComesChoose:document.querySelector(".comes-choose"),elDropIcon:document.querySelector(".drop-warp-icon "),langOf:document.querySelector(".choose-lang-of"),langOn:document.querySelector(".choose-lang-on"),langRes:document.querySelector(".res-lang")},M=document.querySelector(".taskes-container"),l={mode:"Choose word",lang:"ukrWord"};w.addEventListener("click",()=>{g.classList.add("is-open")});x.addEventListener("click",()=>{g.classList.remove("is-open")});C.addEventListener("input",s=>{const e=s.currentTarget.value-p.children.length;if(e===0)return;if(e<0){[...p.children].splice(e).forEach(r=>r.remove());return}let t="";for(let o=0;o<e;o++)t+='<li><input type="text" name="engl" required /><input type="text" name="ukr" required /></li>';p.insertAdjacentHTML("beforeend",t),t=""});d.addEventListener("submit",s=>{s.preventDefault();const e=JSON.parse(localStorage.getItem("saveWordLocal"))||[],t=h.value.trim(),o=C.value.trim().padStart(2,"0");if(t){if(o<2){u.error({message:"The number must not be less than 2",position:"topRight"});return}else if(e.some(({title:a})=>a===t)){u.error({message:"This title is already in use",position:"topRight"});return}}else{u.error({message:"Enter title to task",position:"topRight"});return}const r=[...d.elements.engl].map(a=>a.value.trim()),n=[...d.elements.ukr].map(a=>a.value.trim());e.push({title:t,englWord:r,ukrWord:n}),localStorage.setItem("saveWordLocal",JSON.stringify(e)),f.insertAdjacentHTML("beforeend",v(t,o)),u.success({message:"You successfully adding it's task",position:"topRight"}),h.value="",d.reset(),g.classList.remove("is-open")});function v(s,e){return b.textContent=s,I.forEach(t=>t.textContent=e),`<div class="task-container">${O.innerHTML}</div>`}const S=JSON.parse(localStorage.getItem("saveWordLocal"))||[];if(S.length){const s=S.map(({title:e,ukrWord:t})=>v(e,String(t.length).padStart(2,"0"))).join("");f.innerHTML=s}f.addEventListener("click",s=>{if(s.target.nodeName!=="BUTTON")return;const e=s.target.closest(".task-container"),t=e.querySelector(".task-title").textContent,o=s.target.textContent;if(o==="Delete"){const n=JSON.parse(localStorage.getItem("saveWordLocal")).filter(({title:a})=>a!==t);localStorage.setItem("saveWordLocal",JSON.stringify(n)),e.remove(),u.info({message:`Task ${t} was deleted`,position:"topRight"})}else o==="Start"&&(N.classList.add("is-open"),$("#accordion").accordion({collapsible:!0,active:!1,icons:!1,beforeActivate:()=>{c.elDropIcon.classList.toggle("drop-warp-icon-active")}}),JSON.parse(localStorage.getItem("saveWordLocal")).forEach(({title:n,englWord:a,ukrWord:i})=>{if(n===t){l.title=t,l.ukrWord=i,l.englWord=a,l.number=a.length;return}}))});c.elWrap.addEventListener("click",s=>{const e=s.target;if(e.nodeName!=="BUTTON"&&!e.closest(".qust-res-icon-btn"))return;const t=o=>{c.elComesChoose.textContent=o+":",c.elDropChoose.textContent=o,l.mode=o,$("#accordion").accordion("option","active",!1)};if(e.textContent==="Choose word"){t("Choose word");return}else if(e.textContent==="Enter word"){t("Enter word");return}else if(e.textContent==="Mixed"){t("Mixed");return}else if(e.textContent==="Go"){A();return}if(e.closest(".qust-res-icon-btn")){const o=c.langOf.textContent,r=c.langOn.textContent;l.lang=o,c.langOf.textContent=r,c.langOn.textContent=o,c.langRes.textContent=o;return}});function A(){E.classList.add("is-open");const{number:s,lang:e,mode:t,ukrWord:o,englWord:r,title:n}=l;let a="";if(e==="ukrWord"?a="englWord":a="ukrWord",t==="Choose word"){let i="",y=0;const W=m(l[e]);for(const k of W){const T=l[e].indexOf(k),L=String(++y).padStart(2,"0"),q=String(s).padStart(2,"0");i+=`<div class="task-wrap">
        <div class="task-wrap-top">
          <p class="task-wrap-top-val">Value</p>
          <p class="task-wrap-top-count">${L} / ${q}</p>
        </div>
        <p class="task-wrap-word">${k}</p>
        <p class="task-wrap-text">Choose <span>the</span> appropriate term</p>
        <ul class="task-list">
        ${B(l[a],T)}
        </ul>
        <p class="task-text-know">I don't know</p>
      </div>`}M.innerHTML=i}}function m(s){const e=[...s];for(let t=e.length-1;t>0;t--){const o=Math.floor(Math.random()*(t+1));[e[t],e[o]]=[e[o],e[t]]}return e}function B(s,e){const t=s[e],o=`<li class="task-list-item">${t}</li>`,r=m(s),n=[];let a=0;for(const i of r){if(a===3)break;i!==t&&(n.push(`<li class="task-list-item">${i}</li>`),a++)}return n.push(o),m(n).join("")}
//# sourceMappingURL=commonHelpers.js.map
