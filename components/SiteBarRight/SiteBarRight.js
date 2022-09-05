const SiteBarRight = props => {
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
    <div className="w-[310px] bg-white hidden xl:flex flex-col items-start px-5 pt-2">
      <div className="w-full">
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
        {/* Slider Stories */}
        <div className="mx-auto my-7">
          <ul className="flex space-x-3">
            <li className="flex flex-col items-center space-y-1 ">
              <div className="relative bg-blue-400  rounded-full">
                <a
                  href="#"
                  className="block p-[1px] rounded-full transform transition"
                >
                  <img
                    className="rounded-full"
                    src="/images/avatar/avatar1.jpg"
                    alt="Eduardo"
                  />
                </a>
                <button className="absolute bg-white text-gray-400 text-xl font-medium w-4 h-4 rounded-full bottom-0 border flex justify-center items-center translate-x-full">
                  <div className="transform -translate-y-px">+</div>
                </button>
              </div>
              <a href="#">Eduardo</a>
            </li>
            <li className="flex flex-col items-center space-y-1 ">
              <div className="bg-blue-400  rounded-full">
                <a
                  href="#"
                  className="block p-[1px] rounded-full transform transition"
                >
                  <img
                    className="rounded-full"
                    src="/images/avatar/avatar1.jpg"
                    alt="Edilson"
                  />
                </a>
              </div>

              <a href="#">Edilson</a>
            </li>

            <li className="flex flex-col items-center space-y-1 ">
              <div className="bg-blue-400  rounded-full">
                <a
                  href="#"
                  className="block p-[1px] rounded-full transform transition"
                >
                  <img
                    className="rounded-full"
                    src="/images/avatar/avatar1.jpg"
                    alt="Afrim"
                  />
                </a>
              </div>
              <a href="#">Afrim</a>
            </li>

            <li className="flex flex-col items-center space-y-1 ">
              <div className="bg-blue-400  rounded-full">
                <a
                  href="#"
                  className="block p-[1px] rounded-full transform transition"
                >
                  <img
                    className="rounded-full"
                    src="/images/avatar/avatar1.jpg"
                    alt="Eduardo"
                  />
                </a>
              </div>
              <a href="#">Eduardo</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-between gap-2 mb-5">
          <div className="flex-1 items-center">
            <h4 className="text-gray-600 text-md font-bold">Friends</h4>
          </div>
          <img src="/images/icons/other.svg" alt="icons"/>
        </div>
        <div className="hihi">
          {FriendsData.map(value => (
            <div
              className="flex items-center justify-between gap-2 my-4"
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
    </div>
  )
}
export default SiteBarRight
