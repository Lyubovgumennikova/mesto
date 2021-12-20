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

const popupWithImage = new PopupWithImage(popupImageElement);
popupWithImage.setEventListeners();

const handleCardClick = (evt) => {
  const data = {
link: evt.target.src,
text: evt.target.closest(".element").querySelector(".element__text").textContent,
  }
  popupWithImage.openPopup(data);
} 

const formValidators = {}

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validateForm = new FormValidator(config, formElement)
    formValidators[ formElement.name ] = validateForm;
    validateForm.enableValidation();
  });
};

// const createCard = new Section({ 
//   items: initialCards,
//   renderer: (cardItem) => {
//             const card = new Card(cardItem, ".card-template", handleCardClick) //, openPopup
//             const cardElement = card.generateCard();
//             createCard.addItem(cardElement);
//   } 
// }, cards);
const createCard = (data) => { 
            const card = new Card(data, ".card-template", handleCardClick) //, openPopup
            const cardElement = card.generateCard();
            return cardElement;
};

const section = new Section(
  {items: initialCards,
    renderer: (item) => {
      section.addItem(createCard(item));
    },
  },
  cards);



  section.renderItems()

const userInfo = new UserInfo({ nameProfile, jobProfile });
const popupInfo = new PopupWithForm(popupEditElement, (data) => submitProfileForm (data))
// const popupCard = new PopupWithForm(popupCardElement, (data) => submitCardsForm (data))
// const popupInfo = new PopupWithForm({popupEditElement, 
//   handleFormSubmit: ({ nameProfile, jobProfile }) => {
//     const userInfo = new UserInfo({ nameProfile, jobProfile });
//     userInfo.setUserInfo()
//   } //formSubmitProfile (data)
// })


popupOpenButtonElement.addEventListener("click", function () {
   //popupInfo.getUserInfo()  //(popupCardElement);
  const data = userInfo.getUserInfo();
  nameInput.value = data.nik;
  jobInput.value = data.job;
  popupInfo.openPopup(popupEditElement);
  popupInfo.setEventListeners();

  //openPopup(popupEditElement);
  formValidators[ formProfileElement.name ].resetValidation();
});

const popupCard = new PopupWithForm(popupCardElement, {
  handleFormSubmit: () => {
    const item = {
      name: mestInput.value,
      link: cardInput.value,
    };
    section.addItem(createCard(item ));
    popupCard.closePopup();
  }
  
})

popupAddButtonElement.addEventListener("click", function () {
    popupCard.openPopup();
    popupCard.setEventListeners();
  formValidators[ formCardElement.name ].resetValidation();
}); 

function submitCardsForm() {
    const item = {
    name: mestInput.value,
    link: cardInput.value,
  };

  const formRenderer = new Section({
    data: []
  }, formCardElement);
  
  const formElement = popupCard.generateCard();
  
  formRenderer.addItem(formElement);
  // closePopup(popupCardElement);
  // mestInput.value = "";
  // cardInput.value = "";
    // createCard.generateCard(addInputCard);
    //return createCard.addItem(addInputCard)
    // addInputCard.generateCard();
    // addInputCard.addItem();  
    // renderer(
    //   createCard ({addInputCard}))  
    //({ addInputCard, renderer }, containerSelector)
      //createCard.generateCard({ addInputCard },)
    
    //return createCard.renderer({addInputCard})  //createCard({renderer: addInputCard},)
}


function formSubmitProfile(data) {
  // evt.preventDefault();
  const inputsPopup = data
  userInfo.setUserInfo(inputsPopup.nameInput, inputsPopup.jobInput);
  popupInfo.clocePopup(popupEditElement);
}


function submitProfileForm(data) {
  //evt.preventDefault(popupEditElement);
  const inputsPopup = data
  userInfo.setUserInfo(inputsPopup.nik, inputsPopup.job)
  // data.nik = nameInput.textContent;
  // data.job = jobInput.textContent;
  // const data = userInfo.setUserInfo();
  
  popupInfo.closePopup(popupEditElement);
}

// nameInput.value = data.nik;
//   jobInput.value = data.job;

enableValidation(config);