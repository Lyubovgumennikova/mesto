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

let linkCard = document.querySelector(".element__mask-group");

const formElement = popupEditElement.querySelector(".popup__content");
const nameInput = popupEditElement.querySelector(".popup__input_prof_name");
const jobInput = popupEditElement.querySelector(".popup__input_prof_job");

const formCardElement = popupCardElement.querySelector(".popup__content");
const mestInput = popupCardElement.querySelector(".popup__input_card_name");// Воспользуйтесь инструментом .querySelector()
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

function render() {
  initialCards.forEach((element) => {
    //createCard(templateElement);
    getCard(element) //= element;
  });
};

function getCard(element) {
  const cardElement = createCard(element);
  cards.prepend(cardElement);
};

function createCard(element) {
  const templateElement = cardTemplate.content.cloneNode(true);
  templateElement.querySelector('.element__text').textContent = element.name;
  templateElement.querySelector('.element__mask-group').src = element.link;
  templateElement.querySelector('.element__mask-group').alt = element.name;
  
  templateElement.querySelector('.element__vector').addEventListener('click',function(evt) {
      evt.target.classList.toggle('element__vector_active');
  });
    templateElement.querySelector('.element__remove-button').addEventListener('click',function(evt) {
      evt.target.closest('.element').remove();
  });
    templateElement.querySelector('.element__mask-group').addEventListener("click", function(event) {
      popupOpenImageElement(element.link, element.name)
  });
    return templateElement;
}; 
render();

function toggleModal (popupElement) {
  popupElement.classList.toggle('popup_opened');

  //popupElement.querySelector('.popup__close').addEventListener('click',function(evt) {
    //evt.target.closest('.popup_opened');
    //popupElement.classList.remove('popup_opened');
}//)
// function closePopup (evt) {
//   evt.target.closest('.popup_opened');
//   popupElement.classList.remove('popup_opened');
// } 


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
};

formElement.addEventListener('submit', formSubmitHandler);
formCardElement.addEventListener('submit', formSubmitCards);


  popupOpenButtonElement.addEventListener("click", function() {
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
  
    toggleModal(popupEditElement);
  });
  
  popupAddButtonElement.addEventListener("click", function (){
    toggleModal(popupCardElement);
  });


  cloceButtonProfil.addEventListener("click", function (){
    toggleModal(popupEditElement);
  });
  cloceButtonCard.addEventListener("click", function (){
    toggleModal(popupCardElement);
  });
  cloceButtonImage.addEventListener("click", function (){
    toggleModal(popupImageElement);
  });