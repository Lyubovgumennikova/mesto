export class Popup {
    constructor(popupElement) {
        this._popupElement = popupElement;
    }

    setEventListeners() {
        this._popupElement
        .addEventListener("click", () => { 
            this._closePopup(); 
        });


    }

    openPopup() {
        this._popupElement.classList.add("popup_opened");
        document.addEventListener("keyup", closeByEscape);
    }
    
    closePopup() {
        this._popupElement.classList.remove("popup_opened");
        document.removeEventListener("keyup", closeByEscape);
    }
    
    _closeByEscape(evt) {
        if (evt.key === "Escape") {
        //const popup = document.querySelector(".popup_opened");
        this._closePopup();
        }
    }
    
}