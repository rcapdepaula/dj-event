import styled from 'styled-components'

export const OverlayMenuStyles = styled.div`
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transform: ${(props) =>
    props.isOpen ? 'translateY(0)' : 'translateY(-100%)'};
  position: fixed;
  transition: all 0.3s ease-in-out;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  z-index: 100;

  .inner {
    position: relative;
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 20px;
    background-color: var(--dark-grey);
    color: var(--white);
  }

  .overlayMenu {
    text-align: center;
    list-style-type: none;
    margin: 0;

    li {
      margin: 0 0 20px 0;
    }

    li.overlayActive {
      color: var(--myColor);
    }

    a {
      font-family: 'Maven Pro', Arial, Helvetica, sans-serif;
      font-size: var(--font-med);
      color: var(--white);
      transition: all 0.3s ease;
      text-decoration: none;

      :hover {
        color: var(--my-color);
      }
    }
  }
  .close-button {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 1.5rem;
    color: var(--white);
    cursor: pointer;
    outline: none;
    padding: 20px;
    transition: all 1s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`
