import type { NextPage } from 'next'
import TopBar from '../components/layout/TopBar'
import ColumnsContainer from '../components/layout/ColumnsContainer'
const Home: NextPage = (props) => {
  return (
    <div className="w-screen h-screen">
      <TopBar />
      <ColumnsContainer />
    </div>
  )
}

export default Home
