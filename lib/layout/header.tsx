import React from 'react'
import classes from '../helpers/classes'

interface Props extends React.HTMLAttributes<HTMLElement>{
}
const Header:React.FunctionComponent<Props>=(props)=>{
  const cn = 'Layout'
  const { className, ...rest } = props
  return(
    <div className={classes(cn,'header', [className])} {...rest}>
      {props.children}
    </div>
  )
}
export default Header