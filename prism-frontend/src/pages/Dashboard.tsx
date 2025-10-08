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
import toast from 'react-hot-toast'

const Dashboard = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const { contents, refresh } = useContent();

  useEffect(() => {
    refresh();
  }, [modalOpen])

  //Delete post handler
  async function handleDeleteContent(contentId: string){

          if(!contentId){
            return toast.error("Cannot delete: Content ID is missing")
          }
          try{
             const response = await axios.delete(`${BACKEND_URL}/api/v1/content/${contentId}`, {
                  headers: {
                      "Authorization": localStorage.getItem("token")
                  }
              })
              refresh();
              toast.success(response.data.message);

          } catch(error: any){
              console.error("something went wrong" + error);
              const message = error.response?.data?.message || error.message || "something went wrong";
              toast.error(message)
          }
      }

  return (
    <div>
      <SideBar />

      <div className='p-4 ml-72 min-h-screen bg-gray-200 border-2 border-gray-300'>
        <CreateContentModel open={modalOpen} onClose={() => { setModalOpen(false) }} />

        <div className='flex justify-end gap-2'>
          <Button onClick={() => { setModalOpen(true) }} varient='secondary' text='Add Content' startIcon={<PlusIcon />}></Button>
          <Button onClick={async () => {
            const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, { share: true }, { headers: { "Authorization": localStorage.getItem('token') } });
            const shareURL = `http://localhost:5173/share/${response.data.hash}`;
            navigator.clipboard.writeText(shareURL).then(() => {
              toast('Share URL copied to clipboard!');
            }).catch(err => {
              console.error('Failed to copy URL: ', err);
              toast.error("failed to copy url")
            });
          }} varient='primary' text='Share Brain' startIcon={<ShareIcon />}></Button>
        </div>

        <div className='flex gap-4 flex-wrap m-12'>
          {contents.map(({ type, link, title, _id }) =>
            <Card
              type={type}
              title={title}
              link={link}
              key={_id}
              onDelete={()=> handleDeleteContent(_id)}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
