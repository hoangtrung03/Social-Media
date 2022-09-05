import Image from 'next/image'
import Link from 'next/link'
const Header = props => {
  return (
    <div className="h-20 flex items-center justify-between px-5">
      <div className="logo w-[220px]">
        <img
          src="/logo.svg"
          className="cursor-pointer"
          alt="logo"
          title="logo"
        />
      </div>
      <div className="relative flex-1">
        <input
          type="text"
          className="border rounded-lg w-1/2 h-12 left-3 pl-12"
          placeholder="Search for something here..."
        />
        <div className="pr-5 absolute top-0 translate-x-5 translate-y-1/2">
          <Image
            src="/images/icons/search.svg"
            width={16}
            height={16}
            className=""
            alt="icon"
          />
        </div>
      </div>
      <div className="avatar w-[290px] flex justify-end items-center gap-2">
        <Link href="/login">Login</Link>
        <Link href="/signup">Register</Link>
        <p className="text-base text-gray-500 font-medium mr-5">
          <Link href="/test">Saleh Ahmed</Link>
        </p>
        <img
          src="/images/avatar/avatar1.jpg"
          className="rounded"
          alt="avatar"
          title="avatar"
        />
      </div>
    </div>
  )
}

export default Header
