
//включение валидации вызовом enableValidation
// все настройки передаются при вызове

// const obj = {
//     formSelector: '.popup__content',
//     inputSelector: '.popup__input',
//     submitButtonSelector: '.popup__submit-button',
//     inactiveButtonClass: 'popup__submit-button_disabled',
//     inputErrorClass: 'popup__input_type_error',
//     errorClass: 'popup__error_visible'
//   };




  //используются HTML5-атрибуты и JS-свойство ValidityState
  //функция enableValidation, которая включает валидацию, принимает на вход объект параметров, а затем передаёт параметры вложенным функциям.
  //Если данные пришли от пользователя, нельзя передавать их свойству innerHTML?????
  // Карточку можно добавить, нажав Enter, находясь в одном из текстовых полей;+
  //Дайте пользователям возможность закрывать попап нажатием на клавишу Esc.+-
  //Попап закрывается кликом на тёмный фон.+-

  
//   const showInputError = (formElement, inputElement, errorMessage) => {
//     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//     inputElement.classList.add('form__input_type_error');
//     errorElement.textContent = errorMessage;
//     errorElement.classList.add('form__input-error_active');
//   };
  
//   const hideInputError = (formElement, inputElement) => {
//     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//     inputElement.classList.remove('form__input_type_error');
//     errorElement.classList.remove('form__input-error_active');
//     errorElement.textContent = '';
//   };
  
//   const checkInputValidity = (formElement, inputElement) => {
//     if (!inputElement.validity.valid) {
//       showInputError(formElement, inputElement, inputElement.validationMessage);
//     } else {
//       hideInputError(formElement, inputElement);
//     }
//   };
  
//   const setEventListeners = (formElement) => {
//     const inputList = Array.from(formElement.querySelectorAll('.form__input'));
//     inputList.forEach((inputElement) => {
//       inputElement.addEventListener('input', function () {
//         checkInputValidity(formElement, inputElement);
//       });
//     });
//   };
  
//   const enableValidation = () => {
//     const formList = Array.from(document.querySelectorAll('.form'));
//     formList.forEach((formElement) => {
//       formElement.addEventListener('submit', (evt) => {
//       evt.preventDefault();
//       });
//       setEventListeners(formElement);
//     });
//   }






// // Вызовем функцию
// enableValidation(); 


// Вынесем все необходимые элементы формы в константы
const formElement = document.querySelector('.popup__content');
const formInput = formElement.querySelector('.popup__input');

// Функция, которая добавляет класс с ошибкой
const showInputError = (element) => {
  element.classList.add('popup__input_type_error');
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (element) => {
  element.classList.remove('popup__input_type_error');
};

// Функция, которая проверяет валидность поля
const isValid = () => {
  if (!formInput.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showInputError(formInput);
  } else {
    // Если проходит, скроем
    hideInputError(formInput);
  }
};
 
formElement.addEventListener('submit', function (evt) {
  // Отменим стандартное поведение по сабмиту
  evt.preventDefault();
});