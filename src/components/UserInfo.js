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

    setUserInfo() {
        this._job.textContent =  job.value;
        this._nik.textContent =   nik.value; 
    }
}