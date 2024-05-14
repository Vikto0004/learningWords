const u=a=>{let t="";for(let s=0;s<a;s++)t+=`<div class="add-wrap-item">
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
    </div>`;return t},m=a=>a.map(({title:t,number:s,progress:i,time:l})=>` <div class="modal-content rounded-4 shadow">
      <div class="modal-body p-5">
        <button class="card-btn-delete" type="button">
          <svg width="30px" height="25px">
            <use href="./img/sprite.svg#icon-delete"></use>
          </svg>
        </button>
        <h2 class="fw-bold mb-0">${t}</h2>

        <ul class="d-grid gap-4 my-5 list-unstyled small">
          <li class="d-flex gap-4">
            <h5 class="mb-0">Word count:</h5>
            <p>${s}</p>
          </li>
          <li class="d-flex gap-4">
            <h5 class="mb-0">Progress:</h5>
            <p>${i} / ${s}</p>
          </li>
          <li class="d-flex gap-4">
            <h5 class="mb-0">Execution time:</h5>
            <p>${l} min</p>
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
    </div>`).join(""),g=(a,t)=>{const s=n(a[t]);let i="Translate";t==="Translate"&&(i="Original");const l=n(a[i]);return s.map((r,d,c)=>`<div class="task-wrap">
      <div class="task-wrap-top">
        <p class="task-wrap-top-val">Value</p>
        <p class="task-wrap-top-count">00 / 00</p>
      </div>
      <div class="wrap-word_img">
        <p class="task-wrap-word">${r}</p>
        <img
          class="task-img-word task-img-word-blur"
          src="${p(r,a)}"
          alt="word"
        />
      </div>
      <p class="task-wrap-text">Choose <span>the</span> appropriate term</p>
      <ul class="task-list">${o(r,l)}</ul>
      <button class="task-text-know" type="button">I don't know</button>
    </div>`).join("")};function n(a){const t=[...a];for(let s=t.length-1;s>0;s--){const i=Math.floor(Math.random()*(s+1));[t[s],t[i]]=[t[i],t[s]]}return t}function o(a,t){let s=`<li class="task-list-item"><button class="task-list-item-btn">${a}</button></li>`;const i=[];let l=0;for(const e of t){if(l===3)break;if(e!==a){const r=`<li class="task-list-item"><button class="task-list-item-btn">${e}</button></li>`;i.push(r),l++}}return i.push(s),i.join("")}function p(a,t){const s=t.Original.indexOf(a);return t.linkOnImg[s]}export{m as a,g as b,u as m};
//# sourceMappingURL=render-functions-42960d18.js.map
