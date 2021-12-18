import  Popup  from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupElement, { formSubmitCallBack }) {
        super(popupElement);
        this._formSubmitCallBack = formSubmitCallBack;
        this._form = this._popupElement.querySelector(".popup__content");
        //this._submit = this._submit.bind(this);
    }

    setEventListeners() {
        super.setEventListeners();
        //this._formSubmitCallBack.addEventListener("submit", submitProfileForm);
    }

    closePopup() {
        super.closePopup();
        //Input.value = "";
       // cardInput.value = "";
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