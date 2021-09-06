import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from '../Header'
import Footer from '../Footer'
import ShowCase from '../ShowCase'
import { Wrapper } from './Layout.styles'

const Layout = ({ title, keywords, description, children }) => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
      </Head>
      <Header />
      {router.pathname === '/' && <ShowCase />}
      <Wrapper>{children}</Wrapper>
      <Footer />
    </>
  )
}

export default Layout

// default props
Layout.defaultProps = {
  title: 'DJ Events | Find The Hostest Parties',
  keywords: 'music, dj, dance, events',
  description: 'Find The Best and Latest Events',
}
