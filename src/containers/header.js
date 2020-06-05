import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const NavLink = styled(Link)`
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || "normal"};
  line-height: 1;

  &.current-page {
    border-bottom: 2px solid #222;
  }
`

// Note the calculation for padding!
const Header = () => (
  <header
    css={css`
      display: flex;
      justify-content: space-between;
    `}
  >
    <NavLink to="/" fontWeight="bold">
      Gordy
    </NavLink>
    <nav>
      <NavLink to="/" activeClassName="current-page">
        Home
      </NavLink>
      <NavLink to="/about" activeClassName="current-page">
        About
      </NavLink>
    </nav>
  </header>
)

export default Header
