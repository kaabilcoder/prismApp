import { useEffect, useState } from 'react'
import { Button } from '../components/Button'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { Card } from '../components/Card'
import { CreateContentModel } from '../components/CreateContentModel'
import { SideBar } from '../components/SideBar'
import { useContent } from '../hooks/useContent'
import { BACKEND_URL } from '../conifg'
import axios from 'axios'

const Dashboard = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const { contents, refresh } = useContent();

  useEffect(() => {
    refresh();
  }, [modalOpen])

  return (
    <div>
      <SideBar />
      <div className='p-4 ml-72 min-h-screen bg-gray-200 border-2 border-gray-300'>
        <CreateContentModel open={modalOpen} onClose={() => { setModalOpen(false) }} />
        <div className='flex justify-end gap-2'>
          <Button onClick={() => { setModalOpen(true) }} varient='primary' text='Add Content' startIcon={<PlusIcon />}></Button>
          <Button onClick={async () => {
            const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, { share: true }, { headers: { "Authorization": localStorage.getItem('token') } });
            const shareURL = `http://localhost:5173/share/${response.data.hash}`;
            navigator.clipboard.writeText(shareURL).then(() => {
              alert('Share URL copied to clipboard!');
            }).catch(err => {
              console.error('Failed to copy URL: ', err);
            });
          }} varient='secondary' text='Share Brain' startIcon={<ShareIcon />}></Button>
        </div>
        <div className='flex gap-4 flex-wrap'>
          {contents.map(({ type, link, title }) =>
            <Card
              type={type}
              title={title}
              link={link}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
