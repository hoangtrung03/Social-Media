import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link"
import { gql, useQuery, useMutation } from "@apollo/client";
import {Test} from '../lib/mutations.graphql';
import Error from "../pages/error";

const Login = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const rememberMe = useRef(null)

  // const [generateCustomerToken, dataMutation] = useMutation(LOGIN)

  const { data } = useMutation(Test , {variables: { email: "", password: ""}});

const email = data?.email
console.log(email)

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const clickRememberMe = () => {
    rememberMe.current.click()
  }
  const handlePasswordChange =(event)=>{
    setPasswordInput(event.target.value);
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

    generateCustomerToken({ variables: { email: data?.email, password: data?.password } });
  } 
  // if (loading)
  //   return (
  //     <div className="mt-5">
  //       <button
  //         disabled
  //         type="button"
  //         className="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
  //       >
  //         <svg
  //           role="status"
  //           className="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600"
  //           viewBox="0 0 100 101"
  //           fill="none"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           <path
  //             d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
  //             fill="currentColor"
  //           />
  //           <path
  //             d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
  //             fill="#1C64F2"
  //           />
  //         </svg>
  //         Loading...
  //       </button>
  //     </div>
  //   );
  return (
    <>
      <div className="h-20 flex items-center justify-between px-5">
        <div className="logo w-[220px]">
            <Link href="/">
                <img src="/logo.svg" className="cursor-pointer" alt="log"/>
            </Link>
        </div>
        <div className="avatar w-[290px] flex justify-end items-center">
          {/* <select className="" value="English (UK)">
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
          </select> */}
        </div>
      </div>
      <div className="container mx-auto mt-7 flex flex-col items-center justify-center">
        <h1 className="font-bold text-5xl text-gray-600">Sign In</h1>
        <p className="font-medium text-sm text-gray-500 mt-2 mb-7">Welcome back, you&apos;ve been missed!</p>
        <div className="xl:w-[45%] md:w-[70%] p-10 shadow-lg">
          <div className="flex justify-between flex-col lg:flex-row">
            <div className="flex justify-center items-center h-12 bg-gray-200 px-7 lg:w-[40%] rounded-lg gap-4 cursor-pointer my-5 lg:my-0">
              <img src="/images/icons/google.svg" alt="google"/>
              <p className="hidden md:block">Log in with Google</p>
            </div>
            <div className="flex  justify-center items-center h-12 bg-gray-200 px-7 lg:w-[40%] rounded-lg gap-4 cursor-pointer my-5 lg:my-0">
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
            <div className="my-5 relative">
              <img src="/images/icons/lock.svg" className="absolute translate-y-full translate-x-full" alt="mail"/>
              <img src={passwordType === "password" ? "/images/icons/eye-off.svg" : "/images/icons/eye.svg"} className="absolute right-0 translate-y-full -translate-x-full cursor-pointer" alt="mail" onClick={togglePassword}/>
              <input type={passwordType} className="border rounded-lg w-full h-12 px-10" {...register("password")} placeholder="Input Password" onChange={handlePasswordChange}/>
            </div>
            <div className="my-2 p-5 flex justify-between items-center flex-col lg:flex-row">
              <div className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="border rounded-lg " ref={rememberMe}/>
                <p className="text-gray-500 font-medium" onClick={clickRememberMe}>Remember me</p>
              </div>
              <p className="text-gray-500 font-medium cursor-pointer">Forgot Password?</p>
            </div>
            <button type="submit" className="w-full h-10 text-white rounded-xl font-medium bg-blue-600">Sign In</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
