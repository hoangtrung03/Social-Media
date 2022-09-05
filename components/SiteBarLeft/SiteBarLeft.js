import Link from 'next/link'
import { useState } from 'react'

const SiteBarLeft = props => {
  const [isActive, setIsActive] = useState(false)
  const SiteBarData = [
    {
      id: 1,
      img: '/images/icons/Feed.svg',
      name: 'Feed',
      href: '/',
      isActive: ''
    },
    {
      id: 2,
      img: '/images/icons/my-community.svg',
      href: '/test',
      name: 'My community'
    },
    {
      id: 3,
      img: '/images/icons/message.svg',
      href: '/',
      name: 'Messages'
    },
    {
      id: 4,
      img: '/images/icons/notification.svg',
      href: '/',
      name: 'Notification'
    },
    {
      id: 5,
      img: '/images/icons/explore.svg',
      href: '/explore',
      name: 'Explore'
    },
    {
      id: 6,
      img: '/images/icons/user.svg',
      href: '/',
      name: 'Profile'
    },
    {
      id: 7,
      img: '/images/icons/setting.svg',
      href: '/',
      name: 'Settings'
    },
    {
      id: 8,
      img: '/images/icons/logout.svg',
      href: '/',
      name: 'Logout'
    }
  ]
  return (
    <div className="w-60 hidden bg-white md:flex flex-col px-5 py-2">
      {SiteBarData.map(e => (
        <ul className="mb-2" key={e.id}>
          <li>
            <Link href={e.href}>
              <a className="h-11 px-5 hover:bg-[#4E5D78] rounded-lg flex items-center cursor-pointer hover:text-white">
                <img src={e.img} className="mr-5 text-white" alt="icon" />
                <p className="font-bold">{e.name}</p>
              </a>
            </Link>
          </li>
        </ul>
      ))}
    </div>
  )
}
export default SiteBarLeft
