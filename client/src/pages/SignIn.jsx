function SignIn() {
    return (
        <>
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Sign in</h1>

                        <input
                            type="email"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email"/>

                        <input
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password"/>

                        <button
                            type="submit"
                            className="w-full  text-center py-3 rounded bg-slate-500 text-white hover:bg-slate-600 active:bg-slate-500  my-1"
                        >Login
                        </button>

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
