import React, { useState } from 'react'
import { Button } from '../components/Button'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { Card } from '../components/Card'
import { CreateContentModel } from '../components/CreateContentModel'
import { SideBar } from '../components/SideBar'

const Dashboard = () => {

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <SideBar />
      <div className='p-4 ml-72 min-h-screen bg-gray-200 border-2 border-gray-300'>
        <CreateContentModel open={modalOpen} onClose={() => { setModalOpen(false) }} />
        <div className='flex justify-end gap-2'>
          <Button onClick={() => { setModalOpen(true) }} varient='primary' text='Add Content' startIcon={<PlusIcon />}></Button>
          <Button varient='secondary' text='Share Brain' startIcon={<ShareIcon />}></Button>
        </div>
        <div className='flex gap-4'>
          <Card title='my Tweet' link='https://x.com/kaabilcoder/status/1840290832097697908' type='twitter' />
          <Card title='master react js' link='https://www.youtube.com/watch?v=M9O5AjEFzKw&t=25269s' type='Youtube' />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
