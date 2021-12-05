const popupImageElement = document.querySelector(".popup_type_image");
const imageTextPopup = popupImageElement.querySelector(".popup__text-image");
const imageCardPopup = popupImageElement.querySelector(".popup__mask-group");

export class Card {
  constructor(data, cardSelector, openPopup) {
    this._link = data.link;
    this._name = data.name;
    this._cardSelector = cardSelector;
    this._openPopup = openPopup;
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
    this._cardImage = this._element.querySelector(".element__mask-group");
    this._cardText = this._element.querySelector(".element__text");
    this._likeButton = this._element.querySelector(".element__vector");
    this._setEventListeners();
    // Добавим данные
    this._cardImage.src = this._link;
    this._cardImage.alt = this._link;
    this._cardText.textContent = this._name;
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

    this._likeButton
      .addEventListener("click", () => {
        this._likeClick();
    });

    this._element
      .querySelector(".element__remove-button")
      .addEventListener("click", () => {
        this._deleteClick();
    });
  }

  _likeClick() {
    this._likeButton
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
    this._openPopup(popupImageElement)
  }
}
