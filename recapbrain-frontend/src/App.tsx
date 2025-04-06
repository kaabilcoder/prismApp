import React from 'react'
import './App.css'
import { Button } from './components/Button'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'
import { Card } from './components/Card'

const App = () => {
  return (
    <div className='p-4'>
      <div className='flex justify-end gap-2'>
        <Button varient='primary' text='Add Content' startIcon={<PlusIcon />}></Button>
        <Button varient='secondary' text='Share Brain' startIcon={<ShareIcon />}></Button>
      </div>
      <div className='flex gap-4'>
        <Card title='my Tweet' link='https://x.com/kaabilcoder/status/1840290832097697908' type='twitter' />
        <Card title='master react js' link='https://www.youtube.com/watch?v=M9O5AjEFzKw&t=25269s' type='Youtube' />
      </div>
    </div>
  )
}

export default App
