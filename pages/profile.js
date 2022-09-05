import React from 'react'
import Layout from '../components/Layout/Layout'
const Profile = () => {
  return <div>profile</div>
}

export default Profile
Profile.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
