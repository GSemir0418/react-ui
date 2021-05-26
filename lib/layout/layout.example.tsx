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
        <h2>EXAMPLE1</h2>
        <Layout className='lat'>
          <Header className='x'>HEADER</Header>
          <Content className='y'>CONTENT</Content>
          <Footer className='x'>FOOTER</Footer>
        </Layout>
      </div>
      <br/>
      <div>
        <h2>EXAMPLE2</h2>
        <Layout className='lat'>
          <Header className='x'>HEADER</Header>
          <Layout>
            <Aside className='z'>ASIDE</Aside>
            <Content className='y'>CONTENT</Content>
          </Layout>
          <Footer className='x'>FOOTER</Footer>
        </Layout>
      </div>
      <br/>
      <div>
        <h2>EXAMPLE3</h2>
        <Layout className='lat'>
          <Header className='x'>HEADER</Header>
          <Layout>
            <Content className='y'>CONTENT</Content>
            <Aside className='z1'>ASIDE</Aside>
          </Layout>
          <Footer className='x'>FOOTER</Footer>
        </Layout>
      </div>
      <br/>
      <div>
        <h2>EXAMPLE4</h2>
        <Layout className='lat'>
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