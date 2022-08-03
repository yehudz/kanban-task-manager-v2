import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Head from 'next/head'

// Performance imports
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Component imports
import TopBar from '../components/layout/TopBar'
const BoardColumnsContainer = dynamic(() => import('../components/layout/BoardColumnsContainer'), {
  suspense: true,
})
import appContext from '../context/appContext'
const LeftSidebar = dynamic(() => import('../components/layout/LeftSidebar'))
import MobileMenu from '../components/ui/MobileMenu'
import ResuableModal from '../components/reusables/ReusableModal'
import ModalContent from '../components/ui/ModalContent'
// Types imports
import { Board, TaskItem } from '../typings/common.types'

const Home: NextPage = (props) => {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false)
  const [board, setBoard] = useState<Board>({name: '', columns: []})
  const [modalVisibility, setModalVisibility] = useState<boolean>(false)
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true)
  const [theme, setTheme] = useState<string>('')
  const [boardsCount, setBoardsCount] = useState<number>(0)
  const [taskDetails, setTaskDetails] = useState<TaskItem>({title: '', description: '', status: ''})
  const [modalContentType, setModalContentType] = useState<string | null>('')
  // Should check for what is requested to show in the modal

  useEffect(()=> {
    if (!localStorage.getItem('kanbanTheme')) {
      setTheme('dark')
    }
    if (localStorage.kanbanTheme) {
      setTheme(localStorage.kanbanTheme)
    }
  }, [])

  useEffect(()=> {
    // setExampleBoard(dummyData.boards[0])
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700&display=swap" rel="stylesheet" />
      </Head>
      <appContext.Provider 
        value={
          {
            isMobile, 
            setOpenMobileMenu, 
            modalVisibility, 
            setModalVisibility, 
            taskDetails,
            setTaskDetails, 
            modalContentType,
            setModalContentType, 
            sidebarOpen, 
            setSidebarOpen,
            theme,
            setTheme,
            boardsCount,
            board
          }
        }>
        <div className="flex flex-row w-full h-screen bg-grey-100 dark:bg-midnight">
          <div data-testid="left-container" className={`leftContainer ${sidebarOpen ? 'sidebarOpen' : ''}`}>
            {!isMobile && <LeftSidebar />}
          </div>
          {isMobile && <MobileMenu show={openMobileMenu}/>}
            <div data-testid="right-container" className='rightContainer w-full'>
            <TopBar boardName={board.name} boardColumnsCount={board.columns.length}/>
            <Suspense fallback={<h1 className='text-grey dark:text-white'>Loading...</h1>}>
              <BoardColumnsContainer board={board}/>
            </Suspense>
          </div>
        </div>
        <ResuableModal>
          <ModalContent />
        </ResuableModal>
      </appContext.Provider>
      {openMobileMenu && <div className='overlay' onClick={()=> setOpenMobileMenu(false)}></div>}
    </>
  )
}

export default Home
