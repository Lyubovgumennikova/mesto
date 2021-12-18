import '../pages/index.css';
import { initialCards, config } from "../components/array.js";
import { Card } from "../components/Card .js";
import { FormValidator } from "../components/FormValidator.js";
import  Section  from "../components/Section.js";
import  PopupWithForm  from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";

const popups = document.querySelectorAll('.popup');
const popupEditElement = document.querySelector(".popup_type_edit");
const popupCardElement = document.querySelector(".popup_type_new-card");

const popupOpenButtonElement = document.querySelector(".profile__button-edit");
const popupAddButtonElement = document.querySelector(".profile__button-add");

const cards = document.querySelector(".elements");
const popupImageElement = document.querySelector(".popup_type_image");

const profilElement = document.querySelector(".profile");
const nameProfile = profilElement.querySelector(".profile__info-name");
const jobProfile = profilElement.querySelector(".profile__info-job");

const formProfileElement = popupEditElement.querySelector(".popup__content");
const nameInput = popupEditElement.querySelector(".popup__input_prof_name");
const jobInput = popupEditElement.querySelector(".popup__input_prof_job");

const formCardElement = popupCardElement.querySelector(".popup__content");
const mestInput = popupCardElement.querySelector(".popup__input_card_name");
const cardInput = popupCardElement.querySelector(".popup__input_card_image");

const formValidators = {}

const popupWithImage = new PopupWithImage(popupImageElement);
popupWithImage.setEventListeners();

const handleCardClick = (evt) => {
  const data = {
link: evt.target.src,
text: evt.target.closest(".element").querySelector(".element__text").textContent,
  }
  popupWithImage.openPopup(data);
}

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validateForm = new FormValidator(config, formElement)
    formValidators[ formElement.name ] = validateForm;
    validateForm.enableValidation();
  });
};

const createCard = new Section({ 
  items: initialCards,
  renderer: (cardItem) => {
            const card = new Card(cardItem, ".card-template", handleCardClick) //, handleCardClick
            const cardElement = card.generateCard();
            createCard.addItem(cardElement);
  } 
}, cards);
createCard.renderItems()





popupAddButtonElement.addEventListener("click", function () {
  const popupCard = new PopupWithForm(popupCardElement,  {
    formSubmitCallBack: (data, button) => {
      addSpinner(button);
    }
  }); 
    popupCard.openPopup();
    popupCard.setEventListeners();
  formValidators[ formCardElement.name ].resetValidation();
});

popupOpenButtonElement.addEventListener("click", function () {
  const popupInfo = new PopupWithForm(popupEditElement, {
    formSubmitCallBack: (data, button) => {
      addSpinner(button);
    },
  });
  //popupInfo.getUserInfo()  //(popupCardElement);
  popupInfo.openPopup(popupEditElement);
  popupInfo.setEventListeners();

  //openPopup(popupEditElement);
  formValidators[ formProfileElement.name ].resetValidation();
});

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

// function openPopup(popupElement) {
//   popupElement.classList.add("popup_opened");
//   document.addEventListener("keyup", closeByEscape);
// }



function submitProfileForm(evt) {
  evt.preventDefault(popupEditElement);

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupEditElement);
}

// formProfileElement.addEventListener("submit", submitProfileForm);
// formCardElement.addEventListener("submit", submitCardsForm);

// popupOpenButtonElement.addEventListener("click", function () {
//   nameInput.value = nameProfile.textContent;
//   jobInput.value = jobProfile.textContent;
//   openPopup(popupEditElement);
//   formValidators[ formProfileElement.name ].resetValidation();
// });

// popupAddButtonElement.addEventListener("click", function () {
//   const popupCard = new PopupWithForm(popupCardElement)
//    popupCard.setEventListeners();
  
//   formValidators[ formCardElement.name ].resetValidation();
// });

// popups.forEach((popup) => {
//     popup.addEventListener('click', (evt) => {
//         if (evt.target.classList.contains('popup_opened')) {
//             closePopup(popup)
//         }
//         if (evt.target.classList.contains('popup__close')) {
//           closePopup(popup)
//         }
//     })
// })

enableValidation(config);