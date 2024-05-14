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
            <p>${progress} / ${number}</p>
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

export const markupTaskChoose = (currentTask, language) => {
  const arrTrueWords = shuffleArray(currentTask[language]);

  let langChoose = 'Translate';
  if (language === 'Translate') langChoose = 'Original';
  const arrChooseWords = shuffleArray(currentTask[langChoose]);

  const markup = arrTrueWords.map((trueWord, i, array) => {
    return `<div class="task-wrap">
      <div class="task-wrap-top">
        <p class="task-wrap-top-val">Value</p>
        <p class="task-wrap-top-count">00 / 00</p>
      </div>
      <div class="wrap-word_img">
        <p class="task-wrap-word">${trueWord}</p>
        <img
          class="task-img-word task-img-word-blur"
          src="${searchImgByWord(trueWord, currentTask, language)}"
          alt="word"
        />
      </div>
      <p class="task-wrap-text">Choose <span>the</span> appropriate term</p>
      <ul class="task-list">${mixingItem(trueWord, arrChooseWords)}</ul>
      <button class="task-text-know" type="button">I don't know</button>
    </div>`;
  });
  return markup.join('');
};

//* Shuffling array
function shuffleArray(array) {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

function mixingItem(trueWord, array) {
  let trueItem = `<li class="task-list-item"><button class="task-list-item-btn">${trueWord}</button></li>`;
  const arrMarkup = [];

  let countet = 0;
  for (const word of array) {
    if (countet === 3) break;
    else if (word !== trueWord) {
      const el = `<li class="task-list-item"><button class="task-list-item-btn">${word}</button></li>`;
      arrMarkup.push(el);
      countet++;
    }
  }
  arrMarkup.push(trueItem);
  return arrMarkup.join('');
}

function searchImgByWord(trueWord, currentTask) {
  const indexWord = currentTask.Original.indexOf(trueWord);
  const linkImg = currentTask.linkOnImg[indexWord];
  return linkImg;
}
