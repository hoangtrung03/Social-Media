import React from 'react'
import Layout from '../components/Layout/Layout'

const Test = () => {
  return (
    <div>
      <div className="max-w-2xl mx-auto">
        <button
          className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          data-modal-toggle="default-modal"
        >
          Toggle modal
        </button>

        <div
          id="default-modal"
          data-modal-show="false"
          aria-hidden="true"
          className="hidden overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center bg-gray-600"
        >
          <div className="relative w-full max-w-2xl px-4 h-full md:h-auto">
            <div className="p-4 rounded-2xl bg-white">
              <div className="flex items-center justify-between gap-2">
                <img
                  src="/images/avatar/avatar1.jpg"
                  className="rounded-full"
                  alt="icon"
                />
                <input
                  type="text"
                  className="rounded-xl p-2 flex-1 bg-gray-100 overflow-hidden"
                  placeholder="What's happening?"
                />
              </div>
              <div className="flex items-center justify-between mt-4 relative z-50">
                <ul className="flex items-center gap-3">
                  <li className="inline-flex cursor-pointer">
                    <img
                      src="/images/icons/video-camera.svg"
                      className="mr-2"
                      alt="icons"
                    />
                    <div className="text-sm text-gray-500 font-medium">
                      Live Video
                    </div>
                  </li>
                  <li className="inline-flex cursor-pointer">
                    <img src="/images/icons/picture.svg" className="mr-2" alt="icons"/>
                    <div className="text-sm text-gray-500 font-medium">
                      Photo/Video
                    </div>
                  </li>
                  <li className="inline-flex cursor-pointer">
                    <img src="/images/icons/smile.svg" className="mr-2" alt="icons"/>
                    <div className="text-sm text-gray-500 font-medium">
                      Feeling
                    </div>
                  </li>
                </ul>
                <button data-modal-toggle="default-modal" type="button">
                  <div className="h-10 px-9 bg-blue-500 rounded-lg flex items-center cursor-pointer">
                    <p className="font-medium text-white text-sm" type="button">
                      Post
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Test
Test.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
