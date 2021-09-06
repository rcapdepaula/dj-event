import styled from 'styled-components'

export const Hero = styled.div`
  // background image props with linear-gradient destrucutring the image props
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${({ image }) => image.src});

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  // height props
  width: 100%;
  height: 300px;
`

export const InnerHero = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: var(--white);

  h1 {
    font-size: 3rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--white);
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }
`
