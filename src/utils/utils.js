export const renderLoading = (popup, isLoading ) => {
    // popup = document.querySelector(`.popup_opened`);
    const currentActiveButton = popup.querySelector(`.popup__submit-button`);
    if (isLoading) {
        currentActiveButton.textContent = "Выполняется...";
    } else {
        currentActiveButton.textContent = 'Сохранить'; //preg_match('/<button>([^<]*)<\/button>/', $text, $matches); //
        
        // currentActiveButton.textContent = currentActiveButton.innerHTML
        // currentActiveButton.textContent = null
        // currentActiveButton.textContent = currentActiveButton.insertAdjacentHTML(afterbegin, text);
        // currentActiveButton.outerHTML = ''
    }
};
