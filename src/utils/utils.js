export const renderLoading = (popup, isLoading ) => {
    const currentActiveButton = popup.querySelector(`.popup__submit-button`);
    if (isLoading) {
        currentActiveButton.textContent = "Выполняется...";
    } else {
        currentActiveButton.textContent = 'Сохранить';
    }
};
