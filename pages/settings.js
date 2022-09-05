import React from 'react'
import Layout from '../components/Layout/Layout'
const Settings = () => {
  return <div>settings</div>
}

export default Settings
Settings.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
