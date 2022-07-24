import type { NextPage } from 'next'
import TopBar from '../components/layout/TopBar'
import ColumnsContainer from '../components/layout/ColumnsContainer'
import Head from 'next/head'
const Home: NextPage = (props) => {
  return (
    <>
      <Head>
        <title>Kanban Task Managment</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700&display=swap" rel="stylesheet" />
      </Head>
      <div className="w-screen h-screen">
        <TopBar isMobile={true}/>
        <ColumnsContainer />
      </div>
    </>
  )
}

export default Home
