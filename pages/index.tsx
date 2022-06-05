import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className='container'>
      <span className='mx-4 text-cyan-700'>Hello World</span>
      <a href="/api/auth/login" className='mx-4 text-fuchsia-900'>Login</a>
      <a href="/api/auth/logout" className='mx-4 text-green-900'>Logout</a>
      <a href="/profile" className='mx-4 text-orange-900'>Profile</a>
    </div>
  )
}

export default Home
