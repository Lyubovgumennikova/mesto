import "../pages/index.css";
import { initialCards, config } from "../utils/array.js";
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

const cardsList = new Section(
  {items: initialCards,
    renderer: (card) => {
      const createCard = new Card(card, ".card-template", handleCardClick);
      const cardElement = createCard.generateCard();
        return cardElement;
    },
  },
cards);

const popupInfo = new PopupWithForm(popupEditElement, {
  handleFormSubmit: (data) => {
    userInfo.setUserInfo(data);
    popupInfo.closePopup();
  },
});

const popupCard = new PopupWithForm(popupCardElement, {
  handleFormSubmit: (data) => {
    cardsList.addItem(data );
    popupCard.closePopup();
  },
});

popupAddButtonElement.addEventListener("click", function () {
  popupCard.openPopup();
  formValidators[formCardElement.name].resetValidation();
});

popupOpenButtonElement.addEventListener("click", function () {
  const data = userInfo.getUserInfo();
  nameInput.value = data.nik;
  jobInput.value = data.job;
  popupInfo.openPopup(popupEditElement);
  
  formValidators[formProfileElement.name].resetValidation();
});

popupInfo.setEventListeners();
popupCard.setEventListeners();
popupWithImage.setEventListeners();
cardsList.renderItems();
enableValidation(config);
