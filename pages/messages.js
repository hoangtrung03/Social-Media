import React from 'react'
import Layout from '../components/Layout/Layout'
const Messages = () => {
  return <div>messages</div>
}

export default Messages
Messages.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
