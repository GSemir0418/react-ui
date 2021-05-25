import React, { useState } from 'react'
import HighLight, { defaultProps } from 'prism-react-renderer'

interface Props {
  code: string
}

const CodeDemo: React.FunctionComponent<Props> = (props) => {
  const [codeVisible, setCodeVisible] = useState(false)
  return (
    <div>
      <div>
        {props.children}
      </div>
      <div>
        <button onClick={() => setCodeVisible(!codeVisible)}>查看代码</button>
      </div>
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
    </div>
  )
}
export default CodeDemo