import { useState } from "react";
const Login = ({handleLogin}) => {

 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')

  const submitHandler=(e)=>{
    e.preventDefault();
    handleLogin(email,password)
    setEmail('')
    setPassword('')
  }
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="border-2 rounded-md p-3 flex flex-col justify-center  border-emerald-500 h-[400px]">
        <h1 className="p-3 font-thin text-3xl mb-8">Login to your account</h1>
        <form onSubmit={(e)=>{submitHandler(e)}} className="flex flex-col justify-center items-center gap-2 ">
          <input
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            className="py-2 px-8 w-[90%] border-2 outline-none border-emerald-300 text-white bg-transparent rounded-full "
            placeholder="Enter your email"
            type="email"
            required
          />
          <input
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            className="py-2 px-8 w-[90%] border-2 outline-none border-emerald-300 text-white bg-transparent rounded-full "
            placeholder="Enter password"
            type="password"
            required
          />
          <button className="border-0 cursor-pointer active:scale-95 bg-emerald-600 py-2 px-6 outline-none rounded-full text-[15px] mt-4">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
