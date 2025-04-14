import React from 'react'
import MovieList from './components/MovieList'
import MovieInput from './components/MovieInput'

const App = () => {
  return (
    <div className='bg-gradient-to-br from-gray-700 to-gray-200 h-screen'>
      <div className='w-full h-full flex flex-col gap-5 items-center justify-center text-center'>
        <MovieInput/>
        <MovieList/>
      </div>
    </div>
  )
}

export default App