export class UserInfo {
    constructor(nameInput, jobInput, nameProfile, jobProfile) {
        this._nik = nameInput;
        this._job = jobInput;
        this._nameProfile = nameProfile;
        this._jobProfile = jobProfile;
    }

    getUserInfo() {
        const userInfo = {
            nik: this._nik.textContent,
            job: this._job.textContent
        }
        
        return userInfo
    }

    setUserInfo() {
        this._nik.textContent = nameInput.value;
        this._job.textContent = jobInput.value;
    }
}