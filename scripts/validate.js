const config = {
  formSelector: ".popup__content",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};

enableValidation(config);

function enableValidation(config) {
	const forms = Array.from(document.querySelectorAll(config.formSelector)); //   '.popup__content'
		forms.forEach(addListenersToForm);
}

function addListenersToForm(form) {
	const inputs = Array.from(document.querySelectorAll(config.inputSelector)); //   '.popup__input'

	inputs.forEach(addListenersToInput);

	form.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });

    form.addEventListener('input', handleFormInput);
    toggleButton(form);
}

function addListenersToInput(input) {
	input.addEventListener('input', handleFieldValidation);
}

function handleFieldValidation(evt) {
	const element = evt.target;
	const errorContainer = document.querySelector(`#${element.id}-error`);
	//element.setCustomValidity('');

	//element.classList.toggle(
		//config.errorClass, //popup__input-error_active"
		if (!element.validity.valid) {
      element.classList.add (config.inputErrorClass)  //'popup__input_type_error'
      element.classList.add(config.errorClass);
    } else {
      element.classList.remove(config.inputErrorClass)  //     'popup__input_type_error'
      element.classList.remove(config.errorClass);
    }
    errorContainer.textContent = element.validationMessage;
}


function handleFormInput(evt) {
    toggleButton(evt.currentTarget);
}

function toggleButton(form) {
    const button = form.querySelector(config.submitButtonSelector);  //    '.popup__submit-button'
        const isFormInvalid = !form.checkValidity();

    button.disabled = isFormInvalid;
    button.classList.toggle(config.inactiveButtonClass, isFormInvalid); //    'popup__submit-button_disabled'
}




