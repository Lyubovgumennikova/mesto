export default class Popup {
    constructor(popupElement) {
        this._popupElement = popupElement;
    }

    setEventListeners() {
        this._popupElement
        .addEventListener("click", (evt) => {
            if (evt.target.classList.contains('popup_opened')) {
                this.closePopup();
            }
            if (evt.target.classList.contains('popup__close')) {
                this.closePopup();
            }
        });
    }

    openPopup() {
        this._popupElement.classList.add("popup_opened");
        document.addEventListener("keyup", this._handleEscClose);
    }
    
    closePopup() {
        this._popupElement.classList.remove("popup_opened");
        document.removeEventListener("keyup", this._handleEscClose);
    }
    
    _handleEscClose(evt) {
        if (evt.key === "Escape") {
        //const popup = document.querySelector(".popup_opened");
        this._closePopup();
        }
    }
}