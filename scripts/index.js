const popupElement = document.querySelectorAll(".popup"); 
const popupEditElement = document.querySelector(".popup_type_edit"); //popupEditElement
const popupCardElement = document.querySelector(".popup_type_new-card");
const cardElement = document.querySelector(".element");

//const popupCloseButtonElement = document.querySelector(".popup__close");
const popupOpenButtonElement = document.querySelector(".profile__button-edit");
const popupAddButtonElement = document.querySelector(".profile__button-add");
const deleteButtonElement = document.querySelector(".element__remove-button");

const profilElement = document.querySelector(".profile");
let nameProfile = profilElement.querySelector(".profile__info-name");
let jobProfile = profilElement.querySelector(".profile__info-job");
//console.log(nameProfile.textContent);
//console.log(jobProfile);
let formElement = popupEditElement.querySelector(".popup__content");// Воспользуйтесь методом querySelector()
let nameInput = popupEditElement.querySelector(".popup__input_prof_name");// Воспользуйтесь инструментом .querySelector()
let jobInput = popupEditElement.querySelector(".popup__input_prof_job");//


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

  cards.prepend(cardElement);
};
render()


function openPopup (popupElement) {
  popupElement.classList.toggle('popup_opened');

  popupElement.querySelector('.popup__close').addEventListener('click',function(evt) {
    evt.target.closest('.popup_opened');
    popupElement.classList.toggle('popup_opened');
  //popupElement.querySelector('.popup__close').addEventListener('click',function(popupElement) {
    //popupElement.target.classList.toggle('popup_opened');
  
  //popupElement.classList.toggle('popup_opened');
  //});
})
//function closePopup (popupElement) {
  //popupElement.forEach  => {
   // popupElement.classList.remove('popup_opened');
  //}); 
  //popupElement.target.classList.toggle('popup_opened');

}

popupOpenButtonElement.addEventListener("click", function() {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
 
   openPopup(popupEditElement);
});

popupAddButtonElement.addEventListener("click", function (){
  openPopup(popupCardElement);
  
  //nameInput.value = nameProfile.textContent;
  //jobInput.value = jobProfile.textContent;
});

//const closeProfPopup = function (){
 // popupEditElement.classList.remove('popup_opened');
//};

//const closeCardPopup = function (){
//  popupCardElement.classList.remove('popup_opened');
//};

function formSubmitHandler (evt) {
    evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  
  openPopup();
};
formElement.addEventListener('submit', formSubmitHandler);




  const deletCard = function() {
    deleteButtonElement.closest ('.element__mask-group');
    deletCard.remove();
  };



//popupOpenButtonElement.addEventListener("click", openPopup);
//popupAddButtonElement.addEventListener("click", openCardPopup);
//popupCloseButtonElement.addEventListener("click", closePopup);
//popupCloseButtonElement.addEventListener("click", openPopup);
//deleteButtonElement.addEventListener('click', deletCard);
