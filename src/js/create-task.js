import { valueInpForSearchImg } from './add-img-in-card';

const elCardFormNumber = document.querySelector('.model-create-form-number');
const elCardFormToAdd = document.querySelector('.model-create-form');

const cardSave = {
  title: 'Title',
  number: '00',
  progress: '00 / 00',
  time: '00.00',
  Original: [],
  Translate: [],
  linkOnImg: [],
};

const arrCardSave = JSON.parse(localStorage.getItem('cardInfoSave')) || [];

elCardFormNumber.addEventListener('submit', event => {
  event.preventDefault();
  const titleCard = elCardFormNumber.elements.titleTask.value.trim();
  const countWord = elCardFormNumber.elements.wordCounter.value.trim();

  if (countWord >= 10) {
    cardSave.title = titleCard;
    cardSave.number = countWord;
  }
});

elCardFormToAdd.addEventListener('click', event => {
  const elTarget = event.target;
  const elBtnLeft = elTarget.closest('.add-wrap-img-icon-left');
  const elBtnRight = elTarget.closest('.add-wrap-img-icon-right');

  if (elTarget.nodeName !== 'INPUT' && !elBtnLeft && !elBtnRight) return;

  if (elTarget.name === 'original') {
    elTarget.removeEventListener('blur', e => valueInpForSearchImg(e, 0));
    elTarget.addEventListener('blur', e => valueInpForSearchImg(e, 0));
  } else if (elBtnRight) {
  }
});
