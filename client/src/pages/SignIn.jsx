import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


function SignIn() {
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


        const formDataHandler = (e)=>{
            e.preventDefault()
            setData({...data, [e.target.id]: e.target.value});
            console.log(data);
        }

        const submitHandler =  async (e)=>{
            try{
                e.preventDefault();
                setLoading(true);
                setError(false);
                const baseURL = `http://localhost:8180/api/auth`;
                const res = await axios.post(`${baseURL}/sign-in`, data);
                setLoading(false);
                if(res.status === 200){
                    navigate("/");
                }
                console.log(res);
                setLoading(false);
                setError(null);

            } catch (err){
                setLoading(false);
                setError(err.response.data.error);
                console.log(err.response.data.error);
            }

        }




    return (
        <>
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">

                        <h1 className="mb-8 text-3xl text-center">Sign in</h1>
                        <form onSubmit={submitHandler}>
                            <input
                                type="email"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                id="email"
                                onChange={formDataHandler}
                                placeholder="Email"/>

                            <input
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                id="password"
                                onChange={formDataHandler}
                                placeholder="Password"/>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full  text-center py-3 rounded bg-slate-500 text-white hover:bg-slate-600 active:bg-slate-500  my-1"
                            >
                                {loading ? "Loading..." : "Login"}
                            </button>
                        </form>
                        <p className={'text-red-500 text-center'}>{error ? error : ""}</p>
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
                    Dont have an account?
                        <a className="no-underline border-b border-blue text-blue" href="/sign-up">Sign Up
                        </a>.
                    </div>


                </div>
            </div>
        </>
    );
}

export default SignIn;
