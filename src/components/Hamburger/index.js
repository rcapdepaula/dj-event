// hamburger icon
import { AiOutlineMenu } from 'react-icons/ai'
// styles
import { HamburgerButtom } from './Hamburger.styles'

const Hamburger = ({ toggleHamburgerMenu }) => {
  return (
    <HamburgerButtom onClick={toggleHamburgerMenu}>
      <AiOutlineMenu />
    </HamburgerButtom>
  )
}

export default Hamburger
