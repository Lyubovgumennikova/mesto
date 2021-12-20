import  Popup  from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupElement, {handleFormSubmit} ) {
        super(popupElement);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popupElement.querySelector(".popup__content");
        this._inputs = this._form.querySelectorAll(".popup__input");
        //this._submit = this._submit.bind(this);
    }

    setEventListeners() {
        super.setEventListeners();

        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        
           this._handleFormSubmit();  //this._getInputValues()
        
            this._form.reset();
        });
    }

    closePopup() {
        super.closePopup();
        this._inputs.forEach((input) => {
            input.value = "";
        })
        this._form.reset();
    }

    // function submitProfileForm(evt) {
    //     evt.preventDefault(popupEditElement);
    
    //     nameProfile.textContent = nameInput.value;
    //     jobProfile.textContent = jobInput.value;
    //     closePopup(popupEditElement);
    // }

    _getInputValues() {
        this._add
        .addEventListener("click", function () {
            openPopup();
            formValidators[ formCardElement.name ].resetValidation();
        });

    }
}