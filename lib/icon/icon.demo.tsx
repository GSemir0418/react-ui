import React from 'react'
import IconExample from './icon.example'
import CodeDemo from '../../codeDemo'

const x = require('!!raw-loader!./icon.example.tsx')
const IconDemo: React.FunctionComponent = (props) => {
  return (
    <CodeDemo code={x.default}>
      <IconExample />
    </CodeDemo>
  )
}
export default IconDemo
