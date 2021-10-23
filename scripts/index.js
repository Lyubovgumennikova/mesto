const popupElement = document.querySelector(".popup");
const popupCloseButtonElement = popupElement.querySelector(".popup__close");
const popupOpenButtonElement = document.querySelector(".profile__button-edit");

const openPopup = function (){
  popupElement.classList.add('popup_opened')
};

const closePopup = function (){
  popupElement.classList.remove('popup_opened');
  nameInput.value = "Жак-Ив Кусто";
  jobInput.value = "Исследователь океана";
};


const profilElement = document.querySelector(".profile");
let nameProfile = profilElement.querySelector(".profile__info-name");
let jobProfile = profilElement.querySelector(".profile__info-job");
//console.log(nameProfile.textContent);
//console.log(jobProfile);
let formElement = popupElement.querySelector(".popup__content");// Воспользуйтесь методом querySelector()
let nameInput = popupElement.querySelector(".popup__input_prof_name");// Воспользуйтесь инструментом .querySelector()
let jobInput = popupElement.querySelector(".popup__input_prof_job");// Воспользуйтесь инструментом .querySelector()
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault();

  //let inputName = nameInput.value;
  //let inputJob = jobInput.value; 
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  
  closePopup ();
};

formElement.addEventListener('submit', formSubmitHandler);

popupOpenButtonElement.addEventListener("click", openPopup);
popupCloseButtonElement.addEventListener("click", closePopup);