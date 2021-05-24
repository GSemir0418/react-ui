import React from 'react'
import classes from '../helpers/classes'

interface Props extends React.HTMLAttributes<HTMLElement> { }
const Aside: React.FunctionComponent<Props> = (props) => {
  const cn = 'Layout'
  const { className, ...rest } = props
  return (
    <div className={classes(cn, 'aside', [className])} {...rest}>aside</div>
  )
}
export default Aside