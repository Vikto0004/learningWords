export const markupCard = number => {
  let nurkup = '';
  for (let i = 0; i < number; i++) {
    nurkup += `<div class="add-wrap-item">
      <div class="add-wrap-img">
        <img src="./img/letter-w.png" alt="" />
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
