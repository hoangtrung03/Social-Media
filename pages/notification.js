import React from 'react'
import Layout from '../components/Layout/Layout'
const Notification = () => {
  return <div>notification</div>
}

export default Notification
Notification.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
