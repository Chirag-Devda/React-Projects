import { Link, useNavigate, useNavigation } from "react-router-dom";
import useData from "../../hooks/useData.jsx";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/FirebaseConfig.jsx";
import { useState } from "react";
import { toast } from "react-toastify";
import { Loader } from "../../components/index.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, setLoading } = useData();
  const navigate = useNavigate();

  const login = async () => {
    setLoading(true);
    try {
      // check user in firbase authantication
      const result = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("user", JSON.stringify(result));

      // Show toast on success
      toast.success("signin successfull");

      // navigate user to home page
      navigate("/");

      // stop loading on success
      setLoading(false);
    } catch (error) {
      toast.error("Sigin failed");

      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div className=" flex justify-center items-center h-screen">
      {loading && <Loader />}
      <div className=" bg-gray-800 px-10 py-10 rounded-xl ">
        <div className="">
          <h1 className="text-center text-white text-xl mb-4 font-bold">
            Login
          </h1>
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Password"
          />
        </div>
        <div className=" flex justify-center mb-3">
          <button
            onClick={login}
            className=" bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg"
          >
            Login
          </button>
        </div>
        <div>
          <h2 className="text-white">
            Don't have an account{" "}
            <Link className=" text-yellow-500 font-bold" to={"/signup"}>
              Signup
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Login;
