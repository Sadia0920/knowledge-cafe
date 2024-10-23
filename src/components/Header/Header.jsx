import Profile from '../../assets/images/Profile.png'

export default function Header() {
  return (
    <header className='flex justify-between items-center my-5 pb-5 border-b-2'>
        <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
        <img src={Profile} alt="" />
    </header>
  )
}

