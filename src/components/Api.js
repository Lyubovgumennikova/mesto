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

    getInitialCards() {
    //     •	получить список всех карточек в виде массива (GET)
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
  // •	удалить карточку (DELETE)
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
  // •	заменить аватар (PATCH)
  // •	“залайкать” карточку (PUT)
  // •	удалить лайк карточки (DELETE)
  // Это лишь минимальный список методов. помимо них вы можете написать вспомогательные методы. Например метод, который отдаст промис, ожидающий исполнение нескольких методов класса (например, подумайте какие методы надо исполнить прежде чем начать отрисовку и прочее на странице, и можете посмотрите в сторону Promise.all - https://yadi.sk/d/llP56OMEAOKMVg)
}