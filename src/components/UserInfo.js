export default class UserInfo {
    constructor({nameProfile, jobProfile}) {
        this._nik = nameProfile;
        this._job = jobProfile;
    }

    getUserInfo() {
        const userInfo = {
            nik: this._nik.textContent,
            job: this._job.textContent
        }
        
        return userInfo
    }

    setUserInfo(userInfo) {
        this._nik.textContent = userInfo.nik;
         this._job.textContent = userInfo.job;
    }
}