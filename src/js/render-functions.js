export const markupAddCard = number => {
  let nurkup = '';
  for (let i = 0; i < number; i++) {
    nurkup += `<div class="add-wrap-item">
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
    </div>`;
  }
  return nurkup;
};

export const markupGetCards = arrCardSave => {
  return arrCardSave
    .map(({ title, number, progress, time }) => {
      return ` <div class="modal-content rounded-4 shadow">
      <div class="modal-body p-5">
        <button class="card-btn-delete" type="button">
          <svg width="30px" height="25px">
            <use href="./img/sprite.svg#icon-delete"></use>
          </svg>
        </button>
        <h2 class="fw-bold mb-0">${title}</h2>

        <ul class="d-grid gap-4 my-5 list-unstyled small">
          <li class="d-flex gap-4">
            <h5 class="mb-0">Word count:</h5>
            <p>${number}</p>
          </li>
          <li class="d-flex gap-4">
            <h5 class="mb-0">Progress:</h5>
            <p>${progress}</p>
          </li>
          <li class="d-flex gap-4">
            <h5 class="mb-0">Execution time:</h5>
            <p>${time} min</p>
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
    </div>`;
    })
    .join('');
};
