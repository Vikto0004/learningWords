import { markupGetCards } from './render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const elWrapTaskes = document.querySelector('.wrap-taskes');
const elWrapTitle = document.querySelector('.wrap-title');
const arrCardSave = JSON.parse(localStorage.getItem('cardInfoSave')) || [];

if (!arrCardSave.length) {
  elWrapTitle.classList.add('is-open');
} else {
  elWrapTaskes.insertAdjacentHTML('beforeend', markupGetCards(arrCardSave));
}

elWrapTaskes.addEventListener('click', e => {
  const elBtnDelete = e.target.closest('.card-btn-delete');

  if (elBtnDelete) {
    const elWrapItem = elBtnDelete.closest('.modal-content');
    const titleWrap = elWrapItem.querySelector('.fw-bold').textContent;
    const newArrCardSave = arrCardSave.filter(
      ({ title }) => title !== titleWrap
    );
    localStorage.setItem('cardInfoSave', JSON.stringify(newArrCardSave));
    elWrapItem.remove();
    iziToast.info({
      message: `Card ${titleWrap} was deleted`,
      position: 'topRight',
    });
  }
});
