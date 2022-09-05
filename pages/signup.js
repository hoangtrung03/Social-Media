import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import Image from 'next/image'

const SignUp = () => {
  const [passwordType, setPasswordType] = useState('password')
  const [passwordInput, setPasswordInput] = useState('')
  const rememberMe = useRef(null)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()
  const clickRememberMe = () => {
    rememberMe.current.click()
  }
  const handlePasswordChange = event => {
    setPasswordInput(event.target.value)
  }
  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text')
      return
    }
    setPasswordType('password')
  }
  const onSubmit = data => {
    console.log(data)
  }
  return (
    <>
      <div className="h-20 flex items-center justify-between px-5">
        <div className="logo w-[220px]">
          <Link href="/">
            <img src="/logo.svg" className="cursor-pointer" alt="logo" title="logo"/>
          </Link>
        </div>
        <div className="avatar w-[290px] flex justify-end items-center">
          <select className="" defaultValue="English (UK)">
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
        <p className="font-medium text-sm text-gray-500 mt-2 mb-7">
          Create an account to continue and connect with the people.
        </p>
        <div className="p-10 shadow-lg">
          <div className="flex justify-between flex-col md:flex-row gap-5">
            <button className="flex items-center gap-[25px] justify-center bg-gray-200 h-[52px] px-[30px] rounded-[10px]">
              <Image
                src="/images/icons/google.svg"
                alt="Sign In With Google"
                width={16}
                height={16}
              />
              <span className="font-medium text-base text-gray">
                Log in with Google
              </span>
            </button>
            <button className="flex items-center gap-[25px] justify-center bg-gray-200 h-[52px] px-[30px] rounded-[10px]">
              <Image
                src="/images/icons/apple.svg"
                alt="Sign In With Apple"
                width={16}
                height={16}
              />
              <span className="font-medium text-base text-gray">
                Log in with Apple
              </span>
            </button>
          </div>
          <div className="flex items-center my-7 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
            <p className="text-center font-semibold mx-4 mb-0">Or</p>
          </div>
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="my-2 relative">
              <img
                src="/images/icons/mail-@.svg"
                className="absolute translate-y-full translate-x-full"
                alt="mail"
              />
              <input
                type="email"
                className="border rounded-lg w-full h-12 px-10"
                {...register('email', {
                  required: {
                    value: true,
                    message: 'You need to specify a valid email address'
                  },
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "I think I said _valid_, didn't I?"
                  }
                })}
                placeholder="Input Email"
              />
            </div>
            <div className="my-2 relative">
              <img
                src="/images/icons/smile.svg"
                className="absolute translate-y-full translate-x-full"
                alt="mail"
              />
              <input
                type="text"
                className="border rounded-lg w-full h-12 px-10"
                {...register('fullname')}
                placeholder="Input Full Name"
              />
            </div>
            <div className="my-2 relative">
              <img
                src="/images/icons/lock.svg"
                className="absolute translate-y-full translate-x-full"
                alt="mail"
              />
              <img
                src={
                  passwordType === 'password'
                    ? '/images/icons/eye-off.svg'
                    : '/images/icons/eye.svg'
                }
                className="absolute right-0 translate-y-full -translate-x-full cursor-pointer"
                alt="mail"
                onClick={togglePassword}
              />
              <input
                type={passwordType}
                className="border rounded-lg w-full h-12 px-10"
                {...register('password')}
                placeholder="Input Password"
                onChange={handlePasswordChange}
              />
            </div>
            <button
              type="submit"
              className="w-full h-10 text-white rounded-xl font-medium bg-blue-600 my-[30px]"
            >
              Sign Up
            </button>
          </form>
          <Link href="/login">
            <a className=" text-base font-medium flex justify-center items-center">
              <span className="text-gray">Already have an account?</span>
              <span className="text-blue-400 ml-[15px]">Sign In</span>
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default SignUp
