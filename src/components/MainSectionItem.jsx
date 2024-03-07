/* eslint-disable react/prop-types */

export default function MainSectionItem({children}) {
  return (
    <section className='flex flex-col items-center justify-center md:w-[50%] w-[75%] gap-4'>
      {children}
    </section>
  )
}
