// const config = {
//   formSelector: ".popup__content",
//   inputSelector: ".popup__input",
//   submitButtonSelector: ".popup__submit-button",
//   inactiveButtonClass: "popup__submit-button_disabled",
//   inputErrorClass: "popup__input_type_error",
//   errorClass: "popup__input-error_active",
// };

enableValidation();

function enableValidation() {
	const forms = Array.from(document.querySelectorAll('.popup__content')); // config.formSelector
		forms.forEach(addListenersToForm);
}

function addListenersToForm(form) {
	const inputs = Array.from(document.querySelectorAll('.popup__input ')); // config.inputSelector

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
      element.classList.add ('popup__input_type_error')
    } else {
      element.classList.remove('popup__input_type_error')
    }
    errorContainer.textContent = element.validationMessage;
    
	//);

		
}

// function handleFormSubmit(evt) {
//     evt.preventDefault();

//     const form = evt.target;
//     const inputs = Array.from(formElement.querySelectorAll(config.inputSelector)); //.popup__input

//     // const data = inputs.reduce((acc, input) => {
//     //     const key = input.name;
//     //     const value = input.value;
//     //     acc[key] = value;
//     //     return acc;
//     // }, {});
//     // console.log(data);
// }

function handleFormInput(evt) {
    toggleButton(evt.currentTarget);
}

function toggleButton(form) {
    const button = form.querySelector('.popup__submit-button'); //  config.submitButtonSelector
        const isFormInvalid = !form.checkValidity();

    button.disabled = isFormInvalid;
    button.classList.toggle('popup__submit-button_disabled', isFormInvalid); //  config.inactiveButtonClass
}




