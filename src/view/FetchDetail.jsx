import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState,useEffect } from 'react'

export default function FetchDetail() {
  const {param} = useParams()
  const [data,setData] = useState(null)
  useEffect(() => {
    async function getApi(){
      const request = await axios.get(`https://dummy-data-api-production.up.railway.app/${param}`)
      const response = request.data
      console.log(response)
    }
    getApi()
  })
  console.log(param)
  return (
    <div>{data && data.json()}</div>
  )
}