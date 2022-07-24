import type { NextPage } from 'next'

const Home: NextPage = (props) => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">
        Hello world!
      </h1>
    </div>
  )
}

export default Home
