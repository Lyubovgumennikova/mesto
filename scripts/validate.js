const config = {
  formSelector: ".popup__content",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};

function enableValidation(config) {
  const forms = Array.from(document.querySelectorAll(config.formSelector)); //   '.popup__content'
  forms.forEach((form) => addListenersToForm(form, config))
}

function addListenersToForm(form, config) {
  const inputs = Array.from(document.querySelectorAll(config.inputSelector)); //   '.popup__input'

  inputs.forEach((form) => addListenersToInput(form, config))

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });

  form.addEventListener('input',function (evt) {
    handleFormInput(evt, config);
    }); 
      toggleButton(form, config);
}

function addListenersToInput(input, config) {
  input.addEventListener('input',function (evt) {
    handleFieldValidation(evt, config);
  });
}

function handleFieldValidation(evt, {inputErrorClass, errorClass}) {
  const element = evt.target;
  const errorContainer = document.querySelector(`#${element.id}-error`);
  
    if (!element.validity.valid) {
      element.classList.add (inputErrorClass)  //'popup__input_type_error'
      element.classList.add(errorClass);
    } else {
      element.classList.remove(inputErrorClass)  //     'popup__input_type_error'
      element.classList.remove(errorClass);
    }
    errorContainer.textContent = element.validationMessage;
}

function handleFormInput(evt, config) {
  const form = evt.currentTarget
  toggleButton(form, config);
}

function toggleButton(form, {submitButtonSelector,inactiveButtonClass}) {
    const button = form.querySelector(submitButtonSelector);  //    '.popup__submit-button'
    const isFormInvalid = !form.checkValidity();
    button.disabled = isFormInvalid;
    button.classList.toggle(inactiveButtonClass, isFormInvalid); //    'popup__submit-button_disabled'
}

enableValidation(config);
