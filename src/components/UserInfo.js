export default class UserInfo {
    constructor({nameProfile, jobProfile}) {
        this._nik = nameProfile;
        this._job = jobProfile;
        // this._nameProfile = nameProfile;
        // this._jobProfile = jobProfile;
    }

    getUserInfo() {
        const userInfo = {
            nik: this._nik.textContent,
            job: this._job.textContent
        }
        
        return userInfo
    }

    setUserInfo() {
        const userInfo = {
            nik: this._nik.value,
            job: this._job.value
        // this._nik.textContent = nik;
        // this._job.textContent = job;
        }
        return userInfo
    }
}