import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const NavLink = styled(Link)`
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || "normal"};
  line-height: 1;
  margin: 0 1rem 0 1rem;
  padding: 0.25rem;
  text-decoration: none;
  color: black;
  font-size: 20px;

  :first-child {
    margin-left: 3rem;
  }

  :last-child {
    margin-right: 3rem;
  }

  &.current-page {
    border-bottom: 2px solid #bed8d4;
  }
`

const Header = () => (
  <header
    css={css`
      display: flex;
      justify-content: space-between;

      background: white;
      margin: 15vh 0 15vh 0;

      * {
        margin: 0;
      }
    `}
  >
    <NavLink to="/" fontWeight="bold">
      Gordy 👋
    </NavLink>
    <nav>
      <NavLink to="/about" activeClassName="current-page">
        About
      </NavLink>
      <NavLink to="/words" activeClassName="current-page">
        Words
      </NavLink>
      <NavLink to="/photos" activeClassName="current-page">
        Photos
      </NavLink>
      <NavLink to="/code" activeClassName="current-page">
        Code
      </NavLink>
    </nav>
  </header>
)

export default Header
