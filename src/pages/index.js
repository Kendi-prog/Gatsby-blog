import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"



export default ({ data }) => {
  const { allMarkdownRemark } = data
  console.log(data)
  return (
    <Layout>
      <div>
        <h1>Kendi's Thoughts</h1>
        <h4>{ data.allMarkdownRemark.totalCount }</h4>
        {
          allMarkdownRemark.edges.map(({node}) => (
            <div key={node.id}>
              <span>{ node.frontmatter.title } - { node.frontmatter.date }</span>
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
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
            description
          }
          excerpt
        }
      }
    }
}`


