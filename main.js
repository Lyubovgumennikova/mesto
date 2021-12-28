(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._link=e.link,this._name=e.name,this._cardSelector=n,this._handleCardClick=r}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".element__mask-group"),this._cardText=this._element.querySelector(".element__text"),this._likeButton=this._element.querySelector(".element__vector"),this._setEventListeners(),this._cardImage.src=this._link,this._cardImage.alt=this._link,this._cardText.textContent=this._name,this._element}},{key:"_setEventListeners",value:function(){var e=this;this._cardImage.addEventListener("click",this._handleCardClick),this._likeButton.addEventListener("click",(function(){e._likeClick()})),this._element.querySelector(".element__remove-button").addEventListener("click",(function(){e._deleteClick()}))}},{key:"_likeClick",value:function(){this._likeButton.classList.toggle("element__vector_active")}},{key:"_deleteClick",value:function(){this._element.remove(),this._element=null}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._validateForm=n}var t,r;return t=e,(r=[{key:"enableValidation",value:function(){this._submitButton=this._validateForm.querySelector(this._submitButtonSelector),this._inputList=Array.from(this._validateForm.querySelectorAll(this._inputSelector)),this._setEventListeners()}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButton(),this._inputList.forEach((function(t){t.addEventListener("input",(function(t){e._handleFieldValidation(t),e._toggleButton()}))}))}},{key:"_handleFieldValidation",value:function(e){var t=e.target,n=this._validateForm.querySelector("#".concat(t.id,"-error"));t.validity.valid?(t.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass)):(t.classList.add(this._inputErrorClass),t.classList.add(this._errorClass)),n.textContent=t.validationMessage}},{key:"_toggleButton",value:function(){var e=!this._validateForm.checkValidity();this._submitButton.disabled=e,this._submitButton.classList.toggle(this._inactiveButtonClass,e)}},{key:"resetValidation",value:function(){var e=this;this._toggleButton(),this._inputList.forEach((function(t){var n=e._validateForm.querySelector("#".concat(t.id,"-error"));t.classList.remove(e._inputErrorClass),n.classList.remove(e._errorClass),n.textContent=""}))}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e.addItem(t)}))}},{key:"addItem",value:function(e){var t=this._renderer(e);this._container.prepend(t)}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=t,this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("click",(function(t){t.target.classList.contains("popup_opened")&&e.closePopup(),t.target.classList.contains("popup__close")&&e.closePopup()}))}},{key:"openPopup",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEscClose)}},{key:"closePopup",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.closePopup()}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(){return s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=p(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},s.apply(this,arguments)}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function y(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&f(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y(this,e)});function a(e,t){var n,r=t.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleFormSubmit=r,n._form=n._popupElement.querySelector(".popup__content"),n._inputs=n._form.querySelectorAll(".popup__input"),n}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;s(d(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"closePopup",value:function(){s(d(a.prototype),"closePopup",this).call(this),this._form.reset()}},{key:"_getInputValues",value:function(){var e={};return this._inputs.forEach((function(t){return e[t.name]=t.value})),e}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=b(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},v.apply(this,arguments)}function b(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function k(e,t){return k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},k(e,t)}function g(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&k(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._link=t._popupElement.querySelector(".popup__mask-group"),t._name=t._popupElement.querySelector(".popup__text-image"),t}return t=a,(n=[{key:"openPopup",value:function(e){v(w(a.prototype),"openPopup",this).call(this),this._link.src=e.link,this._link.alt=e.text,this._name.textContent=e.text}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t){var n=t.nameProfile,r=t.jobProfile;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nik=n,this._job=r}var t,n;return t=e,n=[{key:"getUserInfo",value:function(){return{nik:this._nik.textContent,job:this._job.textContent}}},{key:"setUserInfo",value:function(e){this._nik.textContent=e.nik,this._job.textContent=e.job}}],n&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"getInitialCards",value:function(){return fetch(this._url,{method:"GET",headers:this._headers})}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),O=document.querySelector(".popup_type_edit"),L=document.querySelector(".popup_type_new-card"),q=document.querySelector(".profile__button-edit"),x=document.querySelector(".profile__button-add"),B=document.querySelector(".elements"),I=document.querySelector(".profile"),R=I.querySelector(".profile__info-name"),T=I.querySelector(".profile__info-job"),F=O.querySelector(".popup__content"),V=O.querySelector(".popup__input_prof_name"),A=O.querySelector(".popup__input_prof_job"),D=L.querySelector(".popup__content"),U=document.querySelector(".popup_type_image"),z={};new P({url:"https://mesto.nomoreparties.co/v1/cohort-33/",headers:{Authorization:"be382cad-ad48-4296-8278-8fad1d3ee484","content-type":"application/json"}}).getInitialCards();var G,M=function(e){var t={link:e.target.src,text:e.target.closest(".element").querySelector(".element__text").textContent};N.openPopup(t)},N=new S(U),H=new j({nameProfile:R,jobProfile:T}),J=new i({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){return new t(e,".card-template",M).generateCard()}},B),K=new _(O,{handleFormSubmit:function(e){H.setUserInfo(e),K.closePopup()}}),Q=new _(L,{handleFormSubmit:function(e){J.addItem(e),Q.closePopup()}});x.addEventListener("click",(function(){Q.openPopup(),z[D.name].resetValidation()})),q.addEventListener("click",(function(){var e=H.getUserInfo();V.value=e.nik,A.value=e.job,K.openPopup(O),z[F.name].resetValidation()})),K.setEventListeners(),Q.setEventListeners(),N.setEventListeners(),J.renderItems(),G={formSelector:".popup__content",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},Array.from(document.querySelectorAll(G.formSelector)).forEach((function(e){var t=new r(G,e);z[e.name]=t,t.enableValidation()}))})();