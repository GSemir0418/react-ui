import React from 'react'
import Aside from './aside'
import Content from './content'
import Footer from './footer'
import Header from './header'
import Layout from './layout'

export default function () {
  return (
    <div>
      <div>
        <h2>第一个例子</h2>
        <Layout>
          <Header>header</Header>
          <Content>content</Content>
          <Footer>footer</Footer>
        </Layout>
      </div>
      <div>
        <h2>第二个例子</h2>
        <Layout>
          <Header>header</Header>
          <Layout>
            <Aside></Aside>
            <Content></Content>
          </Layout>
          <Footer>footer</Footer>
        </Layout>
      </div>
      <div>
        <h2>第三个例子</h2>
        <Layout>
          <Header>header</Header>
          <Layout>
            <Content></Content>
            <Aside></Aside>
          </Layout>
          <Footer>footer</Footer>
        </Layout>
      </div>
      <div>
        <h2>第四个例子</h2>
        <Layout>
          <Aside></Aside>
          <Layout>
            <Header>header</Header>
            <Content></Content>
            <Footer>footer</Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  )
}