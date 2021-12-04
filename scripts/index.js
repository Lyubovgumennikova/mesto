import { initialCards, config } from "./array.js";
import { Card } from "./Card .js  ";
import { FormValidator } from "./FormValidator.js";

const popupEditElement = document.querySelector(".popup_type_edit");
const popupCardElement = document.querySelector(".popup_type_new-card");
const popupImageElement = document.querySelector(".popup_type_image");

const popupOpenButtonElement = document.querySelector(".profile__button-edit");
const popupAddButtonElement = document.querySelector(".profile__button-add");

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

const profilElement = document.querySelector(".profile");
const nameProfile = profilElement.querySelector(".profile__info-name");
const jobProfile = profilElement.querySelector(".profile__info-job");

const formProfileElement = popupEditElement.querySelector(".popup__content");
const nameInput = popupEditElement.querySelector(".popup__input_prof_name");
const jobInput = popupEditElement.querySelector(".popup__input_prof_job");

const formCardElement = popupCardElement.querySelector(".popup__content");
const mestInput = popupCardElement.querySelector(".popup__input_card_name");
const cardInput = popupCardElement.querySelector(".popup__input_card_image");

const createCard = (isGrid) => {
  //cards.innerHTML = '';
  const card = isGrid
    ? new Card(isGrid, ".card-template")
    : new Card(element, ".card-template", openPopup());
  const cardElement = card.generateCard();
  document.addEventListener("keydown", clocePopupClickByEsc);
  return renderCard(cardElement);
};

function submitCardsForm(evt) {
    evt.preventDefault();
  const addInputCard = {
    name: mestInput.value,
    link: cardInput.value,
  };

  closePopup(popupCardElement);
  mestInput.value = "";
  cardInput.value = "";
  return createCard(addInputCard);
}

function renderCard(element) {
  cards.prepend(element);
}

initialCards.forEach((element) => {
  return createCard(element);
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
  const form = new FormValidator(config, ".popup_opened");
  form.enableValidation();
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
});

popupAddButtonElement.addEventListener("click", function () {
  openPopup(popupCardElement);
});

cloceButtonProfil.addEventListener("click", function () {
  closePopup(popupEditElement);
});

cloceButtonCard.addEventListener("click", function () {
  closePopup(popupCardElement);
});

cloceButtonImage.addEventListener("click", function () {
  closePopup(popupImageElement);
});

popupEditElement.addEventListener("mousedown", clocePopupClickOverlay);
popupCardElement.addEventListener("mousedown", clocePopupClickOverlay);
popupImageElement.addEventListener("mousedown", clocePopupClickOverlay);
