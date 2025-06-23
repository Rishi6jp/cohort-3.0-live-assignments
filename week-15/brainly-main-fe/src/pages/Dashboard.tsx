import { useEffect, useState } from 'react'
import '../App.css'
import { Button } from '../components/Button'
import { Card, type CardProp } from '../components/Card'
import { CreateContentModal } from '../components/CreateContentModal'
import { PlusIcon } from '../components/icons/PlusIcon'
import { ShareIcon } from '../components/icons/ShareIcon'
import { Sidebar } from '../components/Sidebar'
import { useContent } from '../hooks/useContent'

function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const {contents, refresh} = useContent();

  useEffect(() => {
    refresh()
  }, [modalOpen])

  return (
  <div>
    <div>
      <Sidebar/>
    </div>
    <div className='bg-gray-300 h-min-screen p-4 ml-72'>
      <CreateContentModal open={modalOpen} onClose={() => {
        setModalOpen(false)
      }}/>
      <div className='flex justify-end gap-2 p-3'>
        <Button variant="secondary" startIcon={<ShareIcon size="md"/>} text="Share Brain"></Button>
        <Button onClick={() => {
          setModalOpen(true)
        }} variant="primary" startIcon={<PlusIcon/>} text="Add Content"></Button>
      </div>
      <div className='flex gap-2 flex-wrap'>
        {contents.map(({type, link, title}) =>  <Card
        type={type}
        link={link}
        title={title}/>
        )}
       
      </div>
      
    </div>
  </div>
    
  )
}

export default Dashboard;
