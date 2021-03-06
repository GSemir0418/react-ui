import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, NavLink } from 'react-router-dom'
import IconDemo from './lib/icon/icon.demo'
import ButtonDemo from './lib/button/button.demo'
import DialogExample from './lib/dialog/dialog.example'
import LayoutDemo from './lib/layout/layout.demo'
import ColorExample from './lib/helpers/color.example'
import { Layout, Header, Aside, Content, Footer } from './lib/layout/layout'
import './example.scss'
// import x from './logo.png'


const logo = require('./logo.png')

ReactDOM.render(
  <Router>
    <Layout className='site-page'>
      <Header className='site-header'>
        <div className="site-logo">
          <img src={logo} width='196' height='72' alt="" />
        </div>
      </Header>
      <Layout>
        <Aside className='site-aside'>
          <h2>组件</h2>
          <ul>
            <li>
              <NavLink to='/icon'>Icon</NavLink>
            </li>
            <li>
              <NavLink to='/button'>Button</NavLink>
            </li>
            <li>
              <NavLink to='/dialog'>Dialog</NavLink>
            </li>
            <li>
              <NavLink to='/layout'>Layout</NavLink>
            </li>
            <li>
              <NavLink to='/color'>Theme</NavLink>
            </li>
          </ul>
        </Aside>
        <Content className='site-main'>
          <Route path='/icon' component={IconDemo} />
          <Route path='/button' component={ButtonDemo} />
          <Route path='/dialog' component={DialogExample} />
          <Route path='/layout' component={LayoutDemo} />
          <Route path='/color' component={ColorExample} />
        </Content>
      </Layout>
      <Footer className='site-footer'>
        &copy;Gsemir
      </Footer>
    </Layout>
  </Router>
  , document.querySelector('#root'))