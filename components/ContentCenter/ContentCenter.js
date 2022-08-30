import Post from "../Content/Post/Post";
import Layout from "../Layout/Layout";

const ContentCenter = (props) => {
  return (
    <div className="grow bg-gray-50 rounded-2xl p-7 md:flex gap-7">
      <div className="flex-1">
        <div className="p-4 rounded-2xl bg-white">
          <div className="flex items-start justify-between gap-2">
            <img
              src="/images/avatar/avatar1.jpg"
              className="rounded-full"
              alt="icon"
            />
            <textarea
              type="text"
              className="rounded-xl p-2 h-10 focus:h-20 flex-1 bg-gray-100 overflow-hidden "
              placeholder="What's happening?"
              // onFocus={handleFocus}
            />
          </div>
          <div className="flex items-center justify-between mt-4 relative z-50">
            <ul className="flex items-center gap-3">
              <li className="inline-flex cursor-pointer">
                <img src="/images/icons/video-camera.svg" className="mr-2" />
                <div className="text-sm text-gray-500 font-medium">
                  Live Video
                </div>
              </li>
              <li className="inline-flex cursor-pointer">
                <img src="/images/icons/picture.svg" className="mr-2" />
                <div className="text-sm text-gray-500 font-medium">
                  Photo/Video
                </div>
              </li>
              <li className="inline-flex cursor-pointer">
                <img src="/images/icons/smile.svg" className="mr-2" />
                <div className="text-sm text-gray-500 font-medium">Feeling</div>
              </li>
            </ul>
            <div className="h-10 px-9 bg-blue-500 rounded-lg flex items-center cursor-pointer">
              <p className="font-medium text-white text-sm">Post</p>
            </div>
          </div>
        </div>

        <Post/>
      </div>
      {/* Content Center You Might Like */}
      <div className="w-[288px] hidden md:block">
        <div className="p-4 rounded-2xl bg-white">
          <div className="flex items-center justify-between gap-2 pb-3 mb-5 border-b-[1px]">
            <div className="flex-1 items-center">
              <h4 className="text-gray-600 text-md font-bold">
                You Might Like
              </h4>
            </div>
            <p className="text-blue-500 text-sm font-medium cursor-pointer">
              See All
            </p>
          </div>
          <div className="flex items-start gap-2">
            <img src="/images/avatar/avatar2.jpg" className="rounded-full" />
            <div className="">
              <h4 className="text-gray-500 text-md font-medium">
                Radovan SkillArena
              </h4>
              <p className="text-gray-400 text-xs">
                Founder &amp; CEO at Trophy
              </p>
              <div className="flex gap-4 my-4">
                <img src="/images/icons/explore.svg" />
                <img src="/images/icons/facebook.svg" />
                <img src="/images/icons/twitter.svg" />
                <img src="/images/icons/instagram.svg" />
              </div>
            </div>
          </div>
          <div className="flex justify-around items-center">
            <div className="h-10 px-7 bg-white rounded-lg border flex items-center cursor-pointer">
              <p className="font-medium text-gray-400 text-sm">Ignore</p>
            </div>
            <div className="h-10 px-7 bg-blue-500 rounded-lg flex items-center cursor-pointer">
              <p className="font-medium text-white text-sm">Follow</p>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white my-7">
          <div className="flex items-center justify-between gap-2 pb-3 mb-5 border-b-[1px]">
            <div className="flex-1 items-center">
              <h4 className="text-gray-600 text-md font-bold">Recent Event</h4>
            </div>
            <img src="/images/icons/other.svg" />
          </div>

          <div className="flex items-start gap-2 p-2 bg-gray-100 rounded-lg">
            <div className="p-4 bg-green-100 rounded-md text-base">
              <img src="/images/icons/book.svg" className="rounded-full" />
            </div>
            <div className="">
              <h4 className="text-gray-500 text-md font-medium">
                Graduation Ceremony
              </h4>
              <p className="text-gray-400 text-xs truncate w-40">
                The graduation ceremony is also sometimes called
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2 p-2 bg-gray-100 rounded-lg my-4">
            <div className="p-4 bg-red-100 rounded-md text-base">
              <img src="/images/icons/camera.svg" className="rounded-full" />
            </div>
            <div className="">
              <h4 className="text-gray-500 text-md font-medium">
                Photography Ideas
              </h4>
              <p className="text-gray-400 text-xs">
                Reflections. Reflections work because they can create...
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 rounded-2xl bg-white my-7">
          <div className="flex items-center justify-between gap-2 pb-3 mb-5 border-b-[1px]">
            <div className="flex-1 items-center">
              <h4 className="text-gray-600 text-md font-bold">Birthdays</h4>
            </div>
            <p className="text-blue-500 text-sm font-medium cursor-pointer">
              See All
            </p>
          </div>
          <div className="flex items-center justify-between gap-2">
            <img
              src="/images/avatar/avatar1.jpg"
              className="rounded-md"
              alt="icon"
            />
            <div className="flex-1 items-center">
              <h4 className="text-gray-500 text-md font-medium">
                Edilson De Carvalho
              </h4>
              <span className="text-gray-400 text-xs">Birthday today</span>
            </div>
          </div>
          <div className="flex items-center justify-between gap-2 my-2">
            <input
              type="text"
              className="rounded-xl p-2 flex-1 bg-gray-100 overflow-hidden"
              placeholder="Write on his inbox"
            />
            <div className="bg-blue-100 h-10 px-3 rounded flex items-center">
              <img src="/images/icons/send.svg" />
            </div>
          </div>

          <div className="flex items-start gap-2 p-2 bg-gray-100 rounded-lg my-2">
            <div className="p-4 bg-orange-100 rounded-md text-base">
              <img src="/images/icons/birthday.svg" className="rounded-full" />
            </div>
            <div className="">
              <h4 className="text-gray-500 text-md font-medium">
                Upcoming birthdays
              </h4>
              <p className="text-gray-400 text-xs">
                See 12 others have upcoming birthdays
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContentCenter;
ContentCenter.getLayout = function getLayout(children) {
  return (
    <Layout>
      {children}
    </Layout>
  )
}
