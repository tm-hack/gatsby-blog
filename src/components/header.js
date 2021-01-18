import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Wrapper = styled.header`
  background: var(--theme-color);
  margin: 0px;
  padding: 1em 1em;
  color: white;
  a {
    text-decoration: none;
    color: white;
  }
  h1 {
    margin auto
  }
`;

const Header = () => (
  <Wrapper>
    <h1>
      <Link to="/">taku&aya diary</Link>
    </h1>
  </Wrapper>
)

export default Header