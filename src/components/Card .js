export class Card {
  constructor(data, {handleCardClick, handleDeleteIconClick}, cardSelector, userId)  {
    this._link = data.link;
    this._name = data.name;
    this._cardId = data._id;
    this._ownerId = data.owner._id;
    this._likes = data.likes;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteIconClick = handleDeleteIconClick;
    this._userId =  userId;
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
    this._deleteButton = this._element.querySelector(".element__remove-button");
    this._setEventListeners();
    // Добавим данные
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardText.textContent = this._name;
    // Вернём элемент наружу
    return this._element;
  }
  
  _setEventListeners() {
    this._cardImage
      .addEventListener("click", this._handleCardClick);  
    
    this._likeButton
      .addEventListener("click", () => {
        this._likeClick();
    });

    if (this._ownerId === this._userId) {
      this._deleteButton.classList.add("element__remove-button_active");
      this._deleteButton.addEventListener("click", () =>
      this._handleDeleteIconClick(this)
      // this._deleteClick()
      );
    }
  }

  _likeClick() {
    this._likeButton
      .classList.toggle("element__vector_active");
  }

  deleteClick(card) {
    card.remove();
    this._element = null;
    // card = null;
    // const data = {
    //   card: this._element,
    //   cardId: this._cardId,
    // };
    // this._handleDeleteIconClick(data);
  }
}
