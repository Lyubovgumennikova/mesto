const popupEditElement = document.querySelector(".popup_type_edit"); 
const popupCardElement = document.querySelector(".popup_type_new-card");
const popupImageElement = document.querySelector(".popup_type_image");

const popupOpenButtonElement = document.querySelector(".profile__button-edit");
const popupAddButtonElement = document.querySelector(".profile__button-add");
const deleteButtonElement = document.querySelector(".element__remove-button");

const cloceButtonProfil = popupEditElement.querySelector(".popup__close_type_edit");
const cloceButtonCard = popupCardElement.querySelector(".popup__close_type_new-card");
const cloceButtonImage = popupImageElement.querySelector(".popup__close_type_image");

const cards = document.querySelector('.elements');
const cardTemplate = document.querySelector('.card-template');

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

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

const popupOpenImageElement = function (link, name) {
  imageTextPopup.textContent = name;
  imageCardPopup.src = link;
  imageCardPopup.alt = name;
    openPopup(popupImageElement);
}

function clocePopupClickOverlay(event) {
  if (event.target !== event.currentTarget)  {
    return;
  };
  const popup = document.querySelector(".popup_opened"); 
  closePopup(popup);
}


  initialCards.forEach((element) => {
    renderCard(element);
  });

function renderCard(element) {
  const cardElement = createCard(element);
  cards.prepend(cardElement);
};

function createCard(element) {
  const templateElement = cardTemplate.content.cloneNode(true);
  const imageCardElement = templateElement.querySelector('.element__mask-group')
  templateElement.querySelector('.element__text').textContent = element.name;
  imageCardElement.src = element.link;
  imageCardElement.alt = element.name;
  
  templateElement.querySelector('.element__vector').addEventListener('click',function(evt) {
      evt.target.classList.toggle('element__vector_active');
  });
    templateElement.querySelector('.element__remove-button').addEventListener('click',function(evt) {
      evt.target.closest('.element').remove();
  });
  imageCardElement.addEventListener("click", function(event) {
      popupOpenImageElement(element.link, element.name)
  });
    return templateElement;
}; 
//render();

function openPopup (popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keyup', clocePopupClickByEsc); 
}

function closePopup (popupElement) {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keyup', clocePopupClickByEsc); 
};

function clocePopupClickByEsc(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector(".popup_opened"); 
    closePopup(popup);
  };
};

function submitProfileForm (evt) {
  evt.preventDefault(popupEditElement);

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  
  closePopup(popupEditElement);
};

function submitCardsForm (evt) {
  evt.preventDefault();
  const addInputCard = {
    name: mestInput.value,
    link: cardInput.value
  };
  renderCard(addInputCard);
  closePopup(popupCardElement);
  mestInput.value = "";
  cardInput.value= "";
  //submitButtonSelector.disabled = true;
  //buttonElement.classList.add(config.inactiveButtonClass)
  //enableValidation(); //setSubmitButtonState(inputElement, config) // 
};

formProfileElement.addEventListener('submit', submitProfileForm);
formCardElement.addEventListener('submit', submitCardsForm);


  popupOpenButtonElement.addEventListener("click", function() {
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
    //enableValidation()
    openPopup(popupEditElement);
  });
  
  popupAddButtonElement.addEventListener("click", function (){
    openPopup(popupCardElement);
  });


  cloceButtonProfil.addEventListener("click", function (){
    closePopup(popupEditElement);
    });
  cloceButtonCard.addEventListener("click", function (){
    closePopup(popupCardElement);
  });
  cloceButtonImage.addEventListener("click", function (){
    closePopup(popupImageElement);
  });

  popupEditElement.addEventListener("mousedown", clocePopupClickOverlay);
  popupCardElement.addEventListener("mousedown", clocePopupClickOverlay);
  popupImageElement.addEventListener("mousedown", clocePopupClickOverlay);

  