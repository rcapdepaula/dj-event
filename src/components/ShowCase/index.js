import djEventImg from '../../../public/images/dj-event.jpg'
import { Hero, InnerHero } from './ShowCase.styles'

const ShowCase = () => {
  return (
    <Hero image={djEventImg}>
      <InnerHero>
        <h1>
          <span>DJ</span>
          <span> Events</span>
        </h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam</p>
      </InnerHero>
    </Hero>
  )
}

export default ShowCase
