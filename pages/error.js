import Link from 'next/link'
import React from 'react'

const ErrorPage = () => {
  return (
    <div className="w-full mt-[25%] flex flex-col justify-center items-center">
      <h1 className="text-[48px] font-bold">Something Error</h1>
      <Link href="/">
        <a href="">Go Home</a>
      </Link>
    </div>
  )
}

export default ErrorPage
