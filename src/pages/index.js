import "../pages/index.css";
import { initialCards, config } from "../components/array.js";
import { Card } from "../components/Card .js";
import { FormValidator } from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";

const popupEditElement = document.querySelector(".popup_type_edit");
const popupCardElement = document.querySelector(".popup_type_new-card");

const popupOpenButtonElement = document.querySelector(".profile__button-edit");
const popupAddButtonElement = document.querySelector(".profile__button-add");

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

const popupImageElement = document.querySelector(".popup_type_image");

const formValidators = {};

const handleCardClick = (evt) => {
  const data = {
    link: evt.target.src,
    text: evt.target.closest(".element").querySelector(".element__text")
      .textContent,
  };
  popupWithImage.openPopup(data);
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validateForm = new FormValidator(config, formElement);
    formValidators[formElement.name] = validateForm;
    validateForm.enableValidation();
  });
};

const popupWithImage = new PopupWithImage(popupImageElement);
const userInfo = new UserInfo({ nameProfile, jobProfile });

const createCard = (data) => {
  const card = new Card(data, ".card-template", handleCardClick); //, openPopup
  const cardElement = card.generateCard();
  return cardElement;
};

const section = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      section.addItem(createCard(item));
    },
  },
  cards
);

const popupInfo = new PopupWithForm(popupEditElement, {
  handleFormSubmit: () => {
    userInfo.setUserInfo();
    popupInfo.closePopup();
  },
});

const popupCard = new PopupWithForm(popupCardElement, {
  handleFormSubmit: () => {
    const item = {
      name: mestInput.value,
      link: cardInput.value,
    };
    section.addItem(createCard(item));
    popupCard.closePopup();
  },
});

popupAddButtonElement.addEventListener("click", function () {
  popupCard.openPopup();
  popupCard.setEventListeners();
  formValidators[formCardElement.name].resetValidation();
});

popupOpenButtonElement.addEventListener("click", function () {
  const data = userInfo.getUserInfo();
  nameInput.value = data.nik;
  jobInput.value = data.job;
  popupInfo.openPopup(popupEditElement);
  popupInfo.setEventListeners();

  formValidators[formProfileElement.name].resetValidation();
});

popupWithImage.setEventListeners();
section.renderItems();
enableValidation(config);
