/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

export default function RouteTableRow({httpMethodName,url,urlText,routeDescription}) {
  return (
    <tr>
      <td className="text-sm md:text-lg">
        {httpMethodName}
      </td>
      <td className="text-xs md:text-base">
        <Link className='underline' to={`https://dummy-data-api-production.up.railway.app/${url}`}>{urlText}</Link>
      </td>
      <td className="text-sm md:text-lg">
        {routeDescription}
      </td>
    </tr>
  )
}
