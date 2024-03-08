import { Link } from 'react-router-dom'

export default function Resources() {
  return (
    <div className='px-6 md:px-24'>
      <h2 className='my-2 text-lg font-semibold md:text-xl'>Resources</h2>
      <p className='my-2 md:my-4'>FakeDataHub comes with common resources:</p>
      
      
      <table>
        <thead>
          <tr>
            <td></td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='text-xs md:text-base'>
              <Link className='underline' to='https://dummy-data-api-production.up.railway.app/countries'>/countries</Link>
            </td>
            <td className='text-sm md:text-lg'>
              250 countries
            </td>
          </tr>
          <tr>
            <td className='text-xs md:text-base'>
              <Link className='underline' to='https://dummy-data-api-production.up.railway.app/users'>/users</Link>
            </td>
            <td className='text-sm md:text-lg'>
              100 user
            </td>
          </tr>
          <tr>
            <td className="text-xs md:text-base">
              <Link className='underline' to='https://dummy-data-api-production.up.railway.app/products'>/products</Link>
            </td>
            <td>
              100 products
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
