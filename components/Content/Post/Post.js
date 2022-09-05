import { useRef } from 'react'

const Post = props => {
  const inputEl = useRef(null)
  const handleFocusComment = () => {
    inputEl.current.focus()
  }

  return (
    <>
      <div className="p-4 my-7 rounded-2xl bg-white">
        <div className="flex items-center justify-between gap-2">
          <img
            src="/images/avatar/avatar1.jpg"
            className="rounded-full"
            alt="icon"
          />
          <div className="flex-1 items-center">
            <h4 className="text-gray-500 text-md font-medium">
              Sepural Gallery
            </h4>
            <span className="text-gray-400 text-xs">15h. Public</span>
          </div>
          <img src="/images/icons/other.svg" alt="icons" title="icons" />
        </div>
        <img
          src="/images/content/post-photos.jpg"
          className="w-full my-4 object-cover"
          alt="icons"
          title="icons"
        />
        <div className="flex items-center justify-between">
          <div className="flex -space-x-2">
            <img
              className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-800"
              src="/images/avatar/avatar4.jpg"
              alt=""
            />
            <img
              className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-800"
              src="/images/avatar/avatar5.jpg"
              alt=""
            />
            <img
              className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-800"
              src="/images/avatar/avatar6.jpg"
              alt=""
            />
            <a
              className="flex justify-center items-center w-6 h-6 text-xs font-medium text-white bg-gray-700 rounded-full border-2 border-white hover:bg-gray-600 dark:border-gray-800"
              href="#"
            >
              +9
            </a>
          </div>
          <ul className="flex items-center gap-2">
            <li>
              <p className="text-gray-400 text-sm">3 Comments</p>
            </li>
            <li>
              <p className="text-gray-400 text-sm">17 Share</p>
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-between border-y py-2 my-3">
          <div className="inline-flex cursor-pointer">
            <img src="/images/icons/heart.svg" className="mr-2" alt="icons" />
            <div className="text-sm text-gray-400 font-medium">Like</div>
          </div>
          <div className="inline-flex cursor-pointer">
            <img src="/images/icons/comment.svg" className="mr-2" alt="icons" />
            <button
              className="text-sm text-gray-400 font-medium"
              onClick={handleFocusComment}
            >
              Comments
            </button>
          </div>
          <div className="inline-flex cursor-pointer">
            <img src="/images/icons/share.svg" className="mr-2" alt="icons" />
            <div className="text-sm text-gray-400 font-medium">Share</div>
          </div>
        </div>

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
            ref={inputEl}
          />
          <div className="bg-blue-100 h-10 px-3 rounded flex items-center">
            <img src="/images/icons/send.svg" alt="icons" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Post
