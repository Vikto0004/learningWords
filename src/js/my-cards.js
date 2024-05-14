import { markupGetCards } from './render-functions';
import { markupTaskChoose } from './render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const elWrapTaskes = document.querySelector('.wrap-taskes');
const elWrapTitle = document.querySelector('.wrap-title');
const elTaskesContainer = document.querySelector('.taskes-container');
const arrCardSave = JSON.parse(localStorage.getItem('cardInfoSave')) || [];

if (!arrCardSave.length) {
  elWrapTitle.classList.add('is-open');
} else {
  elWrapTaskes.insertAdjacentHTML('beforeend', markupGetCards(arrCardSave));
}

elWrapTaskes.addEventListener('click', e => {
  const elBtnDelete = e.target.closest('.card-btn-delete');
  const elWrapItem = e.target.closest('.modal-content');
  const titleWrap = elWrapItem.querySelector('.fw-bold').textContent;

  if (elBtnDelete) {
    const newArrCardSave = arrCardSave.filter(
      ({ title }) => title !== titleWrap
    );
    localStorage.setItem('cardInfoSave', JSON.stringify(newArrCardSave));
    elWrapItem.remove();
    iziToast.info({
      message: `Card ${titleWrap} was deleted`,
      position: 'topRight',
    });
  } else if (e.target.textContent.trim() === 'Start!') {
    const currentTask = arrCardSave.filter(({ title }) => title === titleWrap);
    const { mode, language, time } = JSON.parse(
      localStorage.getItem('settingsTaskSave')
    );
    elTaskesContainer.innerHTML = markupTaskChoose(...currentTask, language);
  }
});
