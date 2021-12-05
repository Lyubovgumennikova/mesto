export class FormValidator {
  constructor(config, form) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._form = form;
  }

  enableValidation() {
    //const form = document.querySelector(this._form); 
    //const formElement = form.querySelector(this._formSelector); //  ".popup__content"
    // this._formSelector.addEventListener("submit", function (evt) {
    //     evt.preventDefault();
    //   });
      this._setEventListeners();
  }

  _setEventListeners() {
    const inputs = Array.from(this._form.querySelectorAll(this._inputSelector)); //   '.popup__input'
    const button = this._form.querySelector(this._submitButtonSelector); //    '.popup__submit-button'
    this._toggleButton(button);
    inputs.forEach((input) => {
        input.addEventListener('input', (evt) => {
        this._handleFieldValidation(evt);
        this._toggleButton(button);
        });
    });
  }

  _handleFieldValidation(evt) {
    const element = evt.target;
    const errorContainer = this._form.querySelector(
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

  _toggleButton(button) {
    const formElement = this._form.querySelector(this._formSelector); 
    const isFormInvalid = !formElement.checkValidity();
    button.disabled = isFormInvalid;
    button.classList.toggle(this._inactiveButtonClass, isFormInvalid); //    'popup__submit-button_disabled'
  }
}
