import styled from 'styled-components'

export const HamburgerButtom = styled.div`
  position: absolute;
  right: 10px;
  display: inline-block;
  color: var(--white);
  width: 34px;
  height: 34px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  // desktop 768px
  @media (min-width: 768px) {
    display: none;
  }
`
