import { router } from 'next'
import { Header, Investments, UserDetails } from '../components'
import { useEffect, useState } from 'react'
import { getInvestments } from '../actions/auth'

const User = () => {

  const [userData, setUserData] = useState({})
  const [investments, setInvestments] = useState([])

  useEffect(async () => {
    const user = JSON.parse(localStorage.getItem("userData"))
    setUserData(user)
    if (!user?.phone) {
      router.push("/login")
    } else {
      const inv = await getInvestments(user?.userId)
      setInvestments(inv)
    }
  }, [])

  return (
    <div className='landing'>
      <Header isUserPage />
      <UserDetails user={userData} />
      <Investments investments={investments} />
    </div>
  )
}

export default User
