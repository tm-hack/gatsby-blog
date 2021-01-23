import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Header from "../components/Header"
import Footer from "../components/Footer"

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          id
          frontmatter {
            title
            tags
            date(formatString: "YYYY年MM月DD日")
          }
        }
      }
    }
  }
`

const Body = styled.div`
  background: #f4f4f4;
  padding: 1em;
  > articles {
    display: flex;
    justify-content: center;
    ul {
        list-style: none;
        padding: 0px;
        width: 95%;
    }
    li {
        background: white;
        padding: 1em;
        margin-bottom: 1em;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
        div {
        padding: 0.25em;
        }
        span {
        display: inline-block;
        padding: 0.25em;
        background: var(--theme-color);
        color: white;
        margin: 0 0.25em 0.25em 0;
        }
        a {
        text-decoration: none;
        color: black;
        }
    }
  }
`


const IndexPage = ({ data }) => {

    // query結果を取得する
    const edges = data.allMarkdownRemark.edges

    // renderする
    return (
        <React.Fragment>
            <Header />
            <Body>
                <h1>全ての記事</h1>
                <articles>
                <ul>
                    {edges.map((edge) => (
                        <li key={edge.node.id}>
                            <Link to={edge.node.id}>
                                <div>
                                    {edge.node.frontmatter.tags.map((tag) => (
                                        <span key={tag}>{tag}</span>
                                    ))}
                                </div>
                                <div>{edge.node.frontmatter.title}</div>
                                <div>{edge.node.frontmatter.date}</div>
                            </Link>
                        </li>
                    ))}
                </ul>
                </articles>
            </Body>
            <Footer />
        </React.Fragment>
    )
}

export default IndexPage
