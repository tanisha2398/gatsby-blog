import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const posts = data.allWordpressPost.edges
  console.log(data.allWordpressPost.edges)
  return (
    <Layout>
      <SEO title="home" />
      <h1>Posts</h1>
      {posts.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.slug}>
            {" "}
            <h1>{node.title}</h1>
          </Link>

          <div dangerouslySetInnerHTML={{ __html: node.content }} />
        </div>
      ))}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          slug
          id
          title
          content
          author {
            name
          }
          date
        }
      }
    }
  }
`
