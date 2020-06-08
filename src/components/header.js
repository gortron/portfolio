import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const NavLink = styled(Link)`
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || "normal"};
  line-height: 1;
  margin: 0 0.75rem 0 0;
  padding: 0.25rem;
  text-decoration: none;
  color: #50514f;

  &.current-page {
    border-bottom: 2px solid #50514f;
  }

  &.last-of-type {
    margin-right: 0;
  }
`

const Header = () => (
  <header
    css={css`
      display: flex;
      justify-content: space-between;

      background: #fff4e4;
      border-bottom: 1px solid #50514f;

      * {
        margin: 0;
      }
    `}
  >
    <NavLink to="/" fontWeight="bold">
      Gordy 👋
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
