import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import Menu from "react-burger-menu/lib/menus/stack"

const NavLink = styled(Link)`
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || "normal"};
  line-height: 1;
  margin: 0 1rem 0 1rem;
  padding: 0.25rem;
  text-decoration: none;
  color: black;
  font-size: 20px;

  &:hover {
    color: grey;
  }

  :first-of-type {
    margin-left: 0;
    padding-left: 0;
  }

  :last-of-type {
    margin-right: 0;
    padding-right: 0;
  }

  &.current-page {
    border-bottom: 2px solid #efece4;
  }
`

const MobileMenu = styled(Menu)`
  /* .bm-burger-button and .bm-burger-bars styled in layout.js */

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    margin: 2vh 2vh;
  }

  .bm-cross {
    height: 24px !important;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: black;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #efece4;
    padding: 1em;
    font-size: 32px;
  }

  /* Wrapper for item list */
  .bm-item-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  /* Our sidebar item styling */
  .bm-item {
    display: inline-block;
    text-decoration: inherit;
    color: black;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: #efece4;
  }
`

const Header = () => {
  const breakpoints = useBreakpoint()

  return (
    <header>
      <NavLink
        to="/"
        fontWeight="bold"
        css={css`
          position: absolute;
          top: 4vh;
          left: 10vw;
          font-size: 32px;
          font-family: Lora;

          &:hover {
            color: black;
          }
        `}
      >
        Gordy Lanza
      </NavLink>
      {breakpoints.sm ? (
        <MobileMenu right>
          <Link className="menu-item" to="/">
            Home
          </Link>
          <Link className="menu-item" to="/about">
            About
          </Link>
          <Link className="menu-item" to="/tags/writing">
            Words
          </Link>
          <Link className="menu-item" to="/tags/photography">
            Photos
          </Link>
          <Link className="menu-item" to="/tags/coding">
            Code
          </Link>
        </MobileMenu>
      ) : (
        <nav
          css={css`
            display: flex;
            justify-content: space-between;
            position: absolute;
            top: 5vh;
            right: 10vw;
          `}
        >
          <NavLink to="/about" activeClassName="current-page">
            About
          </NavLink>
          <NavLink to="/tags/writing" activeClassName="current-page">
            Words
          </NavLink>
          <NavLink to="/tags/photography" activeClassName="current-page">
            Photos
          </NavLink>
          <NavLink to="/tags/coding" activeClassName="current-page">
            Code
          </NavLink>{" "}
        </nav>
      )}
    </header>
  )
}

export default Header
