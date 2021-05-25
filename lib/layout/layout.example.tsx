import React from 'react'
import Aside from './aside'
import Content from './content'
import Footer from './footer'
import Header from './header'
import Layout from './layout'
import './layout.example.scss'

export default function () {
  return (
    <div>
      <div>
        <h2>第一个例子</h2>
        <Layout style={{height:500,width:600}}>
          <Header className='x'>HEADER</Header>
          <Content className='y'>CONTENT</Content>
          <Footer className='x'>FOOTER</Footer>
        </Layout>
      </div>
      <div>
        <h2>第二个例子</h2>
        <Layout style={{height:500,width:600}}>
          <Header className='x'>HEADER</Header>
          <Layout>
            <Aside className='z'>ASIDE</Aside>
            <Content className='y'>CONTENT</Content>
          </Layout>
          <Footer className='x'>FOOTER</Footer>
        </Layout>
      </div>
      <div>
        <h2>第三个例子</h2>
        <Layout style={{height:500,width:600}}>
          <Header className='x'>HEADER</Header>
          <Layout>
            <Content className='y'>CONTENT</Content>
            <Aside className='z1'>ASIDE</Aside>
          </Layout>
          <Footer className='x'>FOOTER</Footer>
        </Layout>
      </div>
      <div>
        <h2>第四个例子</h2>
        <Layout style={{height:500,width:600}}>
          <Aside className='z'>ASIDE</Aside>
          <Layout>
            <Header className='x'>HEADER</Header>
            <Content className='y'>CONTENT</Content>
            <Footer className='x'>FOOTER</Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  )
}