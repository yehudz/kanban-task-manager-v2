import type { NextPage } from 'next'
import { useContext, useEffect, useState } from 'react'
import Head from 'next/head'

// Performance imports
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Component imports
import TopBar from '../components/layout/TopBar'
const BoardColumnsContainer = dynamic(() => import('../components/layout/BoardColumnsContainer'), {
  suspense: true,
})
import {AppContext} from '../context/AppContext'
const LeftSidebar = dynamic(() => import('../components/layout/LeftSidebar'))
import MobileMenu from '../components/ui/MobileMenu'
import ResuableModal from '../components/reusables/ReusableModal'
import ModalContent from '../components/ui/ModalContent'
// Types imports
import { AppContextType } from '../typings/context.types'
import BoardsContextProvider from '../context/BoardsContext'
import ColumnsContextProvider from '../context/ColumnsContext'

const Home: NextPage = (props) => {

  const {
    isMobile,
    setIsMobile,
    openMobileMenu,
    setOpenMobileMenu,
    sidebarOpen,
    setTheme,
  } = useContext(AppContext) as AppContextType

  // Sets is mobile
  useEffect(()=> {
    // setBoardId(board.id)
    if (window.innerWidth < 768) setIsMobile(true)
    else setIsMobile(false)
    window.addEventListener('resize', ()=> {
      if (window.innerWidth < 768) setIsMobile(true)
      else setIsMobile(false)
    })
    return ()=> {}
  }, [])


  return (
    <>
      <Head>
        <title>Kanban Task Managment</title>
      </Head>
      <BoardsContextProvider>
        <div 
          className="
            flex 
            flex-row 
            w-full 
            h-screen 
            bg-grey-100 
            dark:bg-midnight
          "
        >
          <div 
            data-testid="left-container" 
            className={`
              leftContainer 
              ${sidebarOpen ? 
                'sidebarOpen' : 
                ''
              }
            `}
          >
            {!isMobile && <LeftSidebar />}
          </div>
         
          {isMobile && 
            <MobileMenu show={openMobileMenu}/>}
            <div 
              data-testid="right-container" 
              className='
                rightContainer 
                w-full
              '
            >
            <TopBar 
              // boardColumnsCount={}
            />
            <ColumnsContextProvider>
              <Suspense 
                fallback={
                  <h1 
                    className='
                      text-grey 
                      dark:text-white
                    '
                  >
                    Loading...
                  </h1>}>
                  <BoardColumnsContainer />
              </Suspense>
              <ResuableModal>
                <ModalContent />
              </ResuableModal>
            </ColumnsContextProvider>
          </div>
        </div>
      </BoardsContextProvider>

      {openMobileMenu && 
        <div 
          className='overlay' 
          onClick={
            ()=> setOpenMobileMenu(false)
          }
        >
        </div>}
    </>
  )
}

export default Home