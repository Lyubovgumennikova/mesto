const config = {
  formSelector: ".popup__content",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};
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
  enableValidation() {
    const formElement = document.querySelector(this._formSelector); //  ".popup__content"
    //formList.forEach((formElement) => {
        formElement.addEventListener("submit", function (evt) {
        evt.preventDefault();
      });
      this._setEventListeners(formElement);
    //this._addListenersToForm(inputs)
  }

  _setEventListeners(formElement) {
    const inputs = Array.from(formElement.querySelectorAll(config.inputSelector)); //   '.popup__input'
    const button = formElement.querySelector(this._submitButtonSelector); //    '.popup__submit-button'
    this._toggleButton(formElement, button);
    inputs.forEach((input) => {
        input.addEventListener('input', (evt) => {
        this._handleFieldValidation(evt);
        //this._handleFormInput(evt)
        this._toggleButton(formElement, button);
        });
    });
   
      
  }

  // _addListenersToInput(input) {
  //   input.addEventListener("input", (evt)  => {
  //     this._handleFieldValidation(evt);
  //   });
  // }

  _handleFieldValidation(evt) {
    const element = evt.target;
    const errorContainer = document.querySelector(
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

  // _handleFormInput(evt) {
  //  const form =  evt.currentTarget;
  //   this._toggleButton(form);
  //}

  _toggleButton(formElement, button) {
    //const button = formElement.querySelector(this._submitButtonSelector); //    '.popup__submit-button'
    const isFormInvalid = !formElement.checkValidity();
    button.disabled = isFormInvalid;
    button.classList.toggle(this._inactiveButtonClass, isFormInvalid); //    'popup__submit-button_disabled'
  }

  //enableValidation(config);
}

// const form = () => {
//   new FormValidator (config, '.popup');  // popup_opened"
//   form.enableValidation();
// }

// const forms = Array.from(document.querySelectorAll('.popup__content')); //   '.popup__content'
// forms.forEach(function(form) {
//  form.addEventListener('submit', (evt) => {
//    evt.preventDefault();
//  });
//  new FormValidator (config, form).enableValidation();
// })
const form = new FormValidator(config, ".popup_opened");
form.enableValidation(form);
