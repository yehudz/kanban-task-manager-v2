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
import getBoardData from '../components/hooks/getBoardData'
// Types imports
import { AppContextType } from '../typings/context.types'

const Home: NextPage = (props) => {

  const {
    board,
    setBoard,
    setBoardId,
    isMobile,
    setIsMobile,
    openMobileMenu,
    setOpenMobileMenu,
    setBoardsList,
    sidebarOpen,
    setTheme,
    setBoardsCount,
    newCreatedBoard,
    setNewCreatedBoard,
    setColumnAdded,
    columnsCount,
    selectedBoard
  } = useContext(AppContext) as AppContextType

  // Function to get all boards array
  async function getAllBoards() {
    const result = await getBoardData()
    setBoard(result[selectedBoard])
    setBoardId(result[selectedBoard].id)
    setBoardsCount(result.length)
    setBoardsList(result)
    setNewCreatedBoard(false)
    setColumnAdded(false)
  }

  // Everytime the selected board changes 
  useEffect(()=> {
    getAllBoards()
  }, [newCreatedBoard, selectedBoard])

  // Sets theme
  useEffect(()=> {
    if (!localStorage.getItem('kanbanTheme')) {
      setTheme('dark')
    }
    if (localStorage.kanbanTheme) {
      setTheme(localStorage.kanbanTheme)
    }
  }, [newCreatedBoard])

  // Sets is mobile
  useEffect(()=> {
    setBoardId(board.id)
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
              boardName={board.name} 
              boardColumnsCount={columnsCount}
            />
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
              <BoardColumnsContainer 
                board={board}
              />
            </Suspense>
          </div>
        </div>
        <ResuableModal>
          <ModalContent />
        </ResuableModal>
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