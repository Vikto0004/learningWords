import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const elRadioMode = document.getElementsByName('mode');
const elRadioLang = document.getElementsByName('language');
const elRadioTime = document.getElementsByName('time')[0];
const elSaveSettings = document.querySelector('.save-settings');
const elInpTime = document.querySelector('.checked-time');
const elInpNinut = document.querySelector('.time-minute');
const elInpSecond = document.querySelector('.time-seconds');

const settingsTask = {
  mode: 'Choose',
  language: 'Original',
  time: false,
};

const checkedInpTime = () => {
  if (elInpTime.checked) {
    elInpNinut.classList.remove('not-active');
    elInpSecond.classList.remove('not-active');
  } else if (!elInpNinut.classList.contains('not-active')) {
    elInpNinut.classList.add('not-active');
    elInpSecond.classList.add('not-active');
    settingsTask.time = false;
    elInpNinut.value = elInpSecond.value = '0';
  }
};
elRadioTime.addEventListener('change', checkedInpTime);

elSaveSettings.addEventListener('click', e => {
  if (elInpTime.checked) {
    elInpNinut.classList.remove('not-active');
    elInpSecond.classList.remove('not-active');
    const minute = elInpNinut.value.trim();
    const second = elInpSecond.value.trim();

    if (!Number(minute) && !Number(second)) {
      iziToast.warning({
        message: 'Enter the task completion time',
        position: 'topRight',
      });
      return;
    }
    settingsTask.time = `${minute.padStart(2, '0')}:${second.padStart(2, '0')}`;
  } else if (!elInpNinut.classList.contains('not-active')) {
    elInpNinut.classList.add('not-active');
    elInpSecond.classList.add('not-active');
    settingsTask.time = false;
  }

  elRadioMode.forEach(el => (el.checked ? (settingsTask.mode = el.id) : 0));
  elRadioLang.forEach(el => (el.checked ? (settingsTask.language = el.id) : 0));
  localStorage.setItem('settingsTaskSave', JSON.stringify(settingsTask));

  iziToast.success({
    message: 'Successfully add change',
    position: 'topRight',
  });
});

if (localStorage.getItem('settingsTaskSave')) {
  const { mode, language, time } = JSON.parse(
    localStorage.getItem('settingsTaskSave')
  );

  elRadioMode.forEach(el => (el.id === mode ? (el.checked = true) : 0));
  elRadioLang.forEach(el => (el.id === language ? (el.checked = true) : 0));

  if (time) {
    elInpTime.checked = true;
    checkedInpTime();
    elInpNinut.value = Number(time.split(':')[0]);
    elInpSecond.value = Number(time.split(':')[1]);
  } else elInpTime.checked = false;
}
