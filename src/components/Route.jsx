import RouteTableRow from './RouteTableRow'

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
          <RouteTableRow httpMethodName='GET' url='countries' urlText='/countries' routeDescription='Returns all the countries' />
          <RouteTableRow httpMethodName='GET' url='countries/1' urlText='/countries/1' routeDescription='Returns the country which id matches' />
          <RouteTableRow httpMethodName='GET' url='countries/switzerland' urlText='/countries/switzerland' routeDescription='Returns the country which name matches' />
          <RouteTableRow httpMethodName='GET' url='users' urlText='/users' routeDescription='Returns all the users' />
          <RouteTableRow httpMethodName='GET' url='users/1' urlText='/users/1' routeDescription='Returns the user which id matches' />
          <RouteTableRow httpMethodName='GET' url='users/ahellin2@examiner.com' urlText='/users/ahellin2@examiner.com' routeDescription='Returns the user which email matches' />
          <RouteTableRow httpMethodName='GET' url='products' urlText='/pruducts' routeDescription='Returns all the products' />
          <RouteTableRow httpMethodName='GET' url='products/1' urlText='/pruducts/1' routeDescription='Returns the product which id matches' />
          <RouteTableRow httpMethodName='GET' url='products/laptop' urlText='/pruducts/laptop' routeDescription='Returns those products which product name matches inc. product comments' />
        </tbody>
      </table>
    </div>
  )
}
