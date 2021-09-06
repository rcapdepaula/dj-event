import { Wrapper } from './Footer.styles'

const Footer = () => {
  return (
    <Wrapper>
      DJ EVENTS ©{' '}
      {
        // get year
        new Date().getFullYear()
      }
    </Wrapper>
  )
}

export default Footer
