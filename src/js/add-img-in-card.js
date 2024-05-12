import { promiseWordSearch } from './pixabay-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function resetElWrapItem() {
  const elWrapItem = document.querySelectorAll('.add-wrap-item');
  elWrapItem.forEach(el => {
    let index = 0;

    el.addEventListener('click', e => {
      const elBtnLeft = e.target.closest('.add-wrap-img-icon-left');
      const elBtnRight = e.target.closest('.add-wrap-img-icon-right');

      if (elBtnRight) {
        valueInpForSearchImg(e, ++index);
      } else if (elBtnLeft) {
        valueInpForSearchImg(e, --index);
      }
    });
  });
}
resetElWrapItem();

export function valueInpForSearchImg(e, index) {
  const elAddWrap = e.target.closest('.add-wrap-item');
  const word = elAddWrap.querySelector('.form-control').value.trim();
  if (!word) return;

  const elSearchImg = elAddWrap.querySelector('.add-search-img');
  const elBtnLeft = elAddWrap.querySelector('.add-wrap-img-icon-left');
  const elBtnRight = elAddWrap.querySelector('.add-wrap-img-icon-right');

  promiseWordSearch(word)
    .then(({ hits }) => {
      if (!hits.length) {
        iziToast.warning({
          message: `Will not finding picture to word ${word}`,
          position: 'topRight',
        });
        elBtnRight.classList.add('add-wrap-img-icon-not-active');
        elBtnLeft.classList.add('add-wrap-img-icon-not-active');
        return;
      }

      if (index >= hits.length) {
        elBtnRight.classList.add('add-wrap-img-icon-not-active');
        return;
      } else if (
        elBtnRight.classList.contains('add-wrap-img-icon-not-active')
      ) {
        elBtnRight.classList.remove('add-wrap-img-icon-not-active');
      }

      if (index <= 0) {
        elBtnLeft.classList.add('add-wrap-img-icon-not-active');
      } else if (elBtnLeft.classList.contains('add-wrap-img-icon-not-active')) {
        elBtnLeft.classList.remove('add-wrap-img-icon-not-active');
      }

      elSearchImg.src = hits[index].webformatURL;
    })
    .catch(error => console.log(error));
}
