import Link from 'next/link'
// styles
import { Wrapper } from './Navigation.styles'
const Navigation = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link href='/events'>
            <a>Events</a>
          </Link>
        </li>
      </ul>
    </Wrapper>
  )
}

export default Navigation
