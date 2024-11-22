import svg from '../assets/Total/proposal-icon.svg'

export default function Box({title, total, color, icon}) {
  return(
    <div className='bg-white rounded-xl p-5 flex flex-col w-44 shadow space-y-2 m-5'>

      <img src={icon} alt="icon" className='w-8'/>
      <p className=' text-start text-2xl font-medium'>{total}</p>
      <p className='text-start font-medium'>{title}</p>
    </div>
  )
}
