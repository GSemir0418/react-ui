import React, { useState } from 'react'
import Dialog from './dialog'
import Button from '../botton/button'

const DialogExample: React.FunctionComponent = () => {
  const [x, setX] = useState(false)
  return (
    <div>
      <Button ghost type="secondary" onClick={()=>{setX(!x)}}>click</Button>
      <Dialog visible={x}>
        <strong>hi</strong>
      </Dialog>
    </div>
  )
}
export default DialogExample