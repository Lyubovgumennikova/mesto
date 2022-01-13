import  Popup  from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupElement) {
        super(popupElement);
        this._link = this._popupElement.querySelector(".popup__mask-group");
        this._name = this._popupElement.querySelector(".popup__text-image");
        
    }

    openPopup(data) {
        super.openPopup();
        this._link.src = data.link;
        this._link.alt = data.name;
        this._name.textContent = data.name;
    }
}