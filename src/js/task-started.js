import { elBackgropTask } from './create-word-task';
import { elTaskesContainer } from './create-word-task';

const elQustioneWrap = document.querySelector('.qustione-wrap');
const elHeaderCount = document.querySelector('.task-header-text');
const elHeaderLine = document.querySelector('.task-header-line');

let counterNumber = 0;
let chooseTrue = 0;

elQustioneWrap.addEventListener('click', event => {
  if (event.target.textContent === 'Go') {
    startingTask();
  }
});

function startingTask() {
  elBackgropTask.classList.add('is-open');
  const elTaskHeaderTitle = document.querySelector('.task-header-title');
  const optionsTask = JSON.parse(localStorage.getItem('currentSaveTask'));
  const { number, lang, mode, Ukraine, English, title } = optionsTask;

  elHeaderCount.textContent = `00 / ${String(number).padStart(2, '0')}`;
  elTaskHeaderTitle.textContent = title;

  let language = '';
  if (lang === 'Ukraine') language = 'English';
  else language = 'Ukraine';

  if (mode === 'Choose word') {
    let markup = '';
    let counter = 0;
    const shuffledArr = shuffleArray(optionsTask[lang]);

    for (const word of shuffledArr) {
      const indexTrue = optionsTask[lang].indexOf(word);
      const ofNumb = String(++counter).padStart(2, '0');
      const onNumb = String(number).padStart(2, '0');

      markup += `<div class="task-wrap">
        <div class="task-wrap-top">
          <p class="task-wrap-top-val">Value</p>
          <p class="task-wrap-top-count">${ofNumb} / ${onNumb}</p>
        </div>
        <p class="task-wrap-word">${word}</p>
        <p class="task-wrap-text">Choose <span>the</span> appropriate term</p>
        <ul class="task-list">
        ${mixingItem(optionsTask[language], indexTrue)}
        </ul>
        <button class="task-text-know" type="button">I don't know</button>
      </div>`;
    }
    elTaskesContainer.innerHTML = markup;
  }
}

//* Shuffling array
function shuffleArray(array) {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

//* Created elements to "task-list"
function mixingItem(array, indexTrue) {
  const trueWord = array[indexTrue];
  const trueItem = `<li class="task-list-item"><button class="task-list-item-btn">${trueWord}</button></li>`;
  const shuffleArr = shuffleArray(array);
  const arrMarkup = [];

  let countet = 0;
  for (const word of shuffleArr) {
    if (countet === 3) break;
    else if (word !== trueWord) {
      const el = `<li class="task-list-item"><button class="task-list-item-btn">${word}</button></li>`;
      arrMarkup.push(el);
      countet++;
    }
  }
  arrMarkup.push(trueItem);
  return shuffleArray(arrMarkup).join('');
}

elTaskesContainer.addEventListener('click', event => {
  const elTarget = event.target;
  if (elTarget.nodeName !== 'BUTTON' && elTarget.textContent !== "I don't know")
    return;

  //* Giving current value and elements
  const elTaskWrap = elTarget.closest('.task-wrap');
  const elTaskWrapNext = elTaskWrap.nextElementSibling;
  const trueWord = elTaskWrap.querySelector('.task-wrap-word').textContent;
  const chooseWord = elTarget.textContent;
  const chooseWordAll = elTaskWrap.querySelectorAll('.task-list-item-btn');
  const elBtnNotKnow = elTaskWrap.querySelector('.task-text-know');

  const optionsTask = JSON.parse(localStorage.getItem('currentSaveTask'));
  const { number, lang } = optionsTask;

  let language = '';
  if (lang === 'Ukraine') language = 'English';
  else language = 'Ukraine';

  const trueIndex = optionsTask[lang].indexOf(trueWord);
  const chooseIndex = optionsTask[language].indexOf(chooseWord);

  if (trueIndex === chooseIndex) {
    ++chooseTrue;
    elTarget.classList.add('task-list-item-true');
    elTaskWrap.classList.add('task-list-item-true');
    setTimeout(scrollNext, 1000);
  } else if (elTarget.textContent === "I don't know") {
    elTarget.classList.add('task-list-item-false');
    elTaskWrap.classList.add('task-list-item-false');
    setTimeout(scrollNext, 1000);
  } else {
    elTarget.classList.add('task-list-item-false');
    elTaskWrap.classList.add('task-list-item-false');
    setTimeout(scrollNext, 1000);
  }

  chooseWordAll.forEach(el => (el.disabled = true));
  function scrollNext() {
    const contNumb = String(++counterNumber).padStart(2, '0');
    const numb = String(number).padStart(2, '0');

    elHeaderCount.textContent = `${contNumb} / ${numb}`;
    elBtnNotKnow.disabled = true;

    if (counterNumber === number) {
      const getSaveWord = JSON.parse(localStorage.getItem('saveWordLocal'));
      getSaveWord.forEach(obj => {
        if (obj.title === optionsTask.title) {
          obj.choose = { true: chooseTrue, false: number - chooseTrue };
          return;
        }
      });
      localStorage.setItem('saveWordLocal', JSON.stringify(getSaveWord));
    }

    const lengthInPercent = ((counterNumber / number) * 100).toFixed(2);
    elHeaderLine.style.width = `${lengthInPercent}%`;
    if (!elTaskWrapNext) return;
    elTaskWrapNext.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }
});
