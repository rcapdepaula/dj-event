import { API_URL } from '@config/index'
import Layout from '@/components/Layout/'
import Image from 'next/image'
// import icons
import { FaPencilAlt, FaTimes } from 'react-icons/fa'
import Link from 'next/link'
const EventPage = ({ evt }) => {
  const deletEvent = (e) => {
    console.log('deleting event')
  }
  return (
    <Layout>
      <h1>Single Event Page</h1>
      <Link href={`/events/edit/${evt.id}`}>
        <a>
          <FaPencilAlt /> Edit
        </a>
      </Link>
      <a href='#' onClick={deletEvent}>
        <FaTimes /> Delete
      </a>
      <span>
        {evt.date} - {evt.time}
      </span>
      <h2>{evt.name}</h2>
      {/* // Image */}
      {evt.image && (
        <Image src={evt.image} alt={evt.name} width={960} height={600} />
      )}
      <h3>Performers:</h3>
      <p>{evt.performers}</p>
      <h3>Description:</h3>
      <p>{evt.description}</p>
    </Layout>
  )
}

export default EventPage

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json()

  const paths = events.map((evt) => ({
    params: { slug: evt.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/api/events/${slug}`)
  const events = await res.json()

  return {
    props: {
      evt: events[0],
    },
    revalidate: 1,
  }
}
