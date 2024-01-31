//isLogedIn
export const isLogedIn = () => {
    let data = localStorage.getItem("data");
    if (data != null) return true;
        else return false;
}

//doLogin => data => set the local storage
export const doLogin = (data,next) => {
    console.log("data");
    console.log(data);
    localStorage.setItem("data", JSON.stringify(data));
    // localStorage.setItem("data", data);
    next()
}

//doLogout => remove from local storage
export const doLogout = (next) => {
    localStorage.removeItem("data");
    next()
}

//get Current user
export const getCurrentUserDetails = () => {
    if (isLogedIn()) {
        return JSON.parse(localStorage.getItem("data"))?.user;
    }else{
        return undefined;
    }
}

//get Current user token
export const getToken = () => {
    if (isLogedIn()) {
        return JSON.parse(localStorage.getItem("data"))?.token;
    }else{
        return null;
    }
}