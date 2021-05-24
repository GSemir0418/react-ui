import { Icon } from '../index'
import React, { Fragment } from 'react'
import './dialog.scss'
import classes from '../helpers/classes'

interface Props {
  visible: boolean
}


const Dialog: React.FunctionComponent<Props> = (props) => {
  const cn = 'Dialog'
  return (
    props.visible ?
      <Fragment>
        <div className={classes(cn,'mask')}></div>
        <div className={classes(cn,'')}>
          <div className={classes(cn,'close')}>
            <Icon name='close' />
          </div>
          <header className={classes(cn,'header')}>
            提示
          </header>
          <main className={classes(cn,'main')}>
            {props.children}
          </main>
          <footer className={classes(cn,'footer')}>
            <button>ok</button>
            <button>cancel</button>
          </footer>
        </div>
      </Fragment> :
      null
  )
}
export default Dialog