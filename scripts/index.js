// Находим форму в DOM
const popupElement = document.querySelector('.popup');// Воспользуйтесь методом querySelector()
const popupCloseButtonElement = popupElement.querySelector('.popup__close'); 
const popupOpenButtonElement = document.querySelector('.profile__button-edit');

const togglePopupVisibiliti = function () {
    popupElement.classList.toggle('popup_is-opened');
}
//togglePopupVisibiliti();

popupOpenButtonElement.addEventListener('click', togglePopupVisibiliti);
popupCloseButtonElement.addEventListener('click', togglePopupVisibiliti);
// popup_is-opened
// Находим поля формы в DOM
//let nameInput = // Воспользуйтесь инструментом .querySelector()
//let jobInput = // Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
//function formSubmitHandler (evt) {
//    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
//}

console.log(togglePopupVisibiliti);
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
//formElement.addEventListener('submit', formSubmitHandler); 