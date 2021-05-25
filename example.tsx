import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import IconExample from './lib/icon/icon.example'
import ButtonExample from './lib/botton/button.example'
import DialogExample from './lib/dialog/dialog.example'
import LayoutExample from './lib/layout/layout.example'
import { Layout, Header, Aside, Content, Footer } from './lib/layout/layout'
import './example.scss'
// import x from './logo.png'
const logo = require('./logo.png')

ReactDOM.render(
  <Router>
    <Layout>
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
              <Link to='/icon'>Icon</Link>
            </li>
            <li>
              <Link to='/button'>Button</Link>
            </li>
            <li>
              <Link to='/dialog'>Dialog</Link>
            </li>
            <li>
              <Link to='/layout'>Layout</Link>
            </li>
          </ul>
        </Aside>
        <Content className='site-main'>
          <Route path='/icon' component={IconExample} />
          <Route path='/button' component={ButtonExample} />
          <Route path='/dialog' component={DialogExample} />
          <Route path='/layout' component={LayoutExample} />
        </Content>
      </Layout>
      <Footer className='site-footer'>
        &copy;Gsemir
      </Footer>
    </Layout>
  </Router>
  , document.querySelector('#root'))