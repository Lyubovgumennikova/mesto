const popupElement = document.querySelector(".popup");
const popupCloseButtonElement = popupElement.querySelector(".popup__close");
const popupOpenButtonElement = document.querySelector(".profile__button-edit");
const popupSubmitButtonElement = document.querySelector(".popup__submit-button");

const togglePopupVisibiliti = function () {
    popupElement.classList.toggle("popup_opened");
};

popupOpenButtonElement.addEventListener("click", togglePopupVisibiliti);
popupCloseButtonElement.addEventListener("click", togglePopupVisibiliti);
popupSubmitButtonElement.addEventListener("click", togglePopupVisibiliti);


const profilElement = document.querySelector(".profile");
let nameProfile = profilElement.querySelector(".profile__info-name");
let jobProfile = profilElement.querySelector(".profile__info-job");
//console.log(nameProfile.textContent);
//console.log(jobProfile);
let formElement = popupElement.querySelector(".popup__content");// Воспользуйтесь методом querySelector()
let nameInput = popupElement.querySelector(".popup__input_name");// Воспользуйтесь инструментом .querySelector()
let jobInput = popupElement.querySelector(".popup__input_job");// Воспользуйтесь инструментом .querySelector()
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault();

  //let inputName = nameInput.value;
  //let inputJob = jobInput.value; 
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
};
formElement.addEventListener('submit', formSubmitHandler);