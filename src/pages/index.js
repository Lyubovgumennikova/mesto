import "../pages/index.css";
import { config } from "../utils/array.js";
import {renderLoading} from "../utils/utils.js";
import { Card } from "../components/Card .js";
import { FormValidator } from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupConfirm from "../components/PopupConfirm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js"

const popupEditElement = document.querySelector(".popup_type_edit");
const popupCardElement = document.querySelector(".popup_type_new-card");
const popupImageElement = document.querySelector(".popup_type_image");
const popupAvatardElement = document.querySelector(".popup_type_avatar");
const popupDeleteCardElement = document.querySelector(".popup_type_delete");

const popupOpenButtonElement = document.querySelector(".profile__button-edit");
const popupAddButtonElement = document.querySelector(".profile__button-add");
const popupAvatarButtonElement = document.querySelector(".profile__avatar-button-edit");

const cards = document.querySelector(".elements");

const profilElement = document.querySelector(".profile");
const nameProfile = profilElement.querySelector(".profile__info-name");
const jobProfile = profilElement.querySelector(".profile__info-job");
const avatarProfile = profilElement.querySelector(".profile__avatar");

const formProfileElement = popupEditElement.querySelector(".popup__content");
const nameInput = popupEditElement.querySelector(".popup__input_prof_name");
const jobInput = popupEditElement.querySelector(".popup__input_prof_job");

const formCardElement = popupCardElement.querySelector(".popup__content");
const formAvatarElement = popupAvatardElement.querySelector(".popup__content");

const formValidators = {};

let userId; 

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-33/',
  headers: {
    Authorization: 'be382cad-ad48-4296-8278-8fad1d3ee484',
    "content-type": "application/json"
  }
});

const UserInfoData = [api.getUserInfo(), api.getInitialCards()];

const cardsList = new Section(
  {
    renderer: (data) => {
      const createCard = new Card(
        data, {
          handleCardClick: () => {
            popupWithImage.openPopup(data); // ...что должно произойти при клике на картинку
          },
          handleLikeClick: (data) => { // ...что должно произойти при клике на лайк
            if (!data._likeButton.classList.contains("element__vector_active")) {
              return api.addCardLike(data) //  api.addCardLike(data);
            } else {
              return api.deleteCardLike(data);
            }
          },
          handleDeleteIconClick: (data) => {
            popupDeleteCard.data = data;
            popupDeleteCard.openPopup(data);//...что должно произойти при клике на удаление
          }
        }, ".card-template", userId)
      const cardElement = createCard.generateCard(data);
        return cardElement;
    },
  },
  cards);

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validateForm = new FormValidator(config, formElement);
    formValidators[formElement.name] = validateForm;
    validateForm.enableValidation();
  });
};

const popupWithImage = new PopupWithImage(popupImageElement);
const userInfo = new UserInfo({ nameProfile, jobProfile, avatarProfile });

const popupInfo = new PopupWithForm(popupEditElement, {
  handleFormSubmit: (data) => {
    renderLoading(popupEditElement, true)
    api.editProfile(data)
    .then((data) => {
      userInfo.setUserInfo(data);
      popupInfo.closePopup();
    }).catch((err) => console.log(err))
    .finally(() => {
      renderLoading(popupEditElement, false); //buttonSubmit
    });
  },
});

const popupAvatar = new PopupWithForm(popupAvatardElement, {
  handleFormSubmit: (data) => {
    renderLoading(popupAvatardElement, true)
    api.editAvatar(data)
    .then((data) => {
      userInfo.setUserAvatar(data);
      popupAvatar.closePopup();
    }).catch((err) => console.log(err))
    .finally(() => {
      renderLoading(popupAvatardElement, false);
    });
  },
});

const popupCard = new PopupWithForm(popupCardElement, {
  handleFormSubmit: (data) => {
    renderLoading(popupCardElement, true)
    api.addNewCard(data)
    .then((data) => {
      cardsList.addItem(data );
      popupCard.closePopup();
    }).catch((err) => console.log(err))
    .finally(() => {
      renderLoading(popupCardElement, false);
    });
  },
});

const popupDeleteCard = new PopupConfirm(popupDeleteCardElement, {
  handleFormSubmit: (data) => {
    renderLoading(popupDeleteCardElement,true)
    api.deleteCard(data)
    .then( () => {
      data.deleteClick(data._element) 
      popupDeleteCard.closePopup();
    }).catch((err) => console.log(err))
    .finally(() => {
      renderLoading(popupDeleteCardElement, false);
    });
  },
});

popupAddButtonElement.addEventListener("click", function () {
  popupCard.openPopup();
  formValidators[formCardElement.name].resetValidation();
});

popupAvatarButtonElement.addEventListener("click", function () {
  popupAvatar.openPopup();
  formValidators[formAvatarElement.name].resetValidation();
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
popupAvatar.setEventListeners();
popupDeleteCard.setEventListeners();

enableValidation(config);

Promise.all(UserInfoData)
  .then(([userData, items]) => {
    userId = userData._id;
    userInfo.setUserInfo(userData);
    userInfo.setUserAvatar(userData);
    cardsList.renderItems(items);
  }).catch((err) => alert(err));
