export class Card {
  constructor(data, {handleCardClick, handleLikeClick, handleDeleteIconClick}, cardSelector, userId)  {
    this._data = data;
    this._link = data.link;
    this._name = data.name;
    this._cardId = data._id;
    this._ownerId = data.owner._id;
    this._likes = data.likes.length;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
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
    this._likesContainer = this._element.querySelector(".element__vector-container");
    this._isLiked = this._likeButton.classList.contains("element__vector_active")
    this._setEventListeners();
    // Добавим данные
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardText.textContent = this._name;
    this._likesContainer.textContent = this._likes;
    this._buttonlikes();
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
      );
    }
  }

  isLiked() {
    if (this._likeButton.classList.contains("element__vector_active")) {
      return true
    }
  }

  _likeClick() {
    this._handleLikeClick(this)
    .then((res) =>  {
      this._likesContainer.textContent = res.likes.length },
      this._likeButton.classList.toggle("element__vector_active")
    ).catch((err) => alert(err));
  }

  deleteClick(card) {
    card.remove();
    this._element = null;
  }

  _buttonlikes() {
    if (this._data.likes.some(elem => elem._id === this._userId)) {
      this._likeButton.classList.add("element__vector_active");
    }
  }
}
