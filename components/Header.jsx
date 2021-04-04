import { router } from 'next'
import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export const Header = ({ isUserPage }) => {

  const [userData, setUserData] = useState({})

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userData")))
  }, [])

  const logout = () => {
    localStorage.clear()
    router.push('/login')
  }

  return (
    <header>
      <div className="menu-container">
        <a href="/">
          <img src="logo.png" alt="Net Spiders Logo" title="Net Spiders Logo" />
        </a>
        {isUserPage
          ? <span onClick={logout} type="button"> Log Out </span>
          : userData?.phone
            ? <img onClick={() => router.push("/user")} src="user.svg" alt="User" title="User" />
            : <Link href="/login"> Login </Link>}
      </div>
    </header>
  )
}
