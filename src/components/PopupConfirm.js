import  Popup  from "./Popup.js";

export default class PopupConfirm extends Popup {
    constructor(popupElement, {handleFormSubmit} ) {
        super(popupElement);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popupElement.querySelector(".popup__content");
    }
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault(),
        
            this._handleFormSubmit(this.data)
        });
    }
}