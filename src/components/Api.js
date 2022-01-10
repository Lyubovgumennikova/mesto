export default class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    _errorHandler(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }

    getInitialCards() {  //     •	получить список всех карточек в виде массива (GET)
        return fetch(`${this._url}cards`, {
            method: "GET",
            headers: this._headers,
        }).then((res) => this._errorHandler(res));
    }

    addNewCard(data) {  //   •	добавить карточку (POST)
        return fetch(`${this._url}cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link,
                    
                }),
        }).then((res) => this._errorHandler(res));
    }

    deleteCard(data) { // •	удалить карточку (DELETE)
        return fetch(`${this._url}cards/${data._cardId}`, {
            method: "DELETE",
            headers: this._headers,
            
        }).then((res) => this._errorHandler(res));
    }

    getUserInfo() {    //получить данные пользователя (GET)
        return fetch(`${this._url}users/me`, {
            method: "GET",
            headers: this._headers,
        }).then((res) => {
            return res.json();
        });
    }

    editProfile(data) {// •	заменить данные пользователя (PATCH)
        return fetch(`${this._url}users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: data.nik,
                about: data.job,
            }),
        }).then((res) => this._errorHandler(res));
    }

    editAvatar(data) {  // •	заменить аватар (PATCH)
        return fetch(`${this._url}users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar,
            }),
        }).then((res) => this._errorHandler(res));
    }
    
    addCardLike(data) { // •	“залайкать” карточку (PUT)
        return fetch(`${this._url}cards/${data._cardId}/likes`, {
            method: "PUT",
            headers: this._headers,
            
        }).then((res) => this._errorHandler(res));
    }

    deleteCardLike(data) { // •	удалить лайк карточки (DELETE)
        return fetch(`${this._url}cards/${data._cardId}/likes`, {
            method: "DELETE",
            headers: this._headers,
            
        }).then((res) => this._errorHandler(res));
    }
  // Это лишь минимальный список методов. помимо них вы можете написать вспомогательные методы. 
//   Например метод, который отдаст промис, ожидающий исполнение нескольких методов класса (например, 
//     подумайте какие методы надо исполнить прежде чем начать отрисовку и прочее на странице, и можете 
//     посмотрите в сторону Promise.all - https://yadi.sk/d/llP56OMEAOKMVg)
}