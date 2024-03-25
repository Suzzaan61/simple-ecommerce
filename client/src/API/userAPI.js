import API from ".";

export const CreateUserAPI = async (username, email, password, confirmPassword)=>{
    await API.post("/auth/sign-up", {username, email, password, confirmPassword});
}

export const ValidateUserAPI = async (username, email, password, confirmPassword)=>{
    await API.post("/auth/sign-up", {username, email, password, confirmPassword});
}