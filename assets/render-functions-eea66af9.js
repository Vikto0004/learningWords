(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l=i=>{let r="";for(let s=0;s<i;s++)r+=`<div class="add-wrap-item">
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
    </div>`;return r},n=i=>i.map(({title:r,number:s,progress:a,time:e})=>` <div class="modal-content rounded-4 shadow">
      <div class="modal-body p-5">
        <button class="card-btn-delete" type="button">
          <svg width="30px" height="25px">
            <use href="./img/sprite.svg#icon-delete"></use>
          </svg>
        </button>
        <h2 class="fw-bold mb-0">${r}</h2>

        <ul class="d-grid gap-4 my-5 list-unstyled small">
          <li class="d-flex gap-4">
            <h5 class="mb-0">Word count:</h5>
            <p>${s}</p>
          </li>
          <li class="d-flex gap-4">
            <h5 class="mb-0">Progress:</h5>
            <p>${a}</p>
          </li>
          <li class="d-flex gap-4">
            <h5 class="mb-0">Execution time:</h5>
            <p>${e} min</p>
          </li>
        </ul>
        <button
          type="button"
          class="btn btn-lg btn-primary mt-5 w-100"
          data-bs-dismiss="modal"
        >
          Start!
        </button>
      </div>
    </div>`).join("");export{n as a,l as m};
//# sourceMappingURL=render-functions-eea66af9.js.map
