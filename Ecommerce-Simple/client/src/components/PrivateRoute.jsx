import {Navigate, Outlet} from "react-router-dom";

const PrivateRoute = () => {
    const currentUser = JSON.parse(localStorage.getItem("user"));
    return currentUser ? (<Outlet/>) :<Navigate to={"/sign-in"}/>
}

export default PrivateRoute;
