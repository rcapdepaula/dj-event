import { useState } from 'react'

// Link
import Link from 'next/link'
// navigation
import Navigation from '../Navigation'
// Hamburger menu
import Hamburger from '../Hamburger'
//  Overlay menu
import OverlayMenu from '../OverlayMenu'

// styles
import { Wrapper, InnerWrapper } from './Header.styles'

const Header = () => {
  // open / close overlay menu
  const [isOpen, setIsOpen] = useState(false)

  // toggle overlay menu
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Wrapper>
      <InnerWrapper>
        <Link href='/'>
          <a>DJ EVENTS</a>
        </Link>
        <Navigation />
        <Hamburger toggleHamburgerMenu={toggleMenu} />
        <OverlayMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      </InnerWrapper>
    </Wrapper>
  )
}

export default Header
