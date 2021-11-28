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

// class HorizontalCard extends Card {
//   constructor(data, cardSelector) {
//     super(cardSelector);
//     this._link = data.link;
//     this._name = data.name;
//   }
//   submitCardsForm(evt) {
//     evt.preventDefault();
  
//     const addInputCard = 
//     {
//       name: mestInput.value,
//       _link = cardInput.value,
//     };

//     renderCard(addInputCard);
// }
// }
function submitCardsForm(evt) {
  evt.preventDefault();

  const addInputCard = 
  {
    name: mestInput.value,
    link: cardInput.value,
  };

  //cardElement
   const card = new Card(evt, ".card-template_type_image");
  // // вызовем метод
   card.generateCard(addInputCard);


  
  //renderCard(cardElement);
  closePopup(popupCardElement);
  mestInput.value = "";
  cardInput.value = "";
  toggleButton(formCardElement, config);
  // return {
  //   name: mestInput.value,
  //   link: cardInput.value,
  // };
  return renderCard(addInputCard)
}
//     generateCard() {
//       this._element = super._getTemplate();
//       super._setEventListeners();
//       //formCardElement.addEventListener('submit', this._submitHandler);
//       return {
//         name: mestInput.value,
//         link: cardInput.value,
//       };
//       //this._element;

//     }

// closePopup(popupCardElement);
// mestInput.value = "";
// cardInput.value = "";
// toggleButton(formCardElement, config);

//}

function renderCard(element) {
  //cards.innerHTML = '';
  
        // Добавляем в DOM
  cards.prepend(element);
  //   });
}

//


initialCards.forEach((element) => {
  // Создадим экземпляр карточки
  const card = new Card(element, ".card-template");
  // вызовем метод
  const cardElement = card.generateCard();
  // return {
  //   name: mestInput.value,
  //   link: cardInput.value,
  // };

  return renderCard(cardElement);
});
//}

// _addItem = (text) => {
//   this._createTodoListItem(text, this._addItem).render(this._view);
// }

//cards.forEach((cardInfo) => new Card(cardInfo….

//renderCard();

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
  toggleButton(formProfileElement, config);
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
