import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

const SiteBarLeft = props => {
  const router = useRouter()
  const [isActive, setIsActive] = useState(false)
  const SiteBarData = [
    {
      id: 1,
      img: '/images/icons/Feed.svg',
      name: 'Feed',
      href: '/',
      imgActive: '/images/icons/icon-feed-active.svg'
    },
    {
      id: 2,
      img: '/images/icons/my-community.svg',
      href: '/test',
      name: 'My community',
      imgActive: '/images/icons/icon-my-community-active.svg'
    },
    {
      id: 3,
      img: '/images/icons/message.svg',
      href: '/messages',
      name: 'Messages',
      imgActive: '/images/icons/icon-messages-active.svg'
    },
    {
      id: 4,
      img: '/images/icons/notification.svg',
      href: '/notification',
      name: 'Notification',
      imgActive: '/images/icons/icon-notification-active.svg'
    },
    {
      id: 5,
      img: '/images/icons/explore.svg',
      href: '/explore',
      name: 'Explore',
      imgActive: '/images/icons/icon-explore-active.svg'
    },
    {
      id: 6,
      img: '/images/icons/user.svg',
      href: '/profile',
      name: 'Profile',
      imgActive: '/images/icons/icon-profile-active.svg'
    },
    {
      id: 7,
      img: '/images/icons/setting.svg',
      href: '/settings',
      name: 'Settings',
      imgActive: '/images/icons/icon-settings-active.svg'
    },
    {
      id: 8,
      img: '/images/icons/logout.svg',
      href: '',
      name: 'Logout',
      imgActive: '/images/icons/icon-logout-active.svg'
    }
  ]

  return (
    <div className="w-60 hidden bg-white md:flex flex-col px-5 py-2">
      <ul className="mb-2">
        {SiteBarData.map(e => (
          <li key={e.id}>
            <Link href={e.href}>
              <a
                className={`h-11 px-5 hover:bg-gray-500 rounded-lg flex items-center cursor-pointer hover:text-white mb-2 ${
                  router.asPath === e.href ? 'bg-gray-500 text-white' : ''
                }`}
              >
                <p className="mr-5">
                  <Image
                    width={16}
                    height={16}
                    src={`${router.asPath === e.href ? e.imgActive : e.img}`}
                    alt="icon"
                  />
                </p>
                <span className="font-bold">{e.name}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default SiteBarLeft
