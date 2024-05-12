import { valueInpForSearchImg } from './add-img-in-card';
import { markupAddCard } from './render-functions';
import { resetElWrapItem } from './add-img-in-card';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

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

//* Saving data from inputs
elCardFormToAdd.addEventListener('submit', event => {
  event.preventDefault();
  const titleCard = elCardFormToAdd.elements.titleTask.value.trim();
  const countWord = elCardFormToAdd.elements.wordCounter.value.trim();
  const original = elCardFormToAdd.elements.original;
  const translate = elCardFormToAdd.elements.translate;
  const images = elCardFormToAdd.querySelectorAll('.add-search-img');

  cardSave.title = titleCard;
  cardSave.number = countWord;
  original.forEach(el => cardSave.Original.push(el.value.trim()));
  translate.forEach(el => cardSave.Translate.push(el.value.trim()));
  images.forEach(el => cardSave.linkOnImg.push(el.src));

  arrCardSave.push(cardSave);
  localStorage.setItem('cardInfoSave', JSON.stringify(arrCardSave));
});

//* Adding and subtruction input for word in "add-words"
elCardFormToAdd.elements.wordCounter.addEventListener('input', e => {
  const valInp = e.target.value;
  const nmbChildren = elCardFormToAdd.children.length - 1;
  const numberItems = valInp - nmbChildren;

  if (valInp >= 10) {
    elCardFormToAdd.insertAdjacentHTML('beforeend', markupAddCard(numberItems));
    resetElWrapItem();
  } else {
    iziToast.error({
      message: 'Minimum 10 words',
      position: 'topRight',
    });
    e.target.value = 10;
    return;
  }
  if (numberItems < 0) {
    const arrChildrenList = [...elCardFormToAdd.children];
    arrChildrenList.splice(numberItems).forEach(item => item.remove());
    resetElWrapItem();
    return;
  }
});

//* Adding image by word
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
