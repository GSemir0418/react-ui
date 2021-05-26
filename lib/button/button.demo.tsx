import React from 'react'
import ButtonExample from './button.example'
import CodeDemo from '../../codeDemo'

const x = require('!!raw-loader!./button.example.tsx')
const ButtonDemo: React.FunctionComponent = () => {
  return (
    <CodeDemo code={x.default}>
      <ButtonExample />
    </CodeDemo>
  )
}
export default ButtonDemo