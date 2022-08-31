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
import type { Board, TaskItem } from '../typings/common.types'

const Home: NextPage = (props) => {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false)
  const [board, setBoard] = useState<Board>({id: '', name: '', columns: []})
  const [boardId, setBoardId] = useState<string>('')
  const [boardsList, setBoardsList] = useState([])
  const [modalVisibility, setModalVisibility] = useState<boolean>(false)
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true)
  const [theme, setTheme] = useState<string>('')
  const [boardsCount, setBoardsCount] = useState<number>(0)
  const [taskDetails, setTaskDetails] = useState<TaskItem>(
    {id: '', title: '', description: '', order: 0}
  )
  const [modalContentType, setModalContentType] = useState<string | null>('')
  const [newTaskCreated, setNewTaskCreated] = useState<boolean>(false)
  const [newCreatedBoard, setNewCreatedBoard] = useState<boolean>(false)
  const [columnAdded, setColumnAdded] = useState<boolean>()
  const [selectedBoard, setSelectedBoard] = useState<number>(0)

  // Function to get all boards array
  async function getAllBoards() {
    const res = await fetch('http://localhost:3001/api/v2/boards', {
      method: "GET"
    })
    let result = await res.json()
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
            board,
            boardsList,
            boardId,
            newTaskCreated,
            setNewTaskCreated,
            newCreatedBoard,
            setNewCreatedBoard,
            selectedBoard,
            setSelectedBoard,
            columnAdded,
            setColumnAdded
          }
        }>
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
              boardName={board?.name} 
              boardColumnsCount={0}
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
      </appContext.Provider>
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