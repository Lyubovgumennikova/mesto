const popupEditElement = document.querySelector(".popup_type_edit");
const popupCardElement = document.querySelector(".popup_type_new-card");
const popupImageElement = document.querySelector(".popup_type_image");

const popupOpenButtonElement = document.querySelector(".profile__button-edit");
const popupAddButtonElement = document.querySelector(".profile__button-add");
const deleteButtonElement = document.querySelector(".element__remove-button");

const likeButtonElement = document.querySelector(".element__vector");
const submitButtonElement = document.querySelector(".popup__submit-button");

const cloceButtonProfil = popupEditElement.querySelector(
  ".popup__close_type_edit"
);
const cloceButtonCard = popupCardElement.querySelector(
  ".popup__close_type_new-card"
);
const cloceButtonImage = popupImageElement.querySelector(
  ".popup__close_type_image"
);

const cards = document.querySelector(".elements");
const cardTemplate = document.querySelector(".card-template");

const profilElement = document.querySelector(".profile");
const nameProfile = profilElement.querySelector(".profile__info-name");
const jobProfile = profilElement.querySelector(".profile__info-job");

const linkCard = document.querySelector(".element__mask-group");

const formProfileElement = popupEditElement.querySelector(".popup__content");
const nameInput = popupEditElement.querySelector(".popup__input_prof_name");
const jobInput = popupEditElement.querySelector(".popup__input_prof_job");

const formCardElement = popupCardElement.querySelector(".popup__content");
const mestInput = popupCardElement.querySelector(".popup__input_card_name");
const cardInput = popupCardElement.querySelector(".popup__input_card_image");

const imageTextPopup = popupImageElement.querySelector(".popup__text-image");
const imageCardPopup = popupImageElement.querySelector(".popup__mask-group");

const config = {
  formSelector: ".popup__content",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};




function submitCardsForm(evt) {
  evt.preventDefault();

  const addInputCard = 
  {
    name: mestInput.value,
    link: cardInput.value,
  };

  closePopup(popupCardElement);
  mestInput.value = "";
  cardInput.value = "";
  //toggleButton(formCardElement, config);
  // return {
  //   name: mestInput.value,
  //   link: cardInput.value,
  // };
  return createCard(addInputCard)
}


function renderCard(element) {
  // cards.innerHTML = '';
  
        // Добавляем в DOM
  cards.prepend(element);
  //   });
}

//

const createCard = (isGrid) => {
 //cards.innerHTML = '';
 const card = isGrid
 ? new Card(isGrid, '.card-template')
 : new Card(element, ".card-template");
 const cardElement = card.generateCard();
 return renderCard(cardElement);
 }

initialCards.forEach((element) => {
  // Создадим экземпляр карточки
  // const card = new Card(element, ".card-template");
  // вызовем метод
  
  return createCard(element)

});


function clocePopupClickOverlay(event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  const popup = document.querySelector(".popup_opened");
  closePopup(popup);
}

function openPopup(popupElement) {
  popupElement.classList.add("popup_opened");
  document.addEventListener("keyup", clocePopupClickByEsc);
//   const form = new FormValidator(config, ".popup_opened");
// form.enableValidation();
}

function closePopup(popupElement) {
  popupElement.classList.remove("popup_opened");
  document.removeEventListener("keyup", clocePopupClickByEsc);
}

function clocePopupClickByEsc(evt) {
  if (evt.key === "Escape") {
    const popup = document.querySelector(".popup_opened");
    closePopup(popup);
  }
}

function submitProfileForm(evt) {
  evt.preventDefault(popupEditElement);

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupEditElement);
}

formProfileElement.addEventListener("submit", submitProfileForm);
formCardElement.addEventListener("submit", submitCardsForm);

popupOpenButtonElement.addEventListener("click", function () {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openPopup(popupEditElement);
  //toggleButton(formProfileElement, config);
});

popupAddButtonElement.addEventListener("click", function () {
  openPopup(popupCardElement);
});

cloceButtonProfil.addEventListener("click", function () {
  closePopup(popupEditElement);
});
cloceButtonCard.addEventListener("click", function () {
  //setSubmitButtonState(popupInputElement, popupButtonElement, false);
  closePopup(popupCardElement);
});
cloceButtonImage.addEventListener("click", function () {
  closePopup(popupImageElement);
});

popupEditElement.addEventListener("mousedown", clocePopupClickOverlay);
popupCardElement.addEventListener("mousedown", clocePopupClickOverlay);
popupImageElement.addEventListener("mousedown", clocePopupClickOverlay);
