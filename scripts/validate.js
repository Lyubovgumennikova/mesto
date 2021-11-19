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
	const forms = Array.from(document.querySelectorAll(config.formSelector));
		forms.forEach(addListenersToForm);
}

function addListenersToForm(form) {
	const inputs = Array.from(document.querySelectorAll(config.inputSelector)); 

	inputs.forEach(addListenersToInput);

	form.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });

    form.addEventListener('input', handleFormInput);
    toggleButton(form);
}

// function handleFormSubmit(evt) {
//     evt.preventDefault();

//     const form = evt.target;
//     const inputs = Array.from(formElement.querySelectorAll(config.inputSelector));

    // const data = inputs.reduce((acc, input) => {
    //     const key = input.name;
    //     const value = input.value;
    //     acc[key] = value;
    //     return acc;
    // }, {});
    // console.log(data);
//}

function handleFormInput(evt) {
    toggleButton(evt.currentTarget);
}

function toggleButton(form) {
    const button = form.querySelector(config.submitButtonSelector); 
    const isFormInvalid = !form.checkValidity();

    button.disabled = isFormInvalid;
    button.classList.toggle(config.inactiveButtonClass, isFormInvalid);
}

function addListenersToInput(input) {
	input.addEventListener('input', handleFieldValidation);
}

function handleFieldValidation(evt) {
	const element = evt.target;
	const errorContainer = document.querySelector(`#${element.id}-error`);
	element.setCustomValidity('');

	element.classList.toggle(
		'popup__input_type_error',
		!element.validity.valid
	);

		errorContainer.textContent = element.validationMessage;
}