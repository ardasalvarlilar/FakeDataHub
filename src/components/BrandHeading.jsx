/* eslint-disable react/prop-types */

export default function BrandHeading({textSize}) {
  return (
    <h1 className={`flex items-center bg-black rounded-sm ${textSize}`}>
      <div className='text-white bg-transparent'>FakeData</div>
      <div className='text-black bg-[#f89a28] ml-0.5 rounded-sm'>Hub</div>
    </h1>
  )
}
