const userNameInput = document.querySelector('#name');
const userEmailInput = document.querySelector('#email');

const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 10;

userNameInput.addEventListener('input', () => {
  const valueLength = userNameInput.value.length;
  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity('Please add ' + (MIN_NAME_LENGTH - valueLength) + ' more letters'+ '\n'+
    'Пожалуйста, добавьте ' + (MIN_NAME_LENGTH - valueLength) + ' символов');
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity('Please remove ' + (valueLength - MAX_NAME_LENGTH) + ' letters' + '\n'+
    'Пожалуйста, удалите ' + (valueLength - MAX_NAME_LENGTH) + ' символов');
  } else {
    userNameInput.setCustomValidity('');
  }

  userNameInput.reportValidity();
});

/* userEmailInput.addEventListener('input', () => {
  if (!(/(\w+)@(\w+)/gi.test(userEmailInput.value))) {
    userEmailInput.setCustomValidity('Email should match the following format: example@gmail.com');
  }else {
    userEmailInput.setCustomValidity('');
  }
}); */
