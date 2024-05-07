import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const elBtnCreateOpen = document.querySelector('.btn-create');
const elBtnCreateClose = document.querySelector('.model-create-close');
const elWordCounter = document.querySelector('#wordCounter');
const elTitleTask = document.querySelector('#titleTask');
const elModelCreateList = document.querySelector('.model-create-list');
const elModelCreateForm = document.querySelector('.model-create-form');

const elWrapTaskes = document.querySelector('.wrap-taskes');
const elContainerTask = document.querySelector('.task-container');
const elWrapTaskTitle = document.querySelector('.task-title');
const elWordCounterTask = document.querySelectorAll('#wordCounterTask');

const elBackgropCreate = document.querySelector('.js-backgrop-model-create');
const elBackgropQustione = document.querySelector('.js-backgrop-qustione');
const elBackgropTask = document.querySelector('.task');

const qustWrap = {
  elWrap: document.querySelector('.qustione-wrap'),
  elDropChoose: document.querySelector('.drop-warp-choose span'),
  elComesChoose: document.querySelector('.comes-choose'),
  elDropIcon: document.querySelector('.drop-warp-icon '),
  langOf: document.querySelector('.choose-lang-of'),
  langOn: document.querySelector('.choose-lang-on'),
  langRes: document.querySelector('.res-lang'),
};

const elTaskesContainer = document.querySelector('.taskes-container');

const optionsTask = {
  mode: 'Choose word',
  lang: 'Ukraine',
};
export { elTaskesContainer };
export { elBackgropTask };

elBtnCreateOpen.addEventListener('click', () => {
  elBackgropCreate.classList.add('is-open');
});

elBtnCreateClose.addEventListener('click', () => {
  elBackgropCreate.classList.remove('is-open');
});

//* Adding and subtruction input for word in "modal create"
elWordCounter.addEventListener('input', event => {
  const numberItems =
    event.currentTarget.value - elModelCreateList.children.length;

  if (numberItems === 0) return;
  else if (numberItems < 0) {
    const arrChildrenList = [...elModelCreateList.children];
    arrChildrenList.splice(numberItems).forEach(item => item.remove());
    return;
  }

  let elItemsList = '';
  for (let i = 0; i < numberItems; i++) {
    elItemsList +=
      '<li><input type="text" name="engl" required /><input type="text" name="ukr" required /></li>';
  }

  elModelCreateList.insertAdjacentHTML('beforeend', elItemsList);
  elItemsList = '';
});

//* Adding word in local storage
elModelCreateForm.addEventListener('submit', event => {
  event.preventDefault();
  const saveWord = JSON.parse(localStorage.getItem('saveWordLocal')) || [];
  const InpTitleVal = elTitleTask.value.trim();
  const wordCounter = elWordCounter.value.trim().padStart(2, '0');

  if (!InpTitleVal) {
    iziToast.error({
      message: 'Enter title to task',
      position: 'topRight',
    });
    return;
  } else if (wordCounter < 2) {
    iziToast.error({
      message: 'The number must not be less than 2',
      position: 'topRight',
    });
    return;
  } else if (saveWord.some(({ title }) => title === InpTitleVal)) {
    iziToast.error({
      message: 'This title is already in use',
      position: 'topRight',
    });
    return;
  }

  const English = [...elModelCreateForm.elements.engl].map(el =>
    el.value.trim()
  );
  const arrUkrWord = [...elModelCreateForm.elements.ukr].map(el =>
    el.value.trim()
  );

  saveWord.push({
    title: InpTitleVal,
    English: English,
    Ukraine: arrUkrWord,
  });
  localStorage.setItem('saveWordLocal', JSON.stringify(saveWord));

  elWrapTaskes.insertAdjacentHTML(
    'beforeend',
    addingWrapTask(InpTitleVal, wordCounter)
  );

  iziToast.success({
    message: "You successfully adding it's task",
    position: 'topRight',
  });
  elTitleTask.value = '';
  elModelCreateForm.reset();
  elBackgropCreate.classList.remove('is-open');
});

//* Return string wrap task
function addingWrapTask(title, wordCounter) {
  elWrapTaskTitle.textContent = title;
  elWordCounterTask.forEach(el => (el.textContent = wordCounter));
  return `<div class="task-container">${elContainerTask.innerHTML}</div>`;
}

//* Adding all wrap task
const getSaveWord = JSON.parse(localStorage.getItem('saveWordLocal')) || [];
if (getSaveWord.length) {
  const taskWrapAll = getSaveWord
    .map(({ title, Ukraine }) => {
      return addingWrapTask(title, String(Ukraine.length).padStart(2, '0'));
    })
    .join('');

  elWrapTaskes.innerHTML = taskWrapAll;
}

elWrapTaskes.addEventListener('click', event => {
  if (event.target.nodeName !== 'BUTTON') return;

  //* Giving current elements
  const elWrap = event.target.closest('.task-container');
  const wrapTitle = elWrap.querySelector('.task-title').textContent;
  const currentBtn = event.target.textContent;

  //* Delete wrap
  if (currentBtn === 'Delete') {
    const getSaveWord = JSON.parse(localStorage.getItem('saveWordLocal'));
    const upSaveWord = getSaveWord.filter(({ title }) => title !== wrapTitle);

    localStorage.setItem('saveWordLocal', JSON.stringify(upSaveWord));
    elWrap.remove();

    iziToast.info({
      message: `Task ${wrapTitle} was deleted`,
      position: 'topRight',
    });
  } else if (currentBtn === 'Start') {
    elBackgropQustione.classList.add('is-open');

    $('#accordion').accordion({
      collapsible: true,
      active: false,
      icons: false,
      beforeActivate: () => {
        qustWrap.elDropIcon.classList.toggle('drop-warp-icon-active');
      },
    });

    const getSaveWord = JSON.parse(localStorage.getItem('saveWordLocal'));
    getSaveWord.forEach(({ title, English, Ukraine }) => {
      if (title === wrapTitle) {
        optionsTask.title = wrapTitle;
        optionsTask.Ukraine = Ukraine;
        optionsTask.English = English;
        optionsTask.number = English.length;
        return;
      }
    });
    localStorage.setItem('currentSaveTask', JSON.stringify(optionsTask));
  }
});

//* Operations in settings options task
qustWrap.elWrap.addEventListener('click', event => {
  const elTarget = event.target;
  if (elTarget.nodeName !== 'BUTTON' && !elTarget.closest('.qust-res-icon-btn'))
    return;

  //* Choose options in drop-list
  const awardingAndClose = text => {
    qustWrap.elComesChoose.textContent = text + ':';
    qustWrap.elDropChoose.textContent = text;
    optionsTask.mode = text;
    $('#accordion').accordion('option', 'active', false);
  };

  if (elTarget.textContent === 'Choose word') {
    awardingAndClose('Choose word');
    return;
  } else if (elTarget.textContent === 'Enter word') {
    awardingAndClose('Enter word');
    return;
  } else if (elTarget.textContent === 'Mixed') {
    awardingAndClose('Mixed');
    return;
  }

  if (elTarget.closest('.qust-res-icon-btn')) {
    //* Choose lang of/on
    const langOfText = qustWrap.langOf.textContent;
    const langOnText = qustWrap.langOn.textContent;
    optionsTask.lang = langOfText;

    qustWrap.langOf.textContent = langOnText;
    qustWrap.langOn.textContent = langOfText;
    qustWrap.langRes.textContent = langOfText;
    localStorage.setItem('currentSaveTask', JSON.stringify(optionsTask));
  }
});
