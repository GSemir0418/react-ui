import ReactDOM from 'react-dom'
import React, { Fragment, ReactElement } from 'react'
import { Icon } from '../index'
import classes from '../helpers/classes'
import './dialog.scss'
interface Props {
  visible: boolean;
  buttons: Array<ReactElement>;
  onClose: React.MouseEventHandler;
  closeOnClickMask?: boolean
}


const Dialog: React.FunctionComponent<Props> = (props) => {
  const cn = 'Dialog'
  const onClickClose: React.MouseEventHandler = (e) => { props.onClose(e) }
  const onClickMask: React.MouseEventHandler = (e) => {
    if (props.closeOnClickMask) {
      props.onClose(e)
    }
  }
  const x = props.visible ?
    <Fragment>
      <div className={classes(cn, 'mask')} onClick={onClickMask}></div>
      <div className={classes(cn, '')}>
        <div className={classes(cn, 'close')} onClick={onClickClose}>
          <Icon name='close' />
        </div>
        <header className={classes(cn, 'header')}>
          提示
      </header>
        <main className={classes(cn, 'main')}>
          {props.children}
        </main>
        <footer className={classes(cn, 'footer')}>
          {props.buttons.map((button, index) =>
            React.cloneElement(button, { key: index })
          )}
        </footer>
      </div>
    </Fragment> :
    null
  return (
    ReactDOM.createPortal(x, document.body)
  )
}

Dialog.defaultProps = {
  closeOnClickMask: false
}

const Alert = (content: string) => {

}

export default Dialog