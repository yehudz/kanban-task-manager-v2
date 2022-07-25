import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import TopBar from '../components/layout/TopBar'
import ColumnsContainer from '../components/layout/ColumnsContainer'
import Head from 'next/head'
import appContext from '../context/appContext'
import RightSidebar from '../components/layout/RightSidebar'
import MobileMenu from '../components/ui/MobileMenu'

const Home: NextPage = (props) => {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false)
  useEffect(()=> {
    if (window.innerWidth < 900) setIsMobile(true)
  }, [])
  return (
    <>
      <Head>
        <title>Kanban Task Managment</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700&display=swap" rel="stylesheet" />
      </Head>
      <appContext.Provider value={{isMobile, setOpenMobileMenu}}>
        <div className="w-screen h-screen">
          {!isMobile && <RightSidebar />}
          {isMobile && <MobileMenu show={openMobileMenu}/>}
          <TopBar />
          <ColumnsContainer />
        </div>
      </appContext.Provider>
    </>
  )
}

export default Home
