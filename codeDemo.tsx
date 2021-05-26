import React, { useState } from 'react'
import HighLight, { defaultProps } from 'prism-react-renderer'
import Button from './lib/button/button'

interface Props {
  code: string
}

const CodeDemo: React.FunctionComponent<Props> = (props) => {
  const [codeVisible, setCodeVisible] = useState(false)
  return (
    <div>
      {props.children}
      <Button type='text' onClick={() => setCodeVisible(!codeVisible)}>查看代码</Button>
      {
        codeVisible ?
          <HighLight {...defaultProps} code={props.code} language='jsx'>
            {
              ({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={style}>
                  {tokens.map((line, i) => (
                    <div {...getLineProps({ line, key: i })}>
                      {line.map((token, key) => (
                        <span {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )
            }
          </HighLight>
          : null
      }
    </div>
  )
}
export default CodeDemo