const popupEditElement = document.querySelector(".popup_type_edit"); //popupEditElement
const popupCardElement = document.querySelector(".popup_type_new-card");

const popupCloseButtonElement = popupEditElement.querySelector(".popup__close");
const popupOpenButtonElement = document.querySelector(".profile__button-edit");
const popupAddButtonElement = document.querySelector(".profile__button-add");


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

const cards = document.querySelector('.elements');
const cardTemplate = document.querySelector('.card-template');

function render() {
  for (let i = 0; i < initialCards.length; i++) {
    const element = initialCards[i];
    renderItem(element);
  }
};

function renderItem(element) {
  const cardElement = cardTemplate.content.cloneNode(true);
    cardElement.querySelector('.element__text').textContent = element.name;
    cardElement.querySelector('.element__mask-group').src = element.link;

  cards.prepend(cardElement);
};
render()

const profilElement = document.querySelector(".profile");
let nameProfile = profilElement.querySelector(".profile__info-name");
let jobProfile = profilElement.querySelector(".profile__info-job");
//console.log(nameProfile.textContent);
//console.log(jobProfile);
let formElement = popupEditElement.querySelector(".popup__content");// Воспользуйтесь методом querySelector()
let nameInput = popupEditElement.querySelector(".popup__input_prof_name");// Воспользуйтесь инструментом .querySelector()
let jobInput = popupEditElement.querySelector(".popup__input_prof_job");// Воспользуйтесь инструментом .querySelector()

const openProfPopup = function (){
  popupEditElement.classList.add('popup_opened');
  
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
};

const openCardPopup = function (){
  popupCardElement.classList.add('popup_opened');
  
  //nameInput.value = nameProfile.textContent;
  //jobInput.value = jobProfile.textContent;
};

const closeProfPopup = function (){
  popupEditElement.classList.remove('popup_opened');
};

const closeCardPopup = function (){
  popupCardElement.classList.remove('popup_opened');
};

function formSubmitHandler (evt) {
    evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  
  closeProfPopup ();
};

formElement.addEventListener('submit', formSubmitHandler);

popupOpenButtonElement.addEventListener("click", openProfPopup);
popupAddButtonElement.addEventListener("click", openCardPopup);
popupCloseButtonElement.addEventListener("click", closeProfPopup);

