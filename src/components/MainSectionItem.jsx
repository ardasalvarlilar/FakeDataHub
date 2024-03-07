/* eslint-disable react/prop-types */

export default function MainSectionItem({children}) {
  return (
    <section className='flex flex-col items-center justify-center w-[50%] gap-4'>
      {children}
    </section>
  )
}
