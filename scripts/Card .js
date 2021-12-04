//import { openPopup } from "./index.js";
const popupImageElement = document.querySelector(".popup_type_image");
const imageTextPopup = popupImageElement.querySelector(".popup__text-image");
const imageCardPopup = popupImageElement.querySelector(".popup__mask-group");

export class Card {
  constructor(data, cardSelector) {
    this._link = data.link;
    this._name = data.name;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    // забираем разметку из HTML и клонируем элемент
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    // вернём DOM-элемент карточки
    return cardElement;
  }

  generateCard() {
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
    this._element
      .querySelector(".element__mask-group")
      .addEventListener("click", () => {
        this._handleOpenPopup(popupImageElement);
      });

    this._element
      .querySelector(".element__vector")
      .addEventListener("click", () => {
        this._likeClick();
      });

    this._element
      .querySelector(".element__remove-button")
      .addEventListener("click", () => {
        this._deleteClick();
      });
  }

  _clocePopupClickByEsc() {
    this._element
      .querySelector(".popup_opened")
      .classList.remove("popup_opened");
  }

  _likeClick() {
    this._element
      .querySelector(".element__vector")
      .classList.toggle("element__vector_active");
  }

  _deleteClick() {
    this._element.closest(".element").remove();
    this._element = null;
  }

  _handleOpenPopup() {
    imageCardPopup.src = this._link;
    imageCardPopup.alt = this._link;
    imageTextPopup.textContent = this._name;
    popupImageElement.classList.add("popup_opened");
  }
}
