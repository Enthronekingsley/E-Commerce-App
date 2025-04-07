import {useState} from "react";


const Login = () => {
    const [currentState, setCurrentState] = useState<string>("Sign Up")

    const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <form
            onSubmit={onSubmitHandler}
            className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
        >
            <div className="inline-flex items-center gap-2 mb-2 mt-10">
                <p className="prata-regular text-3xl">{currentState}</p>
                <hr className="h-[1.5px] w-8 bg-gray-800" />
            </div>

            {
                currentState === "Login" ? (
                    ""
                ) : (
                    <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-800"
                        placeholder="Name"
                        required
                    />
                )
            }
            <input
                type="email"
                className="w-full px-3 py-2 border border-gray-800"
                placeholder="Email"
                required
            />
            <input
                type="password"
                className="w-full px-3 py-2 border border-gray-800"
                placeholder="Password"
                required
            />

            <div className="w-full flex justify-between text-sm mt-[-8px]">
                <p>Forgot your password?</p>
                {
                    currentState === "Login" ? (
                        <p
                            className="cursor-pointer hover:underline"
                            onClick={() => setCurrentState("Sign Up")}
                        >
                            Create Account
                        </p>
                    ) : (
                        <p
                            className="cursor-pointer hover:underline"
                            onClick={() => setCurrentState("Login")}
                        >
                            Login Here
                        </p>
                    )
                }
            </div>
            <button
                type="submit"
                className="bg-black text-white font-light py-2 px-8 mt-4 rounded cursor-pointer active:bg-gray-700"
            >
                {currentState === "Login" ? "Sign In" : "Sign Up"}
            </button>
        </form>
    )
}
export default Login;