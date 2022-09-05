import Head from 'next/head'
import ContentCenter from '../components/ContentCenter/ContentCenter'
import Layout from '../components/Layout/Layout'
import SiteBarRight from '../components/SiteBarRight/SiteBarRight'
import { initializeApollo } from '../lib/apolloclient'
import Login from '../lib/mutations.graphql'

export default function Home() {
  return (
    <div className="flex">
      <ContentCenter />
      <SiteBarRight />
    </div>
  )
}
Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

// export const getServerSideProps = async () => {
//   const apolloClient = initializeApollo();

//   await apolloClient.query({
//     mutation: Login,
//     variables: { email, password },
//   });

//   const props = {
//     initializeApollo: apolloClient.cache.extract(),
//     revalidate: 1,
//   };

//   return {
//     props,
//   };
// };
