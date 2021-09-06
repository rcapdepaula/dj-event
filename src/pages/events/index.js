import { Wrapper } from '@/styles/Index.styles'
import Layout from '@/components/Layout'
import { API_URL } from '@config/index'
// eventItem component
import EventItem from '@/components/EventItem'

const Home = ({ events }) => {
  return (
    <Layout>
      <Wrapper>
        <h1>Eventos</h1>

        {/* // list of events */}
        {events.length == 0 && <h4>Sem Eventos</h4>}
        {events.map((event) => (
          <EventItem key={event.id} event={event} />
        ))}
      </Wrapper>
    </Layout>
  )
}

export default Home
// getStaticProps
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json()

  return {
    props: {
      events,
      revalidade: 1,
    },
  }
}
