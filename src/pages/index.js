import * as React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`
const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: blue;
`



export default ({ data }) => {
  const { allMarkdownRemark } = data
  console.log(data)
  return (
    <Layout>
      <div>
        <h1>Kendi's Thoughts</h1>
        <h4>{ data.allMarkdownRemark.totalCount } Posts</h4>
        {
          allMarkdownRemark.edges.map(({node}) => (
            <div key={node.id}>
              <BlogLink to={node.fields.slug}>
                <BlogTitle>{ node.frontmatter.title } - { node.frontmatter.date }</BlogTitle>
              </BlogLink>
              <p>{ node.excerpt }</p>
            </div>
          ))
        }
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
            description
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
}`


