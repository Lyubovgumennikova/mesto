class FormValidator {
  constructor(config, form) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._form = form;
  }
 // Функция, которая добавляет класс с ошибкой
_showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  };
  // Функция, которая удаляет класс с ошибкой
 _hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass); //popup__input-error_active
    errorElement.textContent = "";
  };
  // Функция, которая проверяет валидность поля
  _isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        
        this._showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        this._hideInputError(formElement, inputElement);
    }
  };
  //кнопка
  _setSubmitButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.setAttribute("disabled",true);
      buttonElement.classList.add(this._inactiveButtonClass); //"popup__submit-button_disabled"
    } else {
      buttonElement.removeAttribute("disabled");
      buttonElement.classList.remove(this._inactiveButtonClass);
    }
  }
  
  _setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(this._inputSelector)); //".popup__input"
    const buttonElement = formElement.querySelector(this._submitButtonSelector); //".popup__submit-button"
    this._setSubmitButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", function () {
        this._isValid(inputElement);
        this._setSubmitButtonState(inputList, buttonElement);
      });
    });
  };
  
  _hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };
  
  enableValidation = () => {
    const formElement = document.querySelector(this._form); //  ".popup__content"
    //formList.forEach((formElement) => {
        formElement.addEventListener("submit", function (evt) {
        evt.preventDefault();
      });
      this._setEventListeners(formElement);
    //});
  };
  
}


// const form = new FormValidator(config, ".popup_opened");
// form.enableValidation();