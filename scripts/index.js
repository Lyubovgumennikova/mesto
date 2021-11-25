const popupEditElement = document.querySelector(".popup_type_edit");
const popupCardElement = document.querySelector(".popup_type_new-card");
const popupImageElement = document.querySelector(".popup_type_image");

const popupOpenButtonElement = document.querySelector(".profile__button-edit");
const popupAddButtonElement = document.querySelector(".profile__button-add");
const deleteButtonElement = document.querySelector(".element__remove-button");

const cloceButtonProfil = popupEditElement.querySelector(".popup__close_type_edit");
const cloceButtonCard = popupCardElement.querySelector(".popup__close_type_new-card");
const cloceButtonImage = popupImageElement.querySelector(".popup__close_type_image");

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

class Card {
  constructor(data, cardSelector) {
    this._link = data.link;
    this._name = data.name;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    // забираем разметку из HTML и клонируем элемент
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector(".element")
      .cloneNode(true);
    // вернём DOM-элемент карточки
    return cardElement;
  }

  generateCard() {
    // Запишем разметку в приватное поле _element.
    // Так у других элементов появится доступ к ней.
    this._element = this._getTemplate();
    this._setEventListeners();
    // Добавим данные
    this._element.querySelector(".element__mask-group").src = this._link;
    this._element.querySelector(".element__mask-group").alt = this._link;
    this._element.querySelector(".element__text").textContent = this._name;

    // Вернём элемент наружу
    return this._element;
  }
  // добавляtv все обработчики в одном месте (слушатели)
  _setEventListeners() {
    this._element.querySelector(".element__mask-group").addEventListener("click", () => {
      this._handleOpenPopup();
    });
    // popupCloseButton.addEventListener("click", () => {
    //   this._handleClosePopup();
    // });

    this._element.querySelector('.element__vector').addEventListener("click", () => {
      this._like()
    });

    this._element.querySelector('.element__remove-button').addEventListener("click", () => {
      this._element.closest('.element').remove();
    });

    // horizontalCardButton.addEventListener("click", () => {
    //   renderElements(false);
    // });
  }
    // templateElement.querySelector('.element__vector').addEventListener('click',function(evt) {
    //         evt.target.classList.toggle('element__vector_active');
    //     });

        _like() {
          this._element.querySelector('.element__vector').classList.toggle('element__vector_active');
        }
        
        _handleOpenPopup() {
          imageCardPopup.src = this._link;
          imageCardPopup.alt = this._link;
          imageTextPopup.textContent = this._name;
          popupImageElement.classList.add('popup_opened');
        }
}

initialCards.forEach((element) => {
  // Создадим экземпляр карточки
  const card = new Card(element, '.card-template');
  // Создаём карточку и возвращаем наружу
  const cardElement = card.generateCard();

  // Добавляем в DOM
  cards.append(cardElement);
});

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

function submitCardsForm(evt) {
  evt.preventDefault();
  const addInputCard = {
    name: mestInput.value,
    link: cardInput.value,
  };
  renderCard(addInputCard);
  closePopup(popupCardElement);
  mestInput.value = "";
  cardInput.value = "";
  toggleButton(formCardElement, config);
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
