export default class UserInfo {
    constructor({nameProfile, jobProfile, avatarProfile}) {
        this._nik = nameProfile;
        this._job = jobProfile;
        this._avatar = avatarProfile;
    }

    getUserInfo() {
        const userInfo = {
            nik: this._nik.textContent,
            job: this._job.textContent
        }
        
        return userInfo
    }

    setUserInfo(userInfo) {
        this._nik.textContent = userInfo.name;
        this._job.textContent = userInfo.about;
        this._avatar.src = userInfo.avatar;
    }
}