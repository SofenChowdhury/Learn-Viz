// import { myAxios } from "./helper";

export const data = 
{
    id:"1",
    name:"test",
    email:"test@gmail.com",
    password:"123",
    about:"test"
}   
export const error = 
{
    name:"invalid name",
    email:"invalid email",
    password:"invalid password",
    about:"invalid about"
}  
// console.log("data");
// console.log(data);

export const signUp = (user) => {
    //From backend API handle cross origine
    return ((user.email === data.email) ? ({"status":200, "error":"","message":"suceess"}) : ({"status":401,"error":error,"message":"invalid"}));
    // return myAxios
    //     .post("signup",user)
    //     .then((response) => response.data);
};

export const login = (loginDetail) => {
    return ((loginDetail.email === data.email) ? ({"status":200, "error":"","message":"success ggg", "token":encodeURI(data), "user":data}) : ({"status":401,"error":error,"message":"invalid"}));
    // return myAxios
    //     .post("login", loginDetail)
    //     .then((response)=> response.data);
}