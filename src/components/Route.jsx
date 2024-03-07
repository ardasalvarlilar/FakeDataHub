
import {Link} from 'react-router-dom'
export default function Route() {
  return (
    <div className='px-6 py-4 mt-8 md:py-12 md:px-24 md:mt-12'>
      <h2 className='my-2 text-lg font-semibold md:text-xl'>Routes</h2>
      <p className='my-2 md:my-4'>Here is a list of which HTTP methods are supported:</p>
      <table>
        <thead>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='text-sm md:text-lg'>
              GET
            </td>
            <td className='text-xs md:text-base'>
              <Link className='underline' to='https://dummy-data-api-production.up.railway.app/countries'>/countries</Link>
            </td>
            <td className='text-sm md:text-lg '>
              Returns all the countries
            </td>
          </tr>
          <tr>
            <td className='text-sm md:text-lg'>
              GET
            </td>
            <td className='text-xs md:text-base'>
              <Link className='underline' to='https://dummy-data-api-production.up.railway.app/countries/1'>/countries/1</Link>
            </td>
            <td className='text-sm md:text-lg '>
              Returns the country which id matches
            </td>
          </tr>
          <tr>
            <td className='text-sm md:text-lg'>
              GET
            </td>
            <td className='text-xs md:text-base'>
              <Link className='underline' to='https://dummy-data-api-production.up.railway.app/countries/switzerland'>/countries/switzerland</Link>
            </td>
            <td className='text-sm md:text-lg '>
              Returns the country which name matches
            </td>
          </tr>

          <tr>
            <td className='text-sm md:text-lg'>
              GET
            </td>
            <td className='text-xs md:text-base'>
              <Link className='underline' to='https://dummy-data-api-production.up.railway.app/users'>/users</Link>
            </td>
            <td className='text-sm md:text-lg '>
              Returns all the users
            </td>
          </tr>
          <tr>
            <td className='text-sm md:text-lg'>
              GET
            </td>
            <td className='text-xs md:text-base'>
              <Link className='underline' to='https://dummy-data-api-production.up.railway.app/users/1'>/users/1</Link>
            </td>
            <td className='text-sm md:text-lg '>
              Returns the user which id matches
            </td>
          </tr>
          <tr>
            <td className='text-sm md:text-lg'>
              GET
            </td>
            <td className='text-xs md:text-base'>
              <Link className='underline' to='https://dummy-data-api-production.up.railway.app/users/ahellin2@examiner.com'>/users/ahellin2@examiner.com</Link>
            </td>
            <td className='text-sm md:text-lg '>
              Returns the user which email matches
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
