import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

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
    padding-top: 0;
    margin-left: 0;
    padding-left: 0;
  }

  :last-child {
    margin-right: 0;
    padding-right: 0;
  }

  &.current-page {
    border-bottom: 2px solid #bed8d4;
  }
`

const Header = () => {
  const breakpoints = useBreakpoint()
  return (
    <header
      css={css`
        display: flex;
        justify-content: space-between;

        margin: 5vh 10vw 5vh 10vw;

        * {
          margin: 0;
        }
      `}
    >
      <NavLink to="/" fontWeight="bold">
        Gordy 👋
      </NavLink>
      <nav>
        {breakpoints.sm ? (
          <NavLink to="/about" activeClassName="current-page">
            About
          </NavLink>
        ) : (
          <>
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
            </NavLink>{" "}
          </>
        )}
      </nav>
    </header>
  )
}

export default Header
