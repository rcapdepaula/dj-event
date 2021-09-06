import styled from 'styled-components'

export const Wrapper = styled.header`
  // mobile
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--dark-grey);
  height: 60px;

  a {
    text-decoration: none;
    color: var(--white);

    &:hover {
      color: var(--light-grey);
    }
  }

  ul {
    display: flex;
    margin: 0;
  }

  li {
    margin: 0px 0px 0px 1rem;
    list-style: none;
  }

  // desktop
  @media (min-width: 768px) {
    flex-direction: row;
    font-size: 1.2rem;
    font-weight: bold;

    .logo {
      margin: 0;
      width: 250px;
    }
  }
`
export const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: var(--max-width);
  margin: 0 auto;
`
