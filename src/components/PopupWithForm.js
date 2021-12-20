import  Popup  from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupElement, {handleFormSubmit} ) {
        super(popupElement);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popupElement.querySelector(".popup__content");
        this._inputs = this._form.querySelectorAll(".popup__input");
    }

    setEventListeners() {
        super.setEventListeners();

        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        
        this._handleFormSubmit(this._getInputValues());
        //    this._form.reset();
        });
    }

    closePopup() {
        super.closePopup();
        this._inputs.forEach((input) => {
            input.value = "";
        })
        this._form.reset();
    }

    _getInputValues() {
        const data = {}
        this._inputs.forEach(input => data[input.name] = input.value);
    
        return data;
    }
}