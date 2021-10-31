const popupEditElement = document.querySelector(".popup_type_edit"); //popupEditElement
const popupCardElement = document.querySelector(".popup_type_new-card");

const popupCloseButtonElement = popupEditElement.querySelector(".popup__close");
const popupOpenButtonElement = document.querySelector(".profile__button-edit");
const popupAddButtonElement = document.querySelector(".profile__button-add");

const profilElement = document.querySelector(".profile");
let nameProfile = profilElement.querySelector(".profile__info-name");
let jobProfile = profilElement.querySelector(".profile__info-job");
//console.log(nameProfile.textContent);
//console.log(jobProfile);
let formElement = popupEditElement.querySelector(".popup__content");// Воспользуйтесь методом querySelector()
let nameInput = popupEditElement.querySelector(".popup__input_prof_name");// Воспользуйтесь инструментом .querySelector()
let jobInput = popupEditElement.querySelector(".popup__input_prof_job");// Воспользуйтесь инструментом .querySelector()

const openProfPopup = function (){
  popupEditElement.classList.add('popup_opened');
  
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
};

const openCardPopup = function (){
  popupCardElement.classList.add('popup_opened');
  
  //nameInput.value = nameProfile.textContent;
  //jobInput.value = jobProfile.textContent;
};

const closeProfPopup = function (){
  popupEditElement.classList.remove('popup_opened');
};

function formSubmitHandler (evt) {
    evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  
  closeProfPopup ();
};

formElement.addEventListener('submit', formSubmitHandler);

popupOpenButtonElement.addEventListener("click", openProfPopup);
popupAddButtonElement.addEventListener("click", openCardPopup);
popupCloseButtonElement.addEventListener("click", closeProfPopup);