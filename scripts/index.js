import { initialCards, config } from "./array.js";
import { Card } from "./Card .js  ";
import { FormValidator } from "./FormValidator.js";

const popupEditElement = document.querySelector(".popup_type_edit");
const popupCardElement = document.querySelector(".popup_type_new-card");
const popupImageElement = document.querySelector(".popup_type_image");

const popupOpenButtonElement = document.querySelector(".profile__button-edit");
const popupAddButtonElement = document.querySelector(".profile__button-add");

//const popupImageElement = document.querySelector(".popup_type_image");
const imageTextPopup = popupImageElement.querySelector(".popup__text-image");
const imageCardPopup = popupImageElement.querySelector(".popup__mask-group");

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

const createCard = (item) => {
  const card = new Card(item, ".card-template", openPopup)
  const cardElement = card.generateCard();
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

export function openPopup(popupElement) {
  popupElement.classList.add("popup_opened");
  document.addEventListener("keyup", closeByEscape);
}

function closePopup(popupElement) {
  popupElement.classList.remove("popup_opened");
  document.removeEventListener("keyup", closeByEscape);
}

function closeByEscape(evt) {
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
  const form = new FormValidator(config, popupEditElement);
  form.enableValidation();
});

popupAddButtonElement.addEventListener("click", function () {
  openPopup(popupCardElement);
  const formElement = new FormValidator(config, popupCardElement);
formElement.enableValidation();
});

const popups = document.querySelectorAll('.popup')

popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__close')) {
          closePopup(popup)
        }
    })
})

export const handleCardClick = function(link, name) {
  imageCardPopup.src = link;   // устанавливаем ссылку
  imageCardPopup.alt = name; 
  imageTextPopup.textContent = name;  // устанавливаем подпись картинке
      openPopup(popupImageElement); // открываем попап универсальной функцией, которая навешивает обработчик Escape внутри себя
}
// handleCardClick.generateCard();

// const form = new FormValidator(config, ".popup_opened");
// form.enableValidation();