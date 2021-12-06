export class FormValidator {
  constructor(config, validateForm) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._validateForm = validateForm;
  }

  enableValidation() {
    this._submitButton = this._validateForm.querySelector(this._submitButtonSelector); //    '.popup__submit-button'
    this._inputList = Array.from(this._validateForm.querySelectorAll(this._inputSelector)); //   '.popup__input'
      this._setEventListeners();
  }

  _setEventListeners() {
    this._toggleButton();

    this._inputList.forEach((input) => {
        input.addEventListener('input', (evt) => {
        this._handleFieldValidation(evt);
        this._toggleButton();
        });
    });
  }

  _handleFieldValidation(evt) {
    const element = evt.target;
    const errorContainer = this._validateForm.querySelector(
      `#${element.id}-error`
    );
    if (!element.validity.valid) {
      element.classList.add(this._inputErrorClass); //'popup__input_type_error'
      element.classList.add(this._errorClass);
    } else {
      element.classList.remove(this._inputErrorClass); //     'popup__input_type_error'
      element.classList.remove(this._errorClass);
    }
    errorContainer.textContent = element.validationMessage;
  }

  _toggleButton() {
    const isFormInvalid = !this._validateForm.checkValidity();
    this._submitButton.disabled = isFormInvalid;
    this._submitButton.classList.toggle(this._inactiveButtonClass, isFormInvalid); //    'popup__submit-button_disabled'
  }

  resetValidation() {
    this._toggleButton(); //<== управляем кнопкой ==

    this._inputList.forEach((inputElement) => {
      const errorElement = this._validateForm.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass); //popup__input-error_active
    errorElement.textContent = "";
    });
  }
}
