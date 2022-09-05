import Head from 'next/head'
import Header from '../Header/Header'
import SiteBarLeft from '../SiteBarLeft/SiteBarLeft'
import SiteBarRight from '../SiteBarRight/SiteBarRight'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>MeetMax Social</title>
      </Head>
      <div className="w-full overflow-x-hidden">
        <Header />
        <main className="">
          <div className="flex">
            <SiteBarLeft />
            <div className="flex-1">{children}</div>
          </div>
        </main>
      </div>
    </>
  )
}
