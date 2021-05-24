import React from 'react'
import classes from '../helpers/classes'

interface Props extends React.HTMLAttributes<HTMLElement> {
}
const Content: React.FunctionComponent<Props> = (props) => {
  const cn = 'Layout'
  const { className, ...rest } = props
  return (
    <div className={classes(cn, 'content', [className])} {...rest}>content</div>
  )
}
export default Content