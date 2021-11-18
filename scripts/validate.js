
  // const obj = {
  //   formSelector: '.popup__content',
  //   inputSelector: '.popup__input',
  //   submitButtonSelector: '.popup__submit-button',
  //   inactiveButtonClass: 'popup__submit-button_disabled',
  //   inputErrorClass: 'popup__input_type_error',
  //   errorClass: 'popup__error_visible'
  // };
// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');
};
// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_type_error');
  errorElement.classList.remove('popup__input-error_active');
  errorElement.textContent = '';
};
// Функция, которая проверяет валидность поля
const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};
//кнопка 
function setSubmitButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add('popup__submit-button_disabled'); 
  } else {
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove('popup__submit-button_disabled');
  }  
}

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__submit-button');
  
    setSubmitButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      isValid(formElement, inputElement);
      setSubmitButtonState(inputList, buttonElement);
    });
  });
}; 

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}; 

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__content'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};

// Вызовем функцию
enableValidation(); 
