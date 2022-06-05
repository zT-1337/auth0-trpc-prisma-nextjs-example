import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className='container'>
      <span className='mx-4 text-cyan-700'>Hello World</span>
      <span className='mx-4 text-fuchsia-900'><Link href='/api/auth/login'>Login</Link></span>
      <span className='mx-4 text-green-900'><Link href='/api/auth/logout'>Logout</Link></span>
      <span className='mx-4 text-orange-900'><Link href='/profile'>Profile</Link></span>
    </div>
  )
}

export default Home
