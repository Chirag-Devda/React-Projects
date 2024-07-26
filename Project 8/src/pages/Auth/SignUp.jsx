import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import useData from "../../hooks/useData";
import { Loader } from "../../components/index.js";

// firebase imports
import { createUserWithEmailAndPassword } from "firebase/auth/cordova";
import { auth, fireDB } from "../../firebase/FirebaseConfig.jsx";
import { addDoc, collection, Timestamp } from "firebase/firestore";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, setLoading } = useData();

  const signup = async () => {
    setLoading(true);

    if (name === "" || email === "" || password === "") {
      return toast.error("All fields are required");
    }

    try {
      // add user in firebase authantication
      const users = await createUserWithEmailAndPassword(auth, email, password);
      console.log(users);

      // user store in firebase firestore
      const user = {
        name: name,
        uid: users.user.uid,
        email: users.user.email,
        time: Timestamp.now(),
      };
      console.log(user);

      const userRef = collection(fireDB, "users");
      await addDoc(userRef, user);

      // toast successful
      toast.success("signup successfully");

      // navigate to login page
      window.location.href = "/login";

      // clear all the inputs
      setName("");
      setEmail("");
      setPassword("");

      // stop loading
      setLoading(false);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("Email already exists");
      }
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
            Signup
          </h1>
        </div>
        <div>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Name"
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Password"
          />
        </div>
        <div className=" flex justify-center mb-3">
          <button
            onClick={signup}
            className=" bg-red-500 w-full text-white font-bold  px-2 py-2 rounded-lg"
          >
            Signup
          </button>
        </div>
        <div>
          <h2 className="text-white">
            Have an account{" "}
            <Link className=" text-red-500 font-bold" to={"/login"}>
              Login
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Signup;
