const popupElement = document.querySelectorAll(".popup"); 
const popupEditElement = document.querySelector(".popup_type_edit"); 
const popupCardElement = document.querySelector(".popup_type_new-card");
const popupImageElement = document.querySelector(".popup_type_image");

const popupOpenButtonElement = document.querySelector(".profile__button-edit");
const popupAddButtonElement = document.querySelector(".profile__button-add");
//const popupOpenImageElement = document.querySelector(".element__mask-group")
const deleteButtonElement = document.querySelector(".element__remove-button");
const cards = document.querySelector('.elements');
const cardTemplate = document.querySelector('.card-template');

const profilElement = document.querySelector(".profile");
let nameProfile = profilElement.querySelector(".profile__info-name");
let jobProfile = profilElement.querySelector(".profile__info-job");

let linkCard = document.querySelector(".element__mask-group");
//console.log(nameProfile.textContent);
//console.log(jobProfile);
let formElement = popupEditElement.querySelector(".popup__content");
let nameInput = popupEditElement.querySelector(".popup__input_prof_name");
let jobInput = popupEditElement.querySelector(".popup__input_prof_job");

let formCardElement = popupCardElement.querySelector(".popup__content");
let mestInput = popupCardElement.querySelector(".popup__input_card_name");// Воспользуйтесь инструментом .querySelector()
let cardInput = popupCardElement.querySelector(".popup__input_card_image");

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
  popupImageElement.querySelector(".popup__text-image").textContent = name;
  popupImageElement.querySelector(".popup__mask-group").src = link;
      toggleModal(popupImageElement);
}

function render() {
  for (let i = 0; i < initialCards.length; i++) {
    const element = initialCards[i];
    getCard(element) //= element;
  }
};

function getCard(element) {
  const cardElement = cardTemplate.content.cloneNode(true);
    cardElement.querySelector('.element__text').textContent = element.name;
    cardElement.querySelector('.element__mask-group').src = element.link;
    cardElement.querySelector('.element__vector').addEventListener('click',function(evt) {
      evt.target.classList.toggle('element__vector_active');
    } );
    cardElement.querySelector('.element__remove-button').addEventListener('click',function(evt) {
      evt.target.closest('.element').remove();
    } );
    cardElement.querySelector('.element__mask-group').addEventListener("click", function(event) {
      popupOpenImageElement(element.link, element.name)
    });
      
    cards.prepend(cardElement);
};
render()

function toggleModal (popupElement) {
  popupElement.classList.toggle('popup_opened');

  popupElement.querySelector('.popup__close').addEventListener('click',function(evt) {
    evt.target.closest('.popup_opened');
    popupElement.classList.remove('popup_opened');
})
//function closePopup (popupElement) {
  //popupElement.forEach  => {
   // popupElement.classList.remove('popup_opened');
  //}); 
  //popupElement.target.classList.toggle('popup_opened');

};

function formSubmitHandler (evt) {
    evt.preventDefault(popupEditElement);

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  
  toggleModal(popupEditElement);
};

function formSubmitCards (evt) {
  evt.preventDefault();
  let addInputCard = {
    name: mestInput.value,
    link: cardInput.value
  };
  getCard(addInputCard);
  toggleModal(popupCardElement);
};

formElement.addEventListener('submit', formSubmitHandler);

formCardElement.addEventListener('submit', formSubmitCards);
  const deletCard = function() {
    deleteButtonElement.closest ('.element__mask-group');
    deletCard.remove();
  };

  popupOpenButtonElement.addEventListener("click", function() {
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
  
    toggleModal(popupEditElement);
  });
  
  popupAddButtonElement.addEventListener("click", function (){
    toggleModal(popupCardElement);
  });