import React from 'react'
import LayoutExample from './layout.example'
import CodeDemo from '../../codeDemo'

const x = require('!!raw-loader!./layout.example.tsx')
const IconDemo: React.FunctionComponent = () => {
  return (
    <CodeDemo code={x.default}>
      <LayoutExample />
    </CodeDemo>
  )
}
export default IconDemo
