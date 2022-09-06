import Image from 'next/image'
import React from 'react'
import Layout from '../components/Layout/Layout'
const Messages = () => {
  const FriendsData = [
    {
      id: 1,
      name: 'Kayleigh Bysouth ',
      avatarImg: '/images/avatar/avatar1.jpg',
      status: '2min'
    },
    {
      id: 2,
      name: 'Jess Phillips MP',
      avatarImg: '/images/avatar/avatar2.jpg',
      status: '10min'
    },
    {
      id: 3,
      name: 'MP Eslam Hisham',
      avatarImg: '/images/avatar/avatar3.jpg',
      status: '5min'
    }
  ]
  return (
    <div className="flex flex-start items-start bg-gray-200 rounded-2xl p-7 md:gap-7">
      <div className="w-full md:w-[364px] bg-white flex items-start p-5 rounded-2xl">
        <div className="w-full">
          <div className="flex justify-between items-center mb-5">
            <div className=" relative">
              <input
                type="text"
                className="w-full border rounded-lg h-12 left-3 pl-12"
                placeholder="Search Friends!"
              />
              <img
                src="/images/icons/search.svg"
                className="pr-5 absolute top-0 left-0 translate-x-5 translate-y-full"
                alt="icon"
              />
            </div>
            <div className="px-5 py-3 rounded cursor-pointer bg-gray-200">
              <Image src="/images/icons/icon-star.svg" width={12} height={12} />
            </div>
          </div>
          {FriendsData.map(value => (
            <div
              className="flex items-center justify-between gap-2 hover:bg-gray-200 p-4 rounded-lg"
              key={value.id}
            >
              <img
                src={value.avatarImg}
                className="rounded-full w-10 h-10"
                alt="icon"
              />
              <h4 className="text-gray-500 text-md font-medium flex-1">
                {value.name}
              </h4>
              <p className="shrink-0 text-gray-300 text-xs">{value.status}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white flex-1 rounded-2xl">
        <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
          <div className="flex justify-between items-center border-b-2 py-4 px-4">
            <Image
              src="/images/avatar/avatar3.jpg"
              width={50}
              height={50}
              alt="icon"
            />
            <div className="flex justify-between items-center gap-4">
              <Image
                src="/images/icons/icon-call.svg"
                width={16}
                height={16}
                alt="icon"
              />
              <Image
                src="/images/icons/icon-call-video.svg"
                width={16}
                height={16}
                alt="icon"
              />
              <Image
                src="/images/icons/icon-information.svg"
                width={16}
                height={16}
                alt="icon"
              />
            </div>
          </div>
          <div
            id="messages"
            className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
          >
            <div className="chat-message">
              <div className="flex items-end justify-end">
                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                  <div>
                    <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                      Your error message says permission denied, npm global
                      installs must be given root privileges.
                    </span>
                  </div>
                </div>
                <div className="w-6 h-6 rounded-full order-2">
                  <Image
                    src="/images/avatar/avatar3.jpg"
                    width={50}
                    height={50}
                    alt="icon"
                  />
                </div>
              </div>
            </div>
            <div className="chat-message">
              <div className="flex items-end justify-end">
                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                  <div>
                    <span className="px-4 py-2 rounded-lg inline-block bg-blue-600 text-white ">
                      Are you using sudo?
                    </span>
                  </div>
                  <div>
                    <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                      Run this command sudo chown -R `whoami` /Users/ package
                      globally without using sudo
                    </span>
                  </div>
                </div>
                <div className="w-6 h-6 rounded-full order-2">
                  <Image
                    src="/images/avatar/avatar3.jpg"
                    width={50}
                    height={50}
                    alt="icon"
                  />
                </div>
              </div>
            </div>
            <div className="chat-message">
              <div className="flex items-end">
                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                  <div>
                    <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                      It seems like you are from Mac OS world. There is no
                      /Users/ folder on linux ?
                    </span>
                  </div>
                  <div>
                    <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                      I have no issue with any other packages installed with
                      root permission globally.
                    </span>
                  </div>
                </div>
                <div className="w-6 h-6 rounded-full order-1">
                  <Image
                    src="/images/avatar/avatar3.jpg"
                    width={50}
                    height={50}
                    alt="icon"
                  />
                </div>
              </div>
            </div>
            <div className="chat-message">
              <div className="flex items-end justify-end">
                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                  <div>
                    <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                      yes, I have a mac. I never had issues with root permission
                      as well, but this helped me to solve the problem
                    </span>
                  </div>
                </div>
                <div className="w-6 h-6 rounded-full order-2">
                  <Image
                    src="/images/avatar/avatar3.jpg"
                    width={50}
                    height={50}
                    alt="icon"
                  />
                </div>
              </div>
            </div>
            <div className="chat-message">
              <div className="flex items-end">
                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                  <div>
                    <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                      I get the same error on Arch Linux (also with sudo)
                    </span>
                  </div>
                  <div>
                    <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                      I also have this issue, Here is what I was doing until
                      now: #1076
                    </span>
                  </div>
                  <div>
                    <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                      even i am facing
                    </span>
                  </div>
                </div>
                <div className="w-6 h-6 rounded-full order-1">
                  <Image
                    src="/images/avatar/avatar3.jpg"
                    width={50}
                    height={50}
                    alt="icon"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0 flex justify-between items-center gap-1">
            <div className="relative flex flex-1">
              <input
                type="text"
                placeholder="Type something here..."
                className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 px-5 bg-gray-200 rounded-md py-3"
              />
              <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                ></button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                >
                  <Image
                    src="/images/icons/icon-link.svg"
                    width={16}
                    height={16}
                    alt="icon"
                  />
                </button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                >
                  <Image
                    src="/images/icons/icon-smile.svg"
                    width={16}
                    height={16}
                    alt="icon"
                  />
                </button>
              </div>
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-6 w-6 ml-2 transform rotate-90"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messages
Messages.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
