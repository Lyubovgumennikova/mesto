import  Popup  from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupElement, {handleFormSubmit} ) {
        super(popupElement);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popupElement.querySelector(".popup__content");
        this._inputs = this._form.querySelectorAll(".popup__input");
        this._button = this._form.querySelector(".popup__submit-button");
    }

    setEventListeners() {
        super.setEventListeners();

        this._form.addEventListener('submit', (evt) => {
            this.renderLoading(true)
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            
        });
    }

    closePopup() {
        super.closePopup();
        this._form.reset();
    }

    _getInputValues() {
        const data = {}
        this._inputs.forEach(input => data[input.name] = input.value);
            return data;
    }

    renderLoading(isLoading, buttonText='Сохранить') {
        if (isLoading) {
            this._button.textContent = "Выполняется...";
        } else {
            this._button.textContent = buttonText;
        }
    }
}