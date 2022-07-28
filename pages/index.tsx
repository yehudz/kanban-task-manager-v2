import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import TopBar from '../components/layout/TopBar'
import BoardColumnsContainer from '../components/layout/BoardColumnsContainer'
import Head from 'next/head'
import appContext from '../context/appContext'
import LeftSidebar from '../components/layout/LeftSidebar'
import MobileMenu from '../components/ui/MobileMenu'
import { Board, TaskItem } from '../typings/common.types'
import ResuableModal from '../components/reusables/ReusableModal'
import TaskDetailsForm from '../components/reusables/TaskDetailsForm'
import TaskForm from '../components/reusables/TaskForm'
import BoardForm from '../components/reusables/BoardForm'

// Dummy data singleton
import dummyData from '../data.json'
import WarningMessage from '../components/reusables/WarningMessage'

const Home: NextPage = (props) => {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false)
  const [exampleBoard, setExampleBoard] = useState<Board>({name: '', columns: []})
  const [modalVisibility, setModalVisibility] = useState<boolean>(false)
  const [taskDetails, setTaskDetails] = useState<TaskItem>({title: '', description: '', status: ''})
  const [modalContentType, setModalContentType] = useState<string>('')
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true)

  // Should check for what is requested to show in the modal
  const ModalContent = ()=> {
    switch(modalContentType) {
      case "ADD_NEW_TASK": 
        return <TaskForm 
                  formTitle="Create New Task"
                  title=""
                  description=""
                  status=""
                  buttonText='Create Task'
                />
      case "TASK_DETAILS":
        return <TaskDetailsForm 
                  title={taskDetails?.title} 
                  description={taskDetails?.description}
                  status={taskDetails?.status}
                  subtasks={taskDetails?.subtasks}
                />
      case "CREATE_NEW_BOARD":
        setOpenMobileMenu(false)
        return <BoardForm 
                  formTitle='Create New Board'
                  boardName=''
                  boardColumns={[]}
                />
      case "EDIT_TASK": 
        return <TaskForm 
                  formTitle="Edit Task"
                  title={taskDetails?.title} 
                  description={taskDetails?.description}
                  status={taskDetails?.status}
                  subtasks={taskDetails?.subtasks}
                  buttonText='Save Changes'
                />
      case "EDIT_BOARD":
        return <BoardForm 
                  formTitle='Edit Board'
                  boardName={exampleBoard.name}
                  boardColumns={exampleBoard.columns}
                />
      case "DELETE_TASK": 
        return <WarningMessage 
                  title="Delete this task?"
                  itemName={taskDetails?.title}
                  type="task"
                />
      case "DELETE_BOARD": 
      return <WarningMessage 
                title="Delete this board?"
                itemName={exampleBoard.name}
                type="board"
              />
      default:
        return null
    }
  }

  useEffect(()=> {
    if (window.innerWidth < 768) setIsMobile(true)
    else setIsMobile(false)
    window.addEventListener('resize', ()=> {
      if (window.innerWidth < 768) setIsMobile(true)
      else setIsMobile(false)
    })
    return ()=> {}
  }, [])

  setTimeout(()=> {
    setExampleBoard(dummyData.boards[0])
  }, 1000)

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
            setTaskDetails, 
            setModalContentType, 
            sidebarOpen, 
            setSidebarOpen
          }
        }>
        <div className="flex flex-row w-full h-screen bg-grey-400 dark:bg-midnight">
          <div data-testid="left-container" className={`leftContainer ${sidebarOpen ? 'sidebarOpen' : ''}`}>
            {!isMobile && <LeftSidebar />}
          </div>
          {isMobile && <MobileMenu show={openMobileMenu}/>}
            <div data-testid="right-container" className='rightContainer w-full'>
            <TopBar boardName={exampleBoard.name}/>
            <BoardColumnsContainer board={exampleBoard}/>
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
