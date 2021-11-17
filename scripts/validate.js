
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
//const formElement = document.querySelector('.popup__content');



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
    // Если поле не проходит валидацию, покажем ошибку
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    // Если проходит, скроем
    hideInputError(formElement, inputElement);
  }
};
 
// formElement.addEventListener('submit', function (evt) {
//   // Отменим стандартное поведение по сабмиту
//     evt.preventDefault();
// });

// Вызовем функцию isValid на каждый ввод символа
//formInput.addEventListener('input', isValid); 

function setSubmitButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    //submitButtonElement.setAttribute('disabled', true);
    buttonElement.classList.add('popup__submit-button_disabled'); 
} else {
  
  buttonElement.removeAttribute('disabled');
  buttonElement.classList.remove('popup__submit-button_disabled');
}  
}

const setEventListeners = (formElement) => {
  // Находим все поля внутри формы,
  // сделаем из них массив методом Array.from
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__submit-button');
    

  // Обойдём все элементы полученной коллекции
  inputList.forEach((inputElement) => {
    // каждому полю добавим обработчик события input
    inputElement.addEventListener('input', () => {
      // Внутри колбэка вызовем isValid,
      // передав ей форму и проверяемый элемент
      isValid(formElement, inputElement);
      setSubmitButtonState(inputList, buttonElement)
    });
  });
  
}; 

const enableValidation = () => {
  // Найдём все формы с указанным классом в DOM,
  // сделаем из них массив методом Array.from
  const formList = Array.from(document.querySelectorAll('.popup__content'));

  // Переберём полученную коллекцию
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      // У каждой формы отменим стандартное поведение
      evt.preventDefault();
    });

    // Для каждой формы вызовем функцию setEventListeners,
    // передав ей элемент формы
    setEventListeners(formElement);
  });
};

// Вызовем функцию
enableValidation(); 

// Функция принимает массив полей

const hasInvalidInput = (inputList) => {
  // проходим по этому массиву методом some
  return inputList.some((inputElement) => {
    // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся фунцкция
    // hasInvalidInput вернёт true

    return !inputElement.validity.valid;
  })
}; 