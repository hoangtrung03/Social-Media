import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Link from 'next/link'

const SignUp = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const rememberMe = useRef(null)
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const clickRememberMe = () => {
    rememberMe.current.click()
  }
  const handlePasswordChange =(evnt)=>{
    setPasswordInput(evnt.target.value);
  }
  const togglePassword =()=>{
    if(passwordType==="password")
    {
      setPasswordType("text")
      return;
    }
    setPasswordType("password")
  }
  const onSubmit = (data) => {
    console.log(data);
  } 
  return (
    <>
      <div className="h-20 flex items-center justify-between px-5">
        <div className="logo w-[220px]">
            <Link href="/">
                <img src="/logo.svg" className="cursor-pointer" />
            </Link>
        </div>
        <div className="avatar w-[290px] flex justify-end items-center">
        <select className="" value="English (UK)">
            <option>Af-Soomaali</option>
            <option>Afrikaans</option>
            <option>Bahasa Indonesia</option>
            <option>Bangla</option>
            <option>Catala</option>
            <option>Dansk</option>
            <option>Deutsch</option>
            <option>English (UK)</option>
            <option>English (Us)</option>
            <option>Filipino</option>
            <option>Francais (Canada)</option>
            <option>Francais (France)</option>
            <option>Fula</option>
            <option>Gaeilge</option>
          </select>
        </div>
      </div>
      <div className="container mx-auto mt-7 flex flex-col items-center justify-center">
        <h1 className="font-bold text-5xl text-gray-600">Getting Started</h1>
        <p className="font-medium text-sm text-gray-500 mt-2 mb-7">Create an account to continue and connect with the people.</p>
        <div className="xl:w-[40%] md:w-[70%] p-10 shadow-lg">
          <div className="flex justify-between flex-col lg:flex-row">
            <div className="flex justify-center items-center h-12 bg-gray-200 px-7 lg:w-[45%] rounded-lg gap-4 cursor-pointer my-5 lg:my-0">
              <img src="/images/icons/google.svg" alt="google"/>
              <p className="hidden md:block">Log in with Google</p>
            </div>
            <div className="flex  justify-center items-center h-12 bg-gray-200 px-7 lg:w-[45%] rounded-lg gap-4 cursor-pointer my-5 lg:my-0">
              <img src="/images/icons/apple.svg" alt="google"/>
              <p className="hidden md:block">Log in with Apple</p>
            </div>
          </div>
          <div
            className="flex items-center my-7 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
          >
            <p className="text-center font-semibold mx-4 mb-0">Or</p>
          </div>
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="my-2 relative">
              <img src="/images/icons/mail-@.svg" className="absolute translate-y-full translate-x-full" alt="mail"/>
              <input type="email" className="border rounded-lg w-full h-12 px-10" {...register("email", 
              {
                required: {
                  value: true,
                  message: "You need to specify a valid email address"
                }, 
                pattern: {
                  value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "I think I said _valid_, didn't I?"
               }
              }
              )} placeholder="Input Email"/>
            </div>
            <div className="my-2 relative">
              <img src="/images/icons/smile.svg" className="absolute translate-y-full translate-x-full" alt="mail"/>
              <input type="text" className="border rounded-lg w-full h-12 px-10" {...register("fullname")} placeholder="Input Full Name"/>
            </div>
            <div className="my-2 relative">
              <img src="/images/icons/lock.svg" className="absolute translate-y-full translate-x-full" alt="mail"/>
              <img src="/images/icons/eye-off.svg" className="absolute right-0 translate-y-full -translate-x-full cursor-pointer" alt="mail" onClick={togglePassword}/>
              <input type={passwordType} className="border rounded-lg w-full h-12 px-10" {...register("password")} placeholder="Input Password" onChange={handlePasswordChange}/>
            </div>
            <div className="my-2 p-5 flex justify-between items-center flex-col lg:flex-row">
              
            </div>
            <button type="submit" className="w-full h-10 text-white rounded-xl font-medium bg-blue-600">Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
