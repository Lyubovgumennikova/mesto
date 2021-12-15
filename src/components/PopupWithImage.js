const popupImageElement = document.querySelector(".popup_type_image");
const imageTextPopup = popupImageElement.querySelector(".popup__text-image");
const imageCardPopup = popupImageElement.querySelector(".popup__mask-group");

//import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupElement) {
        super(popupElement);
    }

    setEventListeners() {
        this._cardImage
        .addEventListener("click", () => { 
            this._handleOpenPopup(); 
        }); 
        
    }

    handleCardClick() {
        imageCardPopup.src = this._link;
        imageCardPopup.alt = this._link;
        imageTextPopup.textContent = this._name;
        super.openPopup();
    }
}