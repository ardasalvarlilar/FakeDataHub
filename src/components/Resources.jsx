import { Link } from 'react-router-dom'

export default function Resources() {
  return (
    <div className='px-24'>
      <h2 className='my-2 text-xl font-semibold'>Resources</h2>
      <p className='my-4'>FakeDataHub comes with common resources:</p>
      
      
      <table className=' border-separate [border-spacing:2rem]'>
        <thead>
          <tr>
            <td></td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link className='underline' to='https://dummy-data-api-production.up.railway.app/'>/countries</Link>
            </td>
            <td>
              250 countries
            </td>
          </tr>
          <tr>
            <td>
              <Link className='underline' to='https://dummy-data-api-production.up.railway.app/'>/users</Link>
            </td>
            <td>
              100 user
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
