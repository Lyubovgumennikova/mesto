// включение валидации вызовом enableValidation
// все настройки передаются при вызове

// enableValidation({
//     formSelector: '.popup__content',
//     inputSelector: '.popup__input',
//     submitButtonSelector: '.popup__button',
//     inactiveButtonClass: 'popup__button_disabled',
//     inputErrorClass: 'popup__input_type_error',
//     errorClass: 'popup__error_visible'
//   });




  //используются HTML5-атрибуты и JS-свойство ValidityState
  //функция enableValidation, которая включает валидацию, принимает на вход объект параметров, а затем передаёт параметры вложенным функциям.
  //Если данные пришли от пользователя, нельзя передавать их свойству innerHTML?????
  // Карточку можно добавить, нажав Enter, находясь в одном из текстовых полей;+
  //Дайте пользователям возможность закрывать попап нажатием на клавишу Esc.+-
  //Попап закрывается кликом на тёмный фон.+-

  

  function enableValidation() {
     // Найдём все формы с указанным классом в DOM,
    // сделаем из них массив методом Array.from
    const forms = Array.from(document.querySelectorAll('.popup__content'));
      // Переберём полученную коллекцию
    forms.forEach(addListenersToForm) 
           // Для каждой формы вызовем функцию setEventListeners,
      // передав ей элемент формы
     // setEventListeners(formElement);
      
        
  };

  function addListenersToForm(form) {
    const inputs= Array.from(formElement.querySelectorAll('.popup__input'));
    
//   // Обойдём все элементы полученной коллекции
      inputs.forEach(addListenersToInput)
        form.addEventListener('submit', (evt) => {
          // У каждой формы отменим стандартное поведение
          evt.preventDefault();
        });
//     // каждому полю добавим обработчик события input
      
  }; 

function  addListenersToInput(input) {
  input.addEventListener('input', handleFieldValidation);
}

function handleFieldValidation(evt) {
  const element = evt.target;
  const errorConteiner = document.querySelectorAll('#${element.id}-error');

}
  
 

//   const isValid = (formElement, inputElement) => {
//   if (!inputElement.validity.valid) {
//     // showInputError теперь получает параметром форму, в которой
//     // находится проверяемое поле, и само это поле
//     showInputError(formElement, inputElement, inputElement.validationMessage);
//   } else {
//     // hideInputError теперь получает параметром форму, в которой
//     // находится проверяемое поле, и само это поле
//     hideInputError(formElement, inputElement);
//   }
// console.log(evt.target)
//   }; 

// const showInputError = (formElement, inputElement, errorMessage) => {
//   //Находим элемент ошибки внутри самой функции
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   //Остальной код такой же
//   inputElement.classList.add('form__input_type_error');
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add('form__input-error_active');
 
// };


// const hideInputError = (formElement, inputElement) => {
//   // Находим элемент ошибки
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   // Остальной код такой же
//   inputElement.classList.remove('form__input_type_error');
//   errorElement.classList.remove('form__input-error_active');
//   errorElement.textContent = '';
// }; 





// Вызовем функцию
enableValidation(); 


function clocePopupClickByEsc(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector(".popup_opened"); 
    closePopup(popup);
};
};  