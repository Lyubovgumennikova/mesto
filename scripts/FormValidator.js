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
      const inputs = Array.from(document.querySelectorAll(config.inputSelector)); //   '.popup__input'
  
      inputs.forEach((input //addListenersToInput(form, config))
        ) => this._addListenersToInput(input)
      );
      //this._addListenersToForm(inputs)
    }
  
    // _addListenersToForm(_input) {
    //   // this._formSelector.addEventListener("submit", () => {
    //   //   evt.preventDefault();
    //   // });
  
    //   // this._formSelector.addEventListener("input", input) {
    //   //   this._handleFormInput();
    //   // };
  
    //   this._formSelector
    //   .addEventListener('input', (_input) => {
    //     this._handleFieldValidation(_input);
    //     });
  
    //   toggleButton(form, config);
    // }
  
    _addListenersToInput(input) {
      input.addEventListener("input", (evt)  => {
        this._handleFieldValidation(evt);
      });
    }
  
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
  
    // _handleFormInput(evt, config) {
    //   const form = evt.currentTarget;
    //   toggleButton(form, config);
    // }
  
    toggleButton(form, { submitButtonSelector, inactiveButtonClass }) {
      const button = form.querySelector(submitButtonSelector); //    '.popup__submit-button'
      const isFormInvalid = !form.checkValidity();
      button.disabled = isFormInvalid;
      button.classList.toggle(inactiveButtonClass, isFormInvalid); //    'popup__submit-button_disabled'
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
  