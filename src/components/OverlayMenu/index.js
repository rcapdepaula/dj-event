// import Link from 'next/link'
import Link from 'next/link'
// import Image from 'next/image'
import Image from 'next/image'
// Styles
import { OverlayMenuStyles } from './OverlayMenu.styles'
// import logo
import InvertedLogo from '../../../public/images/logo_white.svg'
// import close buttom icon
import { IoMdCloseCircle } from 'react-icons/io'

const OverlayMenu = ({ isOpen, toggleMenu }) => {
  return (
    <OverlayMenuStyles isOpen={isOpen}>
      <div className='inner'>
        <Link href='/'>
          <Image
            src={InvertedLogo}
            alt='Inverted Logo'
            width='250px'
            height='100%'
          />
        </Link>
        <ul className='overlayMenu'>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className='close-button' onClick={toggleMenu}>
        <IoMdCloseCircle />
      </div>
    </OverlayMenuStyles>
  )
}

export default OverlayMenu
