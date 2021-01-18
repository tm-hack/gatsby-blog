import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Header from "../components/Header"
import Footer from "../components/Footer"

export const pageQuery = graphql`
  query markdown($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        tags
        date(formatString: "YYYY年MM月DD日")
      }
    }
  }
`

const Body = styled.div`
  background: #f4f4f4;
  padding: 2em;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  word-wrap: break-word;
  > article {
    width: 60%;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    background: white;
    border-radius: 2px;
    padding: 1.5em;
    margin-bottom: 1.5em;
    div:last-child {
      img {
        max-width: 100%;
      }
      a {
        color: var(--theme-color);
        text-decoration: none;
      }
    }
  }
  .frontmatter {
    &.tag {
      display: inline-block;
      background: var(--theme-color);
      color: white;
      margin: 0 0.25em 0.25em 0;
      padding: 0.25em;
    }
    &.date {
      margin-top: 0.5em;
      color: #666;
    }
  }
  > section {
    width: 30%;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    h3 {
      padding: 0.5em;
      margin: 0px;
      border-radius: 2px;
      box-sizing: content-box;
      color: white;
      background: var(--theme-color);
    }
    ul {
      list-style: none;
      padding: 0px;
      li {
        padding: 0.75em;
        background: white;
        margin-bottom: 1em;
        border-radius: 2px;
      }
      a {
        text-decoration: none;
        color: black;
      }
    }
  }
`

const PostPage = ({ data }) => {
  const html = data.markdownRemark.html
  const { title, tags, date } = data.markdownRemark.frontmatter

  return (
    <React.Fragment>
      <Header />
      <Body>
        <article>
          <h1>{title}</h1>
          <div>
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div>{date}</div>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </Body>
      <Footer />
    </React.Fragment>
  )
}

export default PostPage