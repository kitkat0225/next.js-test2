import React from 'react'
import Layout, { siteTitle } from '../components/layout'
import { DatePicker, Space, Input } from 'antd'
import 'antd/dist/antd.css'

function onChange(date, dateString) {
  console.log(date, dateString);
}

const IndexPage = () => (
  <Layout>
    <h1>
      This is second next.js App { siteTitle }.
    </h1>
    <Space direction="vertical">
      <DatePicker onChange={onChange} />
      <DatePicker onChange={onChange} picker="week" />
      <DatePicker onChange={onChange} picker="month" />
      <DatePicker onChange={onChange} picker="quarter" />
      <DatePicker onChange={onChange} picker="year" />
      <Input placeholder="Basic Usage"></Input>
    </Space>,
  </Layout>
)

export default IndexPage