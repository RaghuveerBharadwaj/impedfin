import axios from "axios"
import { router } from 'next'

const baseUrl = 'https://impedfin.herokuapp.com'

export const login = async (body) => {
  try {
    const res = await axios.post(`${baseUrl}/login`, body)
    if (res.data.token) {
      localStorage.setItem("impedfinToken", res.data.token)
      localStorage.setItem("userData", JSON.stringify(res.data.userData))
      router.push("/user")
    }
  } catch (error) {
    console.error(error)
  }
}

export const getInvestments = async (userId) => {
  try {
    const res = await axios.get(`${baseUrl}/getInvestments?userId=${userId}`, {
      headers: {
        token: localStorage.getItem("impedfinToken")
      }
    })
    return res?.data
    
  } catch (error) {
    console.error(error)
  }
}