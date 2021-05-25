import React from 'react'
import classes from '../helpers/classes'

interface Props extends React.HTMLAttributes<HTMLElement> {
}
const Footer: React.FunctionComponent<Props> = (props) => {
  const cn = 'Layout'
  const { className, ...rest } = props
  return (
    <div className={classes(cn, 'footer', [className])} {...rest}>
      {props.children}
    </div>
  )
}
export default Footer