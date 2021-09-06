// next stuffs
import Link from 'next/link'
import Image from 'next/image'

const EvenItem = ({ event }) => {
  return (
    <>
      <div>
        <Image
          src={event.image ? event.image : '/images/event-default.png'}
          alt={event.title}
          width={300}
          height={200}
        />
        <h3>{event.name}</h3>
        <p>{event.description}</p>
      </div>

      <Link href={`/events/${event.slug}`}>
        <a>
          <button>Detalhes</button>
        </a>
      </Link>
    </>
  )
}

export default EvenItem
