const popup = document.querySelector(".popup_opened");

const popupEditElement = document.querySelector(".popup_type_edit"); 
const popupCardElement = document.querySelector(".popup_type_new-card");
const popupImageElement = document.querySelector(".popup_type_image");


const popupOpenButtonElement = document.querySelector(".profile__button-edit");
const popupAddButtonElement = document.querySelector(".profile__button-add");
const deleteButtonElement = document.querySelector(".element__remove-button");


const cloceButtonProfil = popupEditElement.querySelector(".popup__close_type_edit");
const cloceButtonCard = popupCardElement.querySelector(".popup__close_type_new-card");
const cloceButtonImage = popupImageElement.querySelector(".popup__close_type_image");
//const submitButtonElement = formElement.querySelector(".popup__submit-button");

const cards = document.querySelector('.elements');
const cardTemplate = document.querySelector('.card-template');

const profilElement = document.querySelector(".profile");
const nameProfile = profilElement.querySelector(".profile__info-name");
const jobProfile = profilElement.querySelector(".profile__info-job");

const linkCard = document.querySelector(".element__mask-group");

const formElement = popupEditElement.querySelector(".popup__content");
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
      toggleModal(popupImageElement);
}

function clocePopupClickOverlay(event) {
  if (event.target !== event.currentTarget)  {
    //const popup = document.querySelector(".popup_opened"); 
    //closePopup(popup);
    return;
  }

  const popup = document.querySelector(".popup_opened"); 
  closePopup(popup);
  // closePopup(popupCardElement);
  // closePopup(popupImageElement);
}


function render() {
  initialCards.forEach((element) => {
    getCard(element);
  });
};

function getCard(element) {
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
render();

function toggleModal (popupElement) {
  popupElement.classList.toggle('popup_opened');
}

function closePopup (popupElement) {
  popupElement.classList.remove('popup_opened');
};


function formSubmitHandler (evt) {
  evt.preventDefault(popupEditElement);

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  
  toggleModal(popupEditElement);
};

function formSubmitCards (evt) {
  evt.preventDefault();
  const addInputCard = {
    name: mestInput.value,
    link: cardInput.value
  };
  getCard(addInputCard);
  toggleModal(popupCardElement);
  mestInput.value = "";
  cardInput.value= "";
  enableValidation();
};

formElement.addEventListener('submit', formSubmitHandler);
formCardElement.addEventListener('submit', formSubmitCards);


  popupOpenButtonElement.addEventListener("click", function() {
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
    enableValidation()
    toggleModal(popupEditElement);
  });
  
  popupAddButtonElement.addEventListener("click", function (){
    toggleModal(popupCardElement);
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

  popupEditElement.addEventListener("click", clocePopupClickOverlay);
  popupCardElement.addEventListener("click", clocePopupClickOverlay);
  popupImageElement.addEventListener("click", clocePopupClickOverlay);

  document.addEventListener('keydown', clocePopupClickByEsc);

  // popup.addEventListener('keydown', function (evt) {
  //      if (evt.key === 'Escape') {
  //       closePopup(popup);
  //     };
  // }); 


function clocePopupClickByEsc(evt) {
      if (evt.key === 'Escape') {
        const popup = document.querySelector(".popup_opened"); 
        closePopup(popup);
    };
};  

