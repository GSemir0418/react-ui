import React, { ReactElement } from 'react'
import classes from '../helpers/classes'
import Aside from './aside'
import './layout.scss'

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | Array<ReactElement>
}
const Layout: React.FunctionComponent<Props> = (props) => {
  const cn = 'Layout'
  const children = props.children as Array<ReactElement>
  const hasAside = length in children &&
    children.reduce((result,node)=>result||node.type===Aside,false)
  const { className, ...rest } = props
  return (
    <div className={classes(cn, '', [className],{hasAside})} {...rest}>
      {}
      {props.children}
    </div>
  )
}
export default Layout