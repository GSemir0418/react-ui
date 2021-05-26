import React, { useState } from 'react'
import Dialog from './dialog'
import Button from '../button/button'

const DialogExample: React.FunctionComponent = () => {
  const [x, setX] = useState(false)
  const [y, setY] = useState(false)
  return (
    <div>
      <h1>EXAMPLE1</h1>
      <div>
        <Button ghost type="secondary" onClick={() => setX(!x)}>click</Button>
        <Dialog visible={x} buttons={
          [
            <Button onClick={() => setX(!x)} ghost type='secondary'>ok</Button>,
            <Button onClick={() => setX(!x)} type='text'>cancel</Button>
          ]
        } onClose={() => setX(!x)}>
          <strong>hi</strong>
        </Dialog>
      </div>
      <h1>EXAMPLE2</h1>
      <div>
        <Button ghost type="secondary" onClick={() => setY(!y)}>click</Button>
        <Dialog visible={y} closeOnClickMask={true} buttons={
          [
            <Button onClick={() => setY(!y)} ghost type='secondary'>ok</Button>,
            <Button onClick={() => setY(!y)} type='text'>cancel</Button>
          ]
        } onClose={() => setY(!y)}>
          <strong>点击dialog外部关闭</strong>
        </Dialog>
      </div>
    </div>
  )
}
export default DialogExample