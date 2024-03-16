import {useState} from "react";
import axios from "axios";
import {useNavigate, useNavigation} from "react-router-dom";
function SignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false);

    const inputHandler = (e) => {
        setFormData({...formData,[e.target.id ]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            setLoading(true);
            setError(null);

            // const response = await fetch(`http://localhost:8180/api/auth/sign-up`, {
            //     method: 'POST',
            //     headers:{'Content-Type':'application/json'},
            //     body: JSON.stringify(formData),
            // });
            // const data = await response.json();

            const baseURL = `http://localhost:8180/api/auth`;
            const res = await axios.post(`${baseURL}/sign-up`, formData);
            console.log(res);

            setLoading(false);
            if(res.status === 200){
                setError(false);
                navigate('/sign-in');
            } else{
                setError(true);
                return;
            }

        }catch(err){
            console.log(err);
        }
        console.log(formData);
    }

    return (
        <>
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="fullname"
                                id="username"
                                placeholder="Full Name"
                                onChange={inputHandler}
                            />

                            <input
                                type="email"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                id="email"
                                placeholder="Email"
                                onChange={inputHandler}
                            />

                            <input
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                id="password"
                                placeholder="Password"
                                onChange={inputHandler}
                            />
                            <input
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="confirmPassword"
                                id="confirmPassword"
                                placeholder="Confirm Password"
                                onChange={inputHandler}
                            />

                            <button
                                type="submit"
                                className="w-full  text-center py-3 rounded bg-slate-500 text-white hover:bg-slate-600 active:bg-slate-500 my-1"
                            >Create Account
                            </button>
                        </form>


                        <div className="text-center text-sm text-grey-dark mt-4">
                            By signing up, you agree to the
                            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Terms of Service
                            </a> and
                            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Privacy Policy
                            </a>
                        </div>
                    </div>

                    <div className="text-grey-dark mt-6">
                        Already have an account?
                        <a className="no-underline border-b border-blue text-blue" href="/sign-in">
                            Log in
                        </a>.
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUp;
